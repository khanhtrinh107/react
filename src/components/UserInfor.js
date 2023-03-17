import React from "react";

class UserInfor extends React.Component{
    state = {
        name : 'khanh',
        age : 22
    }
    handleClick(event){
        this.setState({
            age : Math.floor((Math.random() * 100) + 1)
        })
    }
    handleOnchange = (event) => {
        this.setState({
            name : event.target.value
        })
    }
    handleOnsubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render(){
        return (
            <div>My name is {this.state.name} and I'm {this.state.age}
            <form onSubmit={(event) => {this.handleOnsubmit(event)}} >
                <input value={this.state.name} type="text" onChange={(event) => {this.handleOnchange(event)}} ></input>
                <button type="submit" >Submit</button>
            </form>
            </div>
        )
    }
}

export default UserInfor