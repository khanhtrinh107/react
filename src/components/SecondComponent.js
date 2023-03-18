import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class SecondComponet extends React.Component{
    state = {
        listUser : [{ id : 1,name : 'khanh' , age : 22},{id : 2, name : 'dep' , age : 22},{id : 3, name : 'trai' , age : 22}]
    }
    handleAddUser = (user) => {
        this.setState({
            listUser : [...this.state.listUser,user]
        })
    }
   
    render(){
        console.log(this.state.listUser)
        return (
            <div>
                <UserInfor  handleAddUser = {this.handleAddUser}></UserInfor>
                <DisplayInfor listUser = {this.state.listUser} ></DisplayInfor>
            </div>
        );
    }
}

export default SecondComponet