import * as THREE from 'three';
import { InwardGridBasket } from './inward-grid-box';
import { Tetromino, TetrominoLogicCore } from './tetromino';
import { VoxelGeometry } from './voxel-geometry';

export class PlayField extends THREE.Mesh {
    
    private voxelMaterial = new THREE.MeshPhongMaterial({ color: 0xa0a0a0, specular: 0xa0a0a0, shininess: 30 });
    private voxelGeometry = new VoxelGeometry(new THREE.Vector3(1, 1, 1), 0.05);
    
    //private debugGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    //private debugMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    //private debugMeshes: THREE.Mesh[] = [];
    //private debugMesh = new THREE.Mesh();

    private voxelStates: boolean[] = [];
    private voxelMeshes: THREE.Mesh[] = [];
    private voxelsMesh = new THREE.Mesh();
    private grid: InwardGridBasket;

    constructor(
        public dim: THREE.Vector3
    ) {
        super();

        for (let i = 0; i < dim.x*dim.y*dim.z; i++) {
            this.voxelStates.push(false); 
            
            const voxelMesh = new THREE.Mesh(this.voxelGeometry, this.voxelMaterial);
            voxelMesh.castShadow = true;
            voxelMesh.receiveShadow = true;
            voxelMesh.position.copy(this.worldToVisualPos(this.voxelIdxToVec(i)));
            this.voxelMeshes.push(voxelMesh);
            
            //this.debugMeshes.push(new THREE.Mesh(this.debugGeometry, this.voxelMaterial));
            //this.debugMeshes[i].position.copy(this.worldToVisualPos(this.voxelIdxToVec(i)));
        }
        //this.debugMesh.add(...this.debugMeshes);

        this.grid = new InwardGridBasket(dim, new THREE.Vector4(0.55, 0.15, 0.75, 1), 0.03);

        this.add(
            this.grid,
            this.voxelsMesh,
            //this.debugMesh
        );
    }

    tetrominoCollision(tetromino: TetrominoLogicCore): boolean {
        
        for (let voxel of tetromino.voxels) {
            const pos = voxel.clone().add(tetromino.position);
            if ( 
                pos.x < 0 || pos.x >= this.dim.x
                || pos.z < 0 || pos.z >= this.dim.z
                || pos.y < 0
                || (pos.y < this.dim.y && this.voxelStates[this.vecToVoxelIdx(pos)])
            ) {
                return true;
            }
        }
        return false;
    }

    // return: number of rows cleared
    placeTetromino(tetromino: TetrominoLogicCore): number {
        const length1 = this.voxelsMesh.children.length;

        for (let voxel of tetromino.voxels) {
            const pos = voxel.clone().add(tetromino.position);
            const posIdx = this.vecToVoxelIdx(pos);

            this.voxelStates[posIdx] = true;
            this.voxelsMesh.add(this.voxelMeshes[posIdx]);

            //this.debugMeshes[posIdx].material = this.debugMaterial;
        }

        let fullRows = 0;
        for (let y = 0; y < this.dim.y;) {
            let fullRow = true;
            for (let x = 0; x < this.dim.x && fullRow; x++) {
                for (let z = 0; z < this.dim.z && fullRow; z++) {
                    fullRow = this.voxelStates[this.vecToVoxelIdx(new THREE.Vector3(x, y, z))]
                }
            }

            if (fullRow) {
                fullRows++;

                // descend rows from bottom to top
                for (let yy = y; yy < this.dim.y - 1; yy++) {
                    for (let x = 0; x < this.dim.x; x++) {
                        for (let z = 0; z < this.dim.z; z++) {
                            const posIdx0 = this.vecToVoxelIdx(new THREE.Vector3(x, yy, z));
                            const posIdx1 = this.vecToVoxelIdx(new THREE.Vector3(x, yy + 1, z));
                            
                            if (this.voxelStates[posIdx0] != this.voxelStates[posIdx1]) {
                                if (this.voxelStates[posIdx0]) {
                                    this.voxelsMesh.remove(this.voxelMeshes[posIdx0]);
                                }
                                else {
                                    this.voxelsMesh.add(this.voxelMeshes[posIdx0]);
                                }
                                this.voxelStates[posIdx0] = this.voxelStates[posIdx1];
                            }
                        }
                    }
                }
                // clear top-most row
                for (let x = 0; x < this.dim.x; x++) {
                    for (let z = 0; z < this.dim.z; z++) {
                        const posIdx0 = this.vecToVoxelIdx(new THREE.Vector3(x, this.dim.y - 1, z));
                        
                        if (this.voxelStates[posIdx0]) {
                            this.voxelsMesh.remove(this.voxelMeshes[posIdx0]);
                            this.voxelStates[posIdx0] = false;
                        }
                    }
                }
            }
            else y++;
        }

        return fullRows;
    }

    reset() {
        for (let i = 0; i < this.voxelStates.length; i++)  {
            this.voxelStates[i] = false;
            //this.debugMeshes[i].material = this.voxelMaterial;
        }
        this.voxelsMesh.clear();
    }

    private worldToVisualPos(worldPos: THREE.Vector3): THREE.Vector3 {
        return worldPos.add(new THREE.Vector3(
            -this.dim.x / 2,// + 0.5, 
            -this.dim.y / 2,// + 0.5, 
            -this.dim.z / 2,// + 0.5
        ))
        .multiply(new THREE.Vector3(
            1, 1, -1
        ))
    }

    private vecToVoxelIdx(vec: THREE.Vector3): number {
        return vec.x + vec.y * this.dim.x + vec.z * this.dim.x * this.dim.y;
    }
    private voxelIdxToVec(voxelIdx: number): THREE.Vector3 {
        return new THREE.Vector3(
            voxelIdx % this.dim.x,
            Math.floor(voxelIdx % (this.dim.x * this.dim.y) / this.dim.x),
            Math.floor(voxelIdx / (this.dim.x * this.dim.y))
        );
    }
}