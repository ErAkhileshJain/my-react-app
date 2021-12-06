import React, { Component } from "react";
import Header from "./Bootstrap/Header";

// const ArrowHeader = (props) => {
//   return (
//     <>
//       <p> hello, I am from Arrow Function, My Name is { props.name} </p>
//       <pre>{ JSON.stringify(props,null,2)}</pre>
//       </>
//       )
// }

class Hello extends Component {
  state = {
    Dark: false,
  };
  toggleHeader = () => {
    this.setState({
      Dark:!this.state.Dark
    })
  }
  render() {
    return (
      <div className="Hello ">
        {/* <h1>Hello AJ</h1> */}
        {/* <ArrowHeader Hello="World" name="Akhilesh Jain"></ArrowHeader> */}
        <Header dark={this.state.Dark} className="mb-5">Portfolio</Header>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <button className={`btn btn${this.state.Dark ? "-outline":""}-primary`} onClick={this.toggleHeader}>Toggle Datk Mode</button>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hello;
