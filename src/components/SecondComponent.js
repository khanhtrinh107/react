import React from "react";

class SecondComponet extends React.Component{
    state = {
        name : 'khanh',
        age : 22
    }
    handleClick(event){
        this.setState({
            age : Math.floor((Math.random() * 100) + 1)
        })
    }
    render(){
        return (
            <div>My name is {this.state.name} and I'm {this.state.age}
                <button onClick={(event) => {this.handleClick(event)}} >Click2</button>
            </div>
            
        );
    }
}

export default SecondComponet