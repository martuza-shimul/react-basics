import React, { Component } from "react";

class Shimul extends Component {
  render() {
      const { stupids } = this.props;
      const stupidList = stupids.map(stupid => {
          return (
            <div className="shimul" key={stupid.id}>
                <p>Name: { stupid.name }</p>
                <p>Age: { stupid.age }</p>
                <p>Belt: { stupid.belt }</p>
            </div>
          )
      })
    return (
      <div className="stupit-list">
          { stupidList }
      </div>
    );
  }
}

export default Shimul;
