import React, { useState } from 'react'

function InputField() {
    const [text, setText] = useState("внмание на title страницы")

    return (
        <div>
            <input type="number" onChange={(event) => setText((text) => {
                text = event.target.value;
                document.title = text

            })} />
            <div>{text}</div>
        </div>
    )
}

export default InputField
