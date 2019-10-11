import React, { Component } from "react";
import Shimul from "./Shimul";
import AddStupid from "./AddStupid";

/*
?This is a Container Component
?Container component is a class based Component & it's contain state
 */

class App extends Component {
  state = {
    stupids: [
      { name: "Shimul", age: 26, belt: "black", id: 1 },
      { name: "Martuza", age: 76, belt: "leather", id: 2 },
      { name: "Sumon", age: 17, belt: "maroon", id: 3 }
    ]
  };

  addStupid = stupid => {
    stupid.id = Math.random();
    let stupids = [...this.state.stupids, stupid];
    this.setState({
      stupids: stupids
    });
  };

  deleteStupid = id => {
    let stupids = this.state.stupids.filter(stupid => {
      return stupid.id !== id;
    });
    this.setState({
      stupids: stupids
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello React!</h1>
        <Shimul deleteStupid={this.deleteStupid} stupids={this.state.stupids} />
        <AddStupid addStupid={this.addStupid} />
      </div>
    );
  }
}

export default App;
