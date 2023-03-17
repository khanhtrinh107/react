import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./UserInfor";

class SecondComponet extends React.Component{
   
    render(){
        const infor = {
            userList : [{ id : 1,name : 'khanh' , age : 22},{id : 2, name : 'dep' , age : 22},{id : 3, name : 'trai' , age : 22}]
        }
        return (
            <div>
                <UserInfor ></UserInfor>
                <DisplayInfor myInfor = {infor} ></DisplayInfor>
            </div>
            
        );
    }
}

export default SecondComponet