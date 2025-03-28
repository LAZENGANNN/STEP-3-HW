import React from 'react'

function CheckBoxComponent() {
    const [isChecked, setChecked] = useState(initialState)

    return (
        <div>
            <input type="checkbox" />
            <p></p>
        </div>
    )
}

export default CheckBoxComponent
