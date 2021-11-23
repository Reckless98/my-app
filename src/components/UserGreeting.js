import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {

    return(
        this.state.isLoggedIn ?
        <div>Welcome User</div> :
        <div>Welcome Guest</div>
    )
    // Second method  
    //   let message
    //   if (this.state.isLoggedIn) {
    //       message = <div>Welcome User</div>
    //   } else {
    //       message = <div>Welcome Guest</div>
    //   }
    //   return <div>{message}</div>
    
    // First method 
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome User</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // return (
    //   <div>
    //     <div>Welcome Guest</div>
    //     <div>Welcome User</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
