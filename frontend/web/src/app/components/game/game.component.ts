import {
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import * as THREE from 'three';
import { CommonModule } from '@angular/common';
import { Tetromino, TetrominoLogicCore, tetrominos } from './tetromino';
import { PlayField } from './play-field';
import { KeyboardService } from './keyboard.service';

@Component({
    selector: 'app-game',
    imports: [CommonModule],
    templateUrl: 'game.component.html',
    styleUrl: 'game.component.scss',
})
export class GameComponent implements OnInit, OnDestroy {
    PI = Math.PI;

    @ViewChild('rendererContainer', { static: true })
    rendererContainer!: ElementRef;

    scene!: THREE.Scene;
    camera!: THREE.PerspectiveCamera;
    renderer!: THREE.WebGLRenderer;

    animationFrameHandle: any;
    paused = true;
    tp0: number = 0;

    playField: PlayField;
    tetromino: Tetromino;
    tetrominoDescent: { vel: number, deltaH: number };
    score = 0;
    rowsCleared = 0;
    keyStateTickPeriod = 0.15;

    constructor(
        public kbd: KeyboardService
    ) {
        this.playField = new PlayField(new THREE.Vector3(4, 12, 4));
        this.tetromino = new Tetromino(new THREE.Vector3(
            -this.playField.dim.x/2,
            -this.playField.dim.y/2,
            this.playField.dim.z/2,
        ));
        this.tetrominoDescent = {
            vel: -1.0,
            deltaH: 0.0
        }
    }

    ngOnInit() {
        this.initThree();

        document.addEventListener('keypress', (ev) => {
            switch (ev.code) {
                case "KeyL":
                    break;
                case 'KeyP':
                    this.pause();
                    break;
                case 'KeyR':
                    this.reset();
            }
        });
        

        document.addEventListener("mousemove", (ev) => {
            if (!this.paused) {                
                this.playField.rotateOnAxis(new THREE.Vector3(0, 1, 0), ev.movementX / 5 / 180 * Math.PI);
                this.playField.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), ev.movementY / 5 / 180 * Math.PI);
            }
        })
    }

    ngOnDestroy(): void {

    }

    initThree() {
        // Cena
        this.scene = new THREE.Scene();

        // Câmera
        const width = this.rendererContainer.nativeElement.clientWidth;
        const height = this.rendererContainer.nativeElement.clientHeight;
        this.camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        );
        this.camera.position.z = 15;

        // Renderizador
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(width, height);
        this.rendererContainer.nativeElement.appendChild(
            this.renderer.domElement
        );

        this.scene.add(this.playField);
        
        // Tetromino
        this.playField.add(this.tetromino);

        // Luz direcional
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0.5, 0.7, 1);
        this.scene.add(light);

        // Luz ambiente
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        this.scene.add(ambientLight);

        this.reset();
    }

    pause = () => {
        this.paused = !this.paused;
        if (this.paused) {
            cancelAnimationFrame(this.animationFrameHandle);
            document.exitPointerLock();
        } else {
            this.rendererContainer.nativeElement.requestPointerLock();

            let lockPointerPromiseResolve: any = null;
            const func = (ev: Event) => {
                console.log("Mouse Travado");
                document.removeEventListener("pointerlockchange", func);
                lockPointerPromiseResolve();
            };
            const lockPointerPromise = new Promise<void>(resolve => {
                lockPointerPromiseResolve = resolve;
                document.addEventListener("pointerlockchange", func);
            });
            lockPointerPromise
            .then(() => {
                this.tp0 = performance.now();
                this.animate();
            });
        }
    };

    reset = (callPause?: boolean) => {
        this.playField.reset();
        this.tetromino.setShape(this.getNextTetromino());

        this.tetrominoDescent = {
            deltaH: 0,
            vel: -1.0
        }
        this.tetromino.logicCore.position = new THREE.Vector3(
            Math.floor(this.playField.dim.x/2),
            Math.floor(this.playField.dim.y + 2),
            Math.floor(this.playField.dim.z/2)
        )
        this.tetromino.updateVisualPosition();

        this.score = 0;
        this.rowsCleared = 0;

        if (callPause) this.pause();
    };

    getNextTetromino() {
        return Math.floor(Math.random() * (tetrominos.length - 0.001));
    }

    getPlayFieldDirection(): THREE.Vector3 {
        const dir = new THREE.Vector3();
        this.playField.getWorldDirection(dir);
        return dir;
    }

    vecToArr(vec: THREE.Vector3): { label: string, value: number }[] {
        return [
            {
                label: "x",
                value: vec.x
            },
            {
                label: "y",
                value: vec.y
            },
            {
                label: "z",
                value: vec.z
            }
        ];
    }

    update() {
        const tp1 = performance.now();
        const deltaTime = (tp1 - this.tp0) / 1000;
        this.tp0 = tp1;
        
        const logicCore = this.tetromino.logicCore.clone();
        
        const backwardDir = new THREE.Vector3();
        // compute closest backward direction
        {
            this.playField.getWorldDirection(backwardDir);
            backwardDir.y = 0;
            backwardDir.normalize();

            const cardinalDirections = [
                new THREE.Vector3(0, 0, -1),
                new THREE.Vector3(1, 0, 0),
                new THREE.Vector3(0, 0, 1),
                new THREE.Vector3(-1, 0, 0)
            ];
            let minDotIdx = 0;
            let dot = backwardDir.dot(cardinalDirections[minDotIdx]);
            for (let i = 1; i < cardinalDirections.length; i++) {
                const thisDot = backwardDir.dot(cardinalDirections[i]);
                if (thisDot > dot) {
                    dot = thisDot;
                    minDotIdx = i;
                }
            }
            backwardDir.copy(cardinalDirections[minDotIdx]);
            backwardDir.x *= -1;
            backwardDir.z *= -1;
        }

        //input
        this.kbd.syncStates();
        for (let [action, state] of this.kbd.states) {
            switch (action) {
            case "MoveForward":
                if (state.pressed || state.tick(this.keyStateTickPeriod)) {
                    const forwardDir = backwardDir.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);
                    forwardDir.x = Math.round(forwardDir.x);
                    forwardDir.y = Math.round(forwardDir.y);
                    forwardDir.z = Math.round(forwardDir.z);
                    
                    const newLogicCore = logicCore.clone();
                    newLogicCore.position.add(forwardDir);

                    if (!this.playField.tetrominoCollision(newLogicCore)) {
                        logicCore.position.copy(newLogicCore.position);
                    }
                }
                break;
            case "MoveBackwards":
                if (state.pressed || state.tick(this.keyStateTickPeriod)) {
                    const newLogicCore = logicCore.clone();
                    newLogicCore.position.add(backwardDir);

                    if (!this.playField.tetrominoCollision(newLogicCore)) {
                        logicCore.position.copy(newLogicCore.position);
                    }
                }
                break;
            case "MoveLeft":
                if (state.pressed || state.tick(this.keyStateTickPeriod)) {
                    const leftDir = backwardDir.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI/2);
                    leftDir.x = Math.round(leftDir.x);
                    leftDir.y = Math.round(leftDir.y);
                    leftDir.z = Math.round(leftDir.z);
                    
                    const newLogicCore = logicCore.clone();
                    newLogicCore.position.add(leftDir);

                    if (!this.playField.tetrominoCollision(newLogicCore)) {
                        logicCore.position.copy(newLogicCore.position);
                    }
                }
                break;
            case "MoveRight":
                if (state.pressed || state.tick(this.keyStateTickPeriod)) {
                    const rightDir = backwardDir.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI/2);
                    rightDir.x = Math.round(rightDir.x);
                    rightDir.y = Math.round(rightDir.y);
                    rightDir.z = Math.round(rightDir.z);

                    const newLogicCore = logicCore.clone();
                    newLogicCore.position.add(rightDir);

                    if (!this.playField.tetrominoCollision(newLogicCore)) {
                        logicCore.position.copy(newLogicCore.position);
                    }
                }
                break;
            case "ForceDown":
                if (state.pressed || state.tick(this.keyStateTickPeriod)) {
                    this.tetrominoDescent.deltaH--;
                }
                break;
            case "RotateYCCW":
                if (state.pressed) {
                    const newLogicCore = logicCore.clone();
                    newLogicCore.rotateWorld(new THREE.Vector3(0, -1, 0));

                    if (!this.playField.tetrominoCollision(newLogicCore)) {
                        logicCore.copy(newLogicCore);
                    }
                }
                break;
            case "RotateYCW":
                if (state.pressed) {
                    const newLogicCore = logicCore.clone();
                    newLogicCore.rotateWorld(new THREE.Vector3(0, 1, 0));

                    if (!this.playField.tetrominoCollision(newLogicCore)) {
                        logicCore.copy(newLogicCore);
                    }
                }
                break;
            case "RotateZCCW":
                if (state.pressed) {
                    const forwardDir = backwardDir.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);
                    forwardDir.x = Math.round(forwardDir.x);
                    forwardDir.y = Math.round(forwardDir.y);
                    forwardDir.z = Math.round(forwardDir.z);
                    
                    const newLogicCore = logicCore.clone();
                    newLogicCore.rotateWorld(forwardDir);

                    if (!this.playField.tetrominoCollision(newLogicCore)) {
                        logicCore.copy(newLogicCore);
                    }
                }
                break;
            case "RotateZCW":
                if (state.pressed) {
                    const newLogicCore = logicCore.clone();
                    newLogicCore.rotateWorld(backwardDir);

                    if (!this.playField.tetrominoCollision(newLogicCore)) {
                        logicCore.copy(newLogicCore);
                    }
                }
                break;
            }
        }

        //update tetromino descent
        this.tetrominoDescent.deltaH += this.tetrominoDescent.vel * deltaTime;
        
        if (this.tetrominoDescent.deltaH < -1) {
            logicCore.position.y--;
            this.tetrominoDescent.deltaH++;
        }

        if (this.playField.tetrominoCollision(logicCore)) {
            const boundingBox = logicCore.getBoundingBox();
            if (boundingBox.top >= this.playField.dim.y) {
                // game over
                this.reset();
            }
            else {
                // place tetromino
                logicCore.position.y++;
                const fullRows = this.playField.placeTetromino(logicCore);
                this.score += fullRows * fullRows;
                this.tetrominoDescent.vel -= 0.1 * fullRows;
                this.rowsCleared += fullRows;
                
                this.tetromino.logicCore.position.x = this.playField.dim.x/2;
                this.tetromino.logicCore.position.y = this.playField.dim.y + 2;
                this.tetromino.logicCore.position.z = this.playField.dim.z/2;
                this.tetromino.setShape(this.getNextTetromino());
                this.tetromino.updateVisualPosition();
            }
        }
        else {
            //persist new tetromino state
            this.tetromino.copyLogicCore(logicCore);
        }
    }

    animate = () => {
        this.animationFrameHandle = requestAnimationFrame(this.animate);

        this.update();
        
        this.renderer.render(this.scene, this.camera);
    };
}
