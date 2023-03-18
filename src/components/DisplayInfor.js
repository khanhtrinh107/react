import React from 'react';
import './DisplayInfor.scss'
import logo from './../logo.svg'
class DisplayInfor extends React.Component{
    state = {
        isShowListUser : true
    }
    handleShowOrHide = () =>{
        this.setState({
            isShowListUser : !this.state.isShowListUser
        })
    }
    handleDelete = (userId) => {
        this.props.handleDelete(userId)
    }
    render(){
        const listUser = this.props.listUser
        return (
           <div className='parents' >
                <img src={logo} />
                <div className='button' >
                    <button onClick={() => {this.handleShowOrHide()}}>
                        {this.state.isShowListUser === true ? 'Hide List User' : 'Show List User'}
                    </button>
                </div>
                {this.state.isShowListUser && <div>
                    {listUser.map((user) => {
                        return (
                            <div className='child' key={user.id} >
                                <div>name {user.name} , age : {user.age}</div>
                                <button onClick={() => this.handleDelete(user.id)}>Delete</button>
                            </div>    
                        )
                    })}
                </div>}
           </div>
        )
    }
}

export default DisplayInfor