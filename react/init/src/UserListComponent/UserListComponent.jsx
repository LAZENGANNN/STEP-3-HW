import React from 'react'

import UserCardComponent from './UserCardComponent'

function UserListComponent(props) {
    console.log(props.arr)

    return (
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", width:"910px"}}>
            <UserCardComponent user={props.arr[0]} />
            <UserCardComponent user={props.arr[1]} />
            <UserCardComponent user={props.arr[2]} />
        </div>
    )
}

export default UserListComponent
