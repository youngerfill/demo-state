//import * as h from 'react-hyperscript-helpers'
import ReactDOM from 'react-dom'
import {Page} from './ui/page.js'
import './ui/index.css'

import {State} from './state.js'

ReactDOM.render(
        Page(
            {
                setHighLight: (highlight) => { console.log("hl == " + highlight); State.highlight = highlight },
                highlight: State.highlight
            }
        )
    ,
    document.getElementById('root')
)
