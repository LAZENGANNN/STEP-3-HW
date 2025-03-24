import React from 'react'

function ThemeSwitcherComponent(props) {
    let isDarkMode = props.bool

    return (
        <div style={{
            border: "1px solid black",
            backgroundColor: !isDarkMode ? "#D3D3D3" : "#696969",
            color: !isDarkMode ? "black" : "white"
        }}>
            teeeextxtxt
        </div>
    )
}

export default ThemeSwitcherComponent
