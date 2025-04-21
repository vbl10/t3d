import { Injectable, OnDestroy } from "@angular/core";

export const actions = [
    "MoveForward",
    "MoveBackwards",
    "MoveLeft",
    "MoveRight",
    "ForceDown",
    "RotateZCCW",
    "RotateZCW",
    "RotateYCCW",
    "RotateYCW"
] as const;
export type Action = typeof actions[number];

class KeyState {
    async = false;
    pressed = false;
    held = false;
    released = false;
    lastTick = 0;
    tick(period: number) {
        if (this.held && (
                performance.now() - this.lastTick > period * 1000
            )
        ) {
            this.lastTick += period * 1000;
            return true;
        }
        return false;
    }
}

@Injectable({
    providedIn: "root"
})
export class KeyboardService implements OnDestroy {
    localStoragePrefix = "keyBindings." as const;

    private bindings: {action: Action, keyCode: string}[];
    public states: Map<Action, KeyState>;

    constructor() {

        this.bindings = [
            {action: "MoveForward", keyCode: "KeyW"},
            {action: "MoveBackwards", keyCode: "KeyS"},
            {action: "MoveLeft", keyCode: "KeyA"},
            {action: "MoveRight", keyCode: "KeyD"},
            {action: "ForceDown", keyCode: "KeyX"},
            {action: "RotateZCCW", keyCode: "KeyQ"},
            {action: "RotateZCW", keyCode: "KeyE"},
            {action: "RotateYCCW", keyCode: "KeyZ"},
            {action: "RotateYCW", keyCode: "KeyC"},
        ]

        this.states = new Map();
        for (let action of actions) {
            const binding = this.bindings.find(binding => binding.action == action);
            if (binding) {
                binding.keyCode = 
                    localStorage.getItem("keyBindings." + action) as Action 
                    ?? binding?.keyCode
            }
            
            this.states.set(action, new KeyState());
        }

        document.addEventListener("keypress", this.onKeyPress);
        document.addEventListener("keyup", this.onKeyUp);
    }

    ngOnDestroy(): void {
        document.removeEventListener("keypress", this.onKeyPress);
        document.removeEventListener("keyup", this.onKeyUp);
    }

    private onKeyPress = (ev: KeyboardEvent) => {
        const binding = this.bindings.find(binding => binding.keyCode == ev.code);
        if (binding) {
            const state = this.states.get(binding.action);
            if (state) state.async = true;
        }
    }
    private onKeyUp = (ev: KeyboardEvent) => {
        const binding = this.bindings.find(binding => binding.keyCode == ev.code);
        if (binding) {
            const state = this.states.get(binding.action);
            if (state) state.async = false;
        }
    }

    listenAndSet(action: Action) {
        const func = (ev: KeyboardEvent) => {
            document.removeEventListener("keypress", func);
            const binding = this.bindings.find(binding => binding.action == action);
            if (binding) binding.keyCode = ev.code;
            localStorage.setItem(this.localStoragePrefix + action, ev.code);
        };
        document.addEventListener("keypress", func);
    }

    syncStates() {
        for (let state of this.states.values()) {
            if (state.async) {
                if (!state.held) {
                    state.pressed = true;
                    state.held = true;
                    state.released = false;
                    state.lastTick = performance.now();
                }
                else {
                    state.pressed = false;
                    state.held = true;
                    state.released = false;
                }
            }
            else if (state.held) {
                state.pressed = false;
                state.held = false;
                state.released = true;
            }
            else {
                state.pressed = false;
                state.held = false;
                state.released = false;
            }
        }
    }
}