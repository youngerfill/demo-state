import {observable} from "mobx"

class StateClass {
    @observable highlight = false
}

const state = new StateClass()

export { state }
