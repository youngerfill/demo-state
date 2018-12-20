import * as h from 'react-hyperscript-helpers'
import {observer} from "mobx-react"

const Display = observer( ({highlight}) =>
{
    let selector = ".demoBlock"
    selector += (highlight ? ".highlight" : "")
    return h.div(selector, "Display")
})

export { Display }
