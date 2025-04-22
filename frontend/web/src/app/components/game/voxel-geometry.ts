import * as THREE from "three";

export class VoxelGeometry extends THREE.BufferGeometry {
    
    constructor(dim: THREE.Vector3, chamfer: number) {
        super();

        // cube verticies
        const unitFrontVerticies = [
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(1, 0, 0),
            new THREE.Vector3(1, 1, 0),
            new THREE.Vector3(0, 1, 0)
        ];
        const unitRightVerticies = [
            new THREE.Vector3(1, 0, 0),
            new THREE.Vector3(1, 0, -1),
            new THREE.Vector3(1, 1, -1),
            new THREE.Vector3(1, 1, 0)
        ];
        const unitBackVerticies = [
            new THREE.Vector3(1, 0, -1),
            new THREE.Vector3(0, 0, -1),
            new THREE.Vector3(0, 1, -1),
            new THREE.Vector3(1, 1, -1)
        ];
        const unitLeftVerticies = [
            new THREE.Vector3(0, 0, -1),
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 1, 0),
            new THREE.Vector3(0, 1, -1)
        ];
        const unitTopVerticies = [
            new THREE.Vector3(0, 1, 0),
            new THREE.Vector3(1, 1, 0),
            new THREE.Vector3(1, 1, -1),
            new THREE.Vector3(0, 1, -1)
        ];
        const unitBottomVerticies = [
            new THREE.Vector3(0, 0, -1),
            new THREE.Vector3(1, 0, -1),
            new THREE.Vector3(1, 0, 0),
            new THREE.Vector3(0, 0, 0)
        ];
        
        // redimension and chamfer
        const faces = [
            unitFrontVerticies, 
            unitRightVerticies, 
            unitBackVerticies, 
            unitLeftVerticies, 
            unitTopVerticies, 
            unitBottomVerticies
        ]
        .map(side => {
            const out = side.map(vx => vx.multiply(dim));
            
            let avg = new THREE.Vector3();
            for (let v of out) avg.add(v);
            avg.divideScalar(out.length);

            for (let v of out) {
                const dir = v.clone().sub(avg).normalize();
                v.sub(dir.multiplyScalar(chamfer * 1.414213562));
            }

            return out;
        });

        const position: number[] = [];
        faces.forEach(side => side.forEach(v => position.push(v.x, v.y, v.z)));
        

        this.setAttribute("position", new THREE.BufferAttribute(new Float32Array(position), 3));

        this.setIndex([
            // faces ==========
            // front
            0, 1, 2, 0, 2, 3,
            // right
            4, 5, 6, 4, 6, 7,
            // back
            8, 9, 10, 8, 10, 11,
            // left
            12, 13, 14, 12, 14, 15,
            // top
            16, 17, 18, 16, 18, 19,
            // bottom
            20, 21, 22, 20, 22, 23,

            // corners ========
            // front-left-bottom
            0, 13, 23,
            // front-right-bottom
            1, 22, 4,
            // front-right-top
            2, 7, 17,
            // front-left-top
            3, 16, 14,
            // back-right-bottom
            8, 5, 21,
            // back-left-bottom
            9, 20, 12,
            // back-left-top
            10, 15, 19,
            // back-right-top
            11, 18, 6,

            // edges ==========
            // front-bottom
            0, 23, 1, 23, 22, 1,
            // front-right
            1, 4, 7, 1, 7, 2,
            // front-top
            2, 17, 3, 3, 17, 16,
            // front-left
            3, 14, 0, 14, 13, 0,
            // back-bottom
            8, 21, 9, 21, 20, 9,
            // back-left
            9, 12, 15, 9, 15, 10,
            // back-top
            10, 19, 18, 10, 18, 11,
            // back-right
            11, 6, 8, 8, 6, 5,
            // top-right
            17, 6, 18, 17, 7, 6,
            // top-left
            16, 19, 14, 19, 15, 14,
            // bottom-right
            22, 21, 5, 22, 5, 4,
            // bottom-left
            23, 12, 20, 23, 13, 12
        ]);


        this.computeVertexNormals();
    }
}