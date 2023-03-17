import React  from "react";

class ThirdComponent extends React.Component{
    state = {
        hobbit : "watching football",
        passion : "chill at home"
    }
    handleClick(event){
        this.setState({
            passion : "playing video game"
        })
        console.log(event.target)
    }
    render(){
        return (
            <div>My hobbit is {this.state.hobbit} and my passion is {this.state.passion}
                <button onClick={(event) => {this.handleClick(event)}} >Click Me!</button>
            </div>
        );
    }
}
export default ThirdComponent