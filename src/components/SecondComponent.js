import React from "react";

class SecondComponet extends React.Component{
    state = {
        name : 'khanh',
        age : 22
    }
    render(){
        return (
            <div>My name is {this.state.name} and I'm {this.state.age}</div>
        );
    }
}

export default SecondComponet