import React, { useState } from 'react';
import './DisplayInfor.scss'
import logo from './../logo.svg'
const DisplayInfor = (props) => {
    let listUser = props.listUser
    const [isShowOrHide,setIsShowOrHide] = useState(true)
    const change = () => {
        setIsShowOrHide(!isShowOrHide)
    }
    return (
        <div className='parents' >
             <img src={logo} />
             <button onClick={() => change()} >
                {isShowOrHide ? 'Hide List User' : 'Show List User'}
             </button>
             {isShowOrHide && <div>
                 {listUser.map((user) => {
                     return (
                         <div className='child' key={user.id} >
                             <div>name {user.name} , age : {user.age}</div>
                             <button onClick={() => props.handleDelete(user.id)}>Delete</button>
                         </div>    
                     )
                 })}
             </div>}
        </div>
     )
}

export default DisplayInfor