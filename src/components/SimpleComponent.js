// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    constructor(props) {
        super(props);
     
        // Initial state here...
        this.state = {
            mood: "happy"
        };
      }

      handleClick = () => {
          this.state.mood === "happy" ? this.setState({mood: "sad"}) : this.setState({mood: "happy"})
      }

    render() {
        return (
            <div onClick={this.handleClick}>
            {this.state.mood}
                
            </div>
        )
    }
}
