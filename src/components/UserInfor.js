import React, { useState } from "react";

const UserInfor = (props) => {
    const [user , setUser] = useState({
        name : 'khanh',
        age : 22
    })
    
    const handleOnchange = (event) => {
        setUser({
            name : event.target.value
        })
    }
    const handleOnchange2 = (event) => {
        setUser({
            age : event.target.value
        })
    }
    const handleOnsubmit = (event) => {
        event.preventDefault()
        props.handleAddUser({
            id : Math.floor((Math.random() * 100) + 1),
            name : this.state.name,
            age : this.state.age
        })
    }
    return (
        <div>My name is {user.name} and I'm {user.age}
        <form onSubmit={(event) => {handleOnsubmit(event)}} >
            <input value={user.name} type="text" onChange={(event) => {handleOnchange(event)}} ></input>
            <input value={user.age} type = "text" onChange={(event) => {handleOnchange2(event)}} ></input>
            <button type="submit" >Submit</button>
        </form>
        </div>
    )
}

export default UserInfor