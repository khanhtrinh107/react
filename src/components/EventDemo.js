import React, { Component } from 'react'

export default class EventDemo extends Component {
    handleClick1 = () => {
        alert("check1")
    }
    handleClick2 = () => {
        alert("chekc2")
    }
  render() {
    return (
      <div>
        <button onClick={this.handleClick1} >Button1</button>
        <button onClick={this.handleClick2()} >Button2</button>
      </div>
    )
  }
}
