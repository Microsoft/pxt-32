namespace keys {
    export class Key {
        id: number
        private _pressed: boolean
        private checked: boolean

        constructor(id: number) {
            this.id = id
            this._pressed = false
            this.checked = false
            control.onEvent("_keyup", id, () => {
                if (this._pressed) {
                    this._pressed = false
                    control.raiseEvent("keyup", id)
                }
            })
            control.onEvent("_keydown", id, () => {
                if (!this._pressed) {
                    this._pressed = true
                    this.checked = false
                    control.raiseEvent("keydown", id)
                    control.raiseEvent("keydown", 0)
                }
            })
        }

        onPressed(f: () => void) {
            control.onEvent("keydown", this.id, f)
        }

        onReleased(f: () => void) {
            control.onEvent("keyup", this.id, f)
        }

        isPressed() {
            return this._pressed
        }

        wasPressed() {
            if (!this.checked) {
                this.checked = true
                return this._pressed
            }
            return false
        }

        waitPressed() {
            control.waitForEvent("keydown", this.id)
        }
    }

    export const Left = new Key(1)
    export const Up = new Key(2)
    export const Right = new Key(3)
    export const Down = new Key(4)
    export const A = new Key(5)
    export const B = new Key(6)

    export function dx(step = 100) {
        if (keys.Left.isPressed())
            if (keys.Right.isPressed()) return 0
            else return -step * control.deltaTime
        else if (keys.Right.isPressed()) return step * control.deltaTime
        else return 0
    }

    export function dy(step = 100) {
        if (keys.Up.isPressed())
            if (keys.Down.isPressed()) return 0
            else return -step * control.deltaTime
        else if (keys.Down.isPressed()) return step * control.deltaTime
        else return 0
    }

    export function waitAnyKey() {
        control.waitForEvent("keydown", 0)
    }
}