import React from 'react';

class DisplayInfor extends React.Component{
    
    render(){
        const {userList} = this.props.myInfor
        return (
           <div>
                {userList.map((user) => {
                    return (
                        <div key={user.id} >
                            <div>name {user.name} , age : {user.age}</div>
                        </div>
                    )
                })}
           </div>
        )
    }
}

export default DisplayInfor