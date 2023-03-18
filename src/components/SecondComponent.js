import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

const SecondComponent = (props) =>{
    const [listUser , setListUser] = useState([{ id : 1,name : 'khanh' , age : 22},{id : 2, name : 'dep' , age : 22},{id : 3, name : 'trai' , age : 22}])
    const handleAddUser = (user) => {
        setListUser([user,...listUser])
    }
    const handleDelete = (userId) => {
        let updateList = listUser
        updateList = updateList.filter(item => item.id !== userId)
        setListUser(updateList)
    }
   
    return (
        <div>
            <UserInfor  handleAddUser = {handleAddUser}  ></UserInfor>
            <DisplayInfor listUser = {listUser}  handleDelete = {handleDelete} ></DisplayInfor>
        </div>
    )
    
}

export default SecondComponent