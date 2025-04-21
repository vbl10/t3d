import * as THREE from 'three';

export class InwardGridBasket extends THREE.Mesh
{
    private gridMaterialLeftRight: THREE.ShaderMaterial;
    private gridMaterialFrontBack: THREE.ShaderMaterial;
    private gridMaterialTopBottom: THREE.ShaderMaterial;

    constructor(
        dim: THREE.Vector3,
        color: THREE.Vector4,
        gridThickness: number
    ) {
        super();

        const gridMaterial = new THREE.ShaderMaterial({
            vertexShader: `
                varying vec2 vUv;

                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec2 vUv;
                uniform vec2 vDim;
                uniform vec4 vColor;
                uniform float uThickness;
                uniform int blocks[8]; // 4 blocks with x and y coordinates each

                void main() {
                    vec2 a = vUv * vDim;
                    vec2 b = a - vec2(floor(a.x), floor(a.y));

                    if (b.x < uThickness || b.x > (1.0 - uThickness) || b.y < uThickness || b.y > (1.0 - uThickness)) {
                        float alphaX = (uThickness - (b.x > 0.5 ? (1.0 - b.x) : b.x)) / uThickness;
                        alphaX = 1.0 * alphaX + 0.35 * (1.0 - alphaX);
                        
                        float alphaY = (uThickness - (b.y > 0.5 ? (1.0 - b.y) : b.y)) / uThickness;
                        alphaY = 1.0 * alphaY + 0.35 * (1.0 - alphaY);

                        float alpha = max(alphaX, alphaY);

                        gl_FragColor = vColor * alpha + vec4(0.0, 0.0, 0.0, 1.0) * (1.0 - alpha);
                    }
                    else {
                        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
                        for (int i = 0; i < 4; i++) {
                            int blockX = blocks[i * 2];
                            int blockY = blocks[i * 2 + 1];

                            if (int(a.x) == blockX && int(a.y) == blockY) {
                                gl_FragColor = vec4(0.5, 1.0, 0.0, 1.0);
                                break;
                            }
                        }
                    }
                }
            `,
            side: THREE.FrontSide,
            uniforms: {
                vDim: { value: new THREE.Vector2(0, 0) },
                vColor: { value: color },
                uThickness: { value: gridThickness },
                blocks: { value: [ 
                    -1, -1,
                    -1, -1, 
                    -1, -1, 
                    -1, -1
                ] }
            }
        });

        this.gridMaterialLeftRight = gridMaterial.clone();
        this.gridMaterialLeftRight.uniforms["vDim"].value = new THREE.Vector2(dim.z, dim.y);

        this.gridMaterialFrontBack = gridMaterial.clone();
        this.gridMaterialFrontBack.uniforms["vDim"].value = new THREE.Vector2(dim.x, dim.y);

        this.gridMaterialTopBottom = gridMaterial.clone();
        this.gridMaterialTopBottom.uniforms["vDim"].value = new THREE.Vector2(dim.x, dim.z);

        const quadUv = new THREE.BufferAttribute(
            new Float32Array([
                0.0, 0.0,
                1.0, 0.0,
                1.0, 1.0,
                0.0, 1.0
            ]),
            2
        );

        //left
        const leftGeometry = new THREE.BufferGeometry();
        leftGeometry.setAttribute("position", 
            new THREE.BufferAttribute(
                new Float32Array([
                    -dim.x/2, -dim.y/2, +dim.z/2,
                    -dim.x/2, -dim.y/2, -dim.z/2,
                    -dim.x/2, +dim.y/2, -dim.z/2,
                    -dim.x/2, +dim.y/2, +dim.z/2,
                ]),
                3
            )
        );
        leftGeometry.setAttribute("uv", quadUv);
        leftGeometry.setIndex([0, 1, 2, 0, 2, 3]);

        //right
        const rightGeometry = new THREE.BufferGeometry();
        rightGeometry.setAttribute("position", 
            new THREE.BufferAttribute(
                new Float32Array([
                    +dim.x/2, -dim.y/2, +dim.z/2,
                    +dim.x/2, -dim.y/2, -dim.z/2,
                    +dim.x/2, +dim.y/2, -dim.z/2,
                    +dim.x/2, +dim.y/2, +dim.z/2,
                ]),
                3
            )
        );
        rightGeometry.setAttribute("uv", quadUv);
        rightGeometry.setIndex([0, 2, 1, 0, 3, 2]);

        //front
        const frontGeometry = new THREE.BufferGeometry();
        frontGeometry.setAttribute("position", 
            new THREE.BufferAttribute(
                new Float32Array([
                    -dim.x/2, -dim.y/2, +dim.z/2,
                    +dim.x/2, -dim.y/2, +dim.z/2,
                    +dim.x/2, +dim.y/2, +dim.z/2,
                    -dim.x/2, +dim.y/2, +dim.z/2,
                ]),
                3
            )
        );
        frontGeometry.setAttribute("uv", quadUv);
        frontGeometry.setIndex([0, 3, 2, 0, 2, 1]);

        //back
        const backGeometry = new THREE.BufferGeometry();
        backGeometry.setAttribute("position", 
            new THREE.BufferAttribute(
                new Float32Array([
                    -dim.x/2, -dim.y/2, -dim.z/2,
                    +dim.x/2, -dim.y/2, -dim.z/2,
                    +dim.x/2, +dim.y/2, -dim.z/2,
                    -dim.x/2, +dim.y/2, -dim.z/2,
                ]),
                3
            )
        );
        backGeometry.setAttribute("uv", quadUv);
        backGeometry.setIndex([0, 2, 3, 0, 1, 2]);
        
        //bottom
        const bottomGeometry = new THREE.BufferGeometry();
        bottomGeometry.setAttribute("position", 
            new THREE.BufferAttribute(
                new Float32Array([
                    -dim.x/2, -dim.y/2, +dim.z/2,
                    +dim.x/2, -dim.y/2, +dim.z/2,
                    +dim.x/2, -dim.y/2, -dim.z/2,
                    -dim.x/2, -dim.y/2, -dim.z/2,
                ]),
                3
            )
        );
        bottomGeometry.setAttribute("uv", quadUv);
        bottomGeometry.setIndex([0, 2, 3, 0, 1, 2]);

        

        this.add(
            new THREE.Mesh(
                leftGeometry,
                this.gridMaterialLeftRight
            ),
            new THREE.Mesh(
                rightGeometry,
                this.gridMaterialLeftRight
            ),
            new THREE.Mesh(
                frontGeometry,
                this.gridMaterialFrontBack
            ),
            new THREE.Mesh(
                backGeometry,
                this.gridMaterialFrontBack
            ),
            new THREE.Mesh(
                bottomGeometry,
                this.gridMaterialTopBottom
            )
        );
    }

    updateHighlights(blocks: THREE.Vector3[]) {
        for (let i = 0; i < 4; i++) {
            const block = blocks[i];

            this.gridMaterialLeftRight.uniforms["blocks"].value[i * 2] = Math.floor(block.z);
            this.gridMaterialLeftRight.uniforms["blocks"].value[i * 2 + 1] = Math.floor(block.y);

            this.gridMaterialFrontBack.uniforms["blocks"].value[i * 2] = Math.floor(block.x);
            this.gridMaterialFrontBack.uniforms["blocks"].value[i * 2 + 1] = Math.floor(block.y);

            this.gridMaterialTopBottom.uniforms["blocks"].value[i * 2] = Math.floor(block.x);
            this.gridMaterialTopBottom.uniforms["blocks"].value[i * 2 + 1] = Math.floor(block.z);
        }
    }
}