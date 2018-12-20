import * as h from 'react-hyperscript-helpers'
import ReactDOM from 'react-dom'
import {Page} from './ui/page.js'
import './ui/index.css'

import {state} from './state.js'

ReactDOM.render(
        h.h(Page,
            {
                setHighLight: (highlight) => { console.log("hl == " + highlight); state.highlight = highlight },
                highlight: state.highlight
            }
        )
    ,
    document.getElementById('root')
)
