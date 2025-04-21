import * as THREE from 'three';

export class Tetromino extends THREE.Mesh {
    
    private cubeMaterial = new THREE.MeshPhongMaterial();
    private cubes: THREE.Mesh[] = [];
    private shapeIdx = 0;
    public logicCore = new TetrominoLogicCore();
    
    constructor(
        public playFieldLogicalOriginVisualOffset: THREE.Vector3
    ) {
        super();

        const boxGeometry = new THREE.BoxGeometry(0.95, 0.95, 0.95);

        for (let i = 0; i < 4; i++) {
            this.cubes.push(
                new THREE.Mesh(boxGeometry, this.cubeMaterial)
            );
            this.add(this.cubes[i]);
        }
        this.setShape(this.shapeIdx);
    }

    copyLogicCore(logicCore: TetrominoLogicCore) {
        this.logicCore.copy(logicCore);
        for (let i = 0; i < 4; i++) {
            this.cubes[i].position.copy(this.logicCore.voxels[i]);
            this.cubes[i].position.z *= -1;
        }
        this.updateVisualPosition();
    }

    setShape(shapeIdx: number) {
        this.shapeIdx = shapeIdx;
        for (let i = 0; i < 4; i++) {
            this.logicCore.voxels[i].copy(tetrominos[shapeIdx].voxels[i]);

            const cube = this.cubes[i];
            cube.position.copy(tetrominos[shapeIdx].voxels[i]);
            cube.position.z *= -1;
        }
        this.cubeMaterial.color = tetrominos[shapeIdx].color;
    }

    updateVisualPosition() {
        this.position.x = this.logicCore.position.x + this.playFieldLogicalOriginVisualOffset.x + 0.5;
        this.position.y = this.logicCore.position.y + this.playFieldLogicalOriginVisualOffset.y + 0.5;
        this.position.z = -this.logicCore.position.z + this.playFieldLogicalOriginVisualOffset.z - 0.5;
    }
}

export class TetrominoLogicCore {
    voxels: THREE.Vector3[] = [];
    position: THREE.Vector3 = new THREE.Vector3();

    constructor() {
        for (let i = 0; i < 4; i++) this.voxels.push(new THREE.Vector3());
    }

    clone(): TetrominoLogicCore {
        const out = new TetrominoLogicCore();
        out.voxels.length = this.voxels.length;
        for (let i = 0; i < this.voxels.length; i++) out.voxels[i] = this.voxels[i].clone();
        out.position.copy(this.position);
        return out;
    }
    copy(src: TetrominoLogicCore) {
        for (let i = 0; i < 4; i++) this.voxels[i].copy(src.voxels[i]);
        this.position.copy(src.position);
    }
    rotateWorld(axis: THREE.Vector3) {
        for (let i = 0; i < 4; i++) {
            const voxel = this.voxels[i];

            voxel
            .addScalar(0.5)
            .applyMatrix4((new THREE.Matrix4()).makeRotationAxis(axis, Math.PI / 2))
            .addScalar(-0.5)
            voxel.x = Math.round(voxel.x);
            voxel.y = Math.round(voxel.y);
            voxel.z = Math.round(voxel.z);
        }
    }
    getBoundingBox() {
        let left = this.voxels[0].x;
        let right = this.voxels[0].x;
        
        let bottom = this.voxels[0].y;
        let top = this.voxels[0].y;
        
        let front = this.voxels[0].z;
        let back = this.voxels[0].z;
        
        for (let voxel of this.voxels) {
            left = Math.min(left, voxel.x);
            right = Math.max(right, voxel.x + 1);

            bottom = Math.min(bottom, voxel.y);
            top = Math.max(top, voxel.y + 1);

            front = Math.min(front, voxel.z);
            back = Math.max(back, voxel.z + 1);
        }

        left += this.position.x;
        right += this.position.x;

        bottom += this.position.y;
        top += this.position.y;

        front += this.position.z;
        back += this.position.z;

        return { left, right, bottom, top, front, back };
    }
}

export const tetrominos = [
    // L
    {
        voxels: [
            new THREE.Vector3(-1, -1, 0),
            new THREE.Vector3(0, -1, 0),
            new THREE.Vector3(-1, 0, 0),
            new THREE.Vector3(-1, 1, 0)
        ],
        color: new THREE.Color(0xff0000)
    },
    
    // Escada
    {
        voxels: [
            new THREE.Vector3(-1, -1, 0),
            new THREE.Vector3(0, -1, 0),
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(1, 0, 0)
        ],
        color: new THREE.Color(0xffff00)
    },
    
    // 2x2
    {
        voxels: [
            new THREE.Vector3(-1, -1, 0),
            new THREE.Vector3(0, -1, 0),
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(-1, 0, 0)
        ],
        color: new THREE.Color(0x00ffff)
    },
    
    // I
    {
        voxels: [
            new THREE.Vector3(0, -2, 0),
            new THREE.Vector3(0, -1, 0),
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 1, 0)
        ],
        color: new THREE.Color(0xff0088)
    },
    
    // T
    {
        voxels: [
            new THREE.Vector3(-1, -1, 0),
            new THREE.Vector3(0, -1, 0),
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(1, -1, 0)
        ],
        color: new THREE.Color(0x8800ff)
    },
    
    // Cobra Esq
    {
        voxels: [
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, -1, 0),
            new THREE.Vector3(-1, -1, 0),
            new THREE.Vector3(-1, -1, -1)
        ],
        color: new THREE.Color(0x8888ff)
    },

    // Cobra Dir
    {
        voxels: [
            new THREE.Vector3(-1, -1, -1),
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, -1, 0),
            new THREE.Vector3(0, -1, -1)
        ],
        color: new THREE.Color(0x88ff88)
    },

    // Quina
    {
        voxels: [
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, -1, 0),
            new THREE.Vector3(-1, -1, 0),
            new THREE.Vector3(0, -1, -1)
        ],
        color: new THREE.Color(0x88ff00)
    }
] as const;

/*
    
1)
    B
    B
    BB

2)
     BB
    BB

3)
    BB
    BB

4)
    B
    B
    B
    B

5)
     B
    BBB

6)
    B
    2F

7)
     B
    F2

8)
    B
    2B
*/
