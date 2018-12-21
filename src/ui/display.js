import * as h from 'react-hyperscript-helpers'
import {observer} from "mobx-react"

const Display = observer( ({state}) =>
{
    let selector = ".demoBlock"
    selector += (state.highlight ? ".highlight" : "")
    return h.div(selector, "Display")
})

export { Display }
