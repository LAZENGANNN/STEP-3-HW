import React from 'react'

function OZONcard(props) {
        let obj = props.data
    return (
        // <div>
        //     {obj.price}
        // </div>

        <div>
            <div className="price"><p>BYN</p></div>
            <div className="ost"></div>
            <div className="name"></div>
            <div className="description"></div>
            <div className="rating"></div>
            <button className="date"></button>
        </div>

    )
}

export default OZONcard
