import React from "react";

// Standard Javascript

// function Greet() {
//     return <h1>Hello World!</h1>
// }

// With ES6

const Greet = (props) => {
  //const {name, heroName} = props
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} -- {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};
export default Greet;
