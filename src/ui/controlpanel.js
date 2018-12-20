import * as h from 'react-hyperscript-helpers'

const ControlPanel = ({setHighLight}) =>
{
    return h.div(
        ".demoBlock",
        [
            h.label(
                [
                    h.input(
                        "#highlight",
                        {
                            onChange: (e) => { setHighLight(e.target.checked) },
                            type: "checkbox",
                            name: "highlight"
                        }
                    ),
                    "Highlight"
                ]
            )
        ]
    )
}

export  { ControlPanel }
