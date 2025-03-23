import React from 'react'
import "./OZONcard.css"

function OZONcard(props) {
        let obj = props.data
        const price = Math.floor(199 + Math.random() * (2345 - 199 + 1))
    return (
        <div class="container">
        <div class="priceDiv">
          <h2 class="price">{Math.floor(price - (price * (obj.discount/100)))} BYN</h2>
          <h2 class="oldPrice">{price}</h2>
          <h2 class="discount">{obj.discount}%</h2>
        </div>
        <h3 class="remain">осталось {obj.stock} штук</h3>
        <h2 class="name">
          {obj.name}
        </h2>
        <h2 class="description">
          {obj.description}
        </h2>
        <div class="ratingDiv">
          <h2 class="stars">☆{obj.rating}</h2>
          <h2 class="comments">🗨️{obj.reviews}</h2>
        </div>
        <button class="buyButton">🛒 {obj.deliveryDate}</button>
      </div>
      

    )
}

export default OZONcard
