import React from "react";

/*
?This is a UI Component
?UI component is a function based component & it doesn't contain any state
 */

const Shimul = ({ stupids }) => {
  const stupidList = stupids.map(stupid => {
    if (stupid.age > 20) {
      return (
        <div className="shimul" key={stupid.id}>
          <p>Name: {stupid.name}</p>
          <p>Age: {stupid.age}</p>
          <p>Belt: {stupid.belt}</p>
        </div>
      );
    } else {
      return null;
    }
  });

  /*
  
  ? this is the ternary oparator. It does the same work like above if-else fuction do.

    const stupidList = stupids.map(stupid => {
    return stupid.age > 20 ? (
      <div className="shimul" key={stupid.id}>
        <p>Name: {stupid.name}</p>
        <p>Age: {stupid.age}</p>
        <p>Belt: {stupid.belt}</p>
      </div>
    ) : null;
  });
  
  */

  return <div className="stupid-list">{stupidList}</div>;
};

export default Shimul;
