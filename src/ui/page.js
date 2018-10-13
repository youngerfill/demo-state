import * as h from 'react-hyperscript-helpers'

import {Display} from './display.js'
import {ControlPanel} from './controlpanel.js'

const Page = () =>
{
    return h.div(
        "#page",
        [
            ControlPanel(),
            Display()
        ]
    )
}

export { Page }
