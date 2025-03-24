import React from 'react'

function UserCardComponent(props) {

    const user = props.user
    console.log(props.user)


    return (
        <div style={{border: "1px solid black", width: "300px"}}>
            <img style={{width: "100px"}} src={user.avatarUrl} alt="" />
            <p>{user.name}</p>
            <p> {user.email}</p>
        </div>
    )
}

export default UserCardComponent
