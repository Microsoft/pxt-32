
namespace pxsim {
    enum PlayerNumber {
        One = 1,
        Two,
        Three,
        Four
    }

    let init = false;
    let connected = false;

    let all: {[index: number]: Controller} = {};
    let player = PlayerNumber.One;

    interface Controller {
        player: PlayerNumber;
        state: {[index: number]: boolean};
    }

    export function initGamepad() {
        if (init) return;
        init = true;
        window.addEventListener("gamepadconnected", (e) => {
            if (connected) return;
            connected = true;
            setInterval(() => {
                onUpdate();
            }, 20);
        });
    }

    export function onUpdate() {
        const g = navigator.getGamepads();
        if (g) {
            for (let i = 0; i < g.length; i++) {
                const gamepad = g[i];
                if (gamepad && gamepad.buttons && gamepad.buttons.length) {
                    const ctrl = getState(gamepad);
                    updateState(ctrl, Key.A, 0, gamepad);
                    updateState(ctrl, Key.B, 1, gamepad);
                    updateState(ctrl, Key.Up, 12, gamepad, 1, false);
                    updateState(ctrl, Key.Down, 13, gamepad, 1, true);
                    updateState(ctrl, Key.Left, 14, gamepad, 0, false);
                    updateState(ctrl, Key.Right, 15, gamepad, 0, true);
                }
            }
        }
    }

    function getState(gamepad: Gamepad): Controller {
        if (all[gamepad.index]) return all[gamepad.index];

        const newState = { state: {}, player };
        all[gamepad.index] = newState;
        player++;

        return newState;
    }

    function updateState(ctrl: Controller, key: Key, buttonIndex: number, gamepad: Gamepad, axis?: number, axisPositive?: boolean) {
        let pressed = gamepad.buttons[buttonIndex].pressed;
        if (axis != undefined && gamepad.axes && gamepad.axes[axis]) {
            const value = gamepad.axes[axis];
            if (Math.abs(value) > 0.5) {
                pressed = pressed || (axisPositive === value > 0);
            }
        }
        const old = ctrl.state[key];
        if (old != pressed) {
            ctrl.state[key] = pressed;
            board().handleKeyEvent(key + (7 * (ctrl.player - 1)), pressed);
        }
    }
}