import * as h from 'react-hyperscript-helpers'
import {observer} from "mobx-react"

import {Display} from './display.js'
import {ControlPanel} from './controlpanel.js'

const Page = observer(({ setHighLight, highlight }) =>
{
    return h.div(
        "#page",
        [
            h.h(ControlPanel, {setHighLight}),
            h.h(Display,{highlight})
        ]
    )
})

export { Page }
