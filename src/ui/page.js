import * as h from 'react-hyperscript-helpers'

import {Display} from './display.js'
import {ControlPanel} from './controlpanel.js'

const Page = ({ setHighLight, highlight }) =>
{
    return h.div(
        "#page",
        [
            ControlPanel({setHighLight}),
            Display({highlight})
        ]
    )
}

export { Page }
