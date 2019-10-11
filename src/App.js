import React, { Component } from "react";
import Shimul from "./Shimul";
import AddStupid from './AddStupid';

/*
*This is a Container Component
?Container component is class based
 */

class App extends Component {
  state = {
    stupids: [
      { name: "Shimul", age: 26, belt: "black", id: 1 },
      { name: "Martuza", age: 76, belt: "leather", id: 2 },
      { name: "Sumon", age: 17, belt: "maroon", id: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Hello React!</h1>
        <Shimul stupids={this.state.stupids} />
        <AddStupid />
      </div>
    );
  }
}

export default App;
