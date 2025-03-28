import React, { useState } from 'react'

function Toggle() {
    const [bool, setBool] = useState("true")

    const toggleFunc = () => {
        if (bool) {
            return false
        }
        else return true
    }

    return (
        <div>
            <button onClick={() => setBool((bool) => bool = toggleFunc())}>
                <p style={{
                    display: bool ? 'block' : 'none',
                }}>teeeextxt</p>
            </button>

        </div >
    )
}

export default Toggle
