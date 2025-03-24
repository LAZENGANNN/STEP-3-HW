import React from 'react'

function CardComponent(props) {

let {title, description, imageUrl} = props

    return (
        <div style={{border: "1px solid black", width: "300px"}}>
            <img src={imageUrl} alt="" />
            <p>{title}</p>
            <p> {description}</p>
        </div>
    )
}

export default CardComponent
