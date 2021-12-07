import React, { Component } from "react";
import Header from "./Bootstrap/Header";
import Code from "./Code";
import Form from "./Form";

// const ArrowHeader = (props) => {
//   return (
//     <>
//       <p> hello, I am from Arrow Function, My Name is { props.name} </p>
//       <pre>{ JSON.stringify(props,null,2)}</pre>
//       </>
//       )
// }

class App extends Component {
  state = {
    Dark: true,
    FormData: {
      FirstName: "Akhilesh",
      LastName: "Jain",
      Thumbnail: "https://i.imgur.com/3uEyHgdl.png",
      URL: "https://www.linkedin.com/in/akhileshjainsjp/",
      Description:
        "I am Akhilesh Jain. I am a Developer. ",
      KeyWords: "Akhilesh, Jain, Developer, Awesome Person",
      Address: "Bangalore, Indore, India",
      Phone: "+918989502226",
      Email: "jainakhil615@gmail.com"
    }
  };
    
  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark,
    });
  };
  render() {
    
    return (
      <div className="App ">
        {/* <h1>Hello AJ</h1> */}
        {/* <ArrowHeader Hello="World" name="Akhilesh Jain"></ArrowHeader> */}
        <Header
          dark={this.state.Dark}
          className="Header">
          <span>Portfolio Generotor</span>
          <button
            className="btn btn-sm btn-outline-primary rounded-circle"
            onClick={this.toggleHeader}
          >
            <i
              className={"fa fa-" + (this.state.Dark ? "sun" : "moon") + "-o"}
            ></i>
          </button>
        </Header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6"><Form {...this.state.FormData} /></div>
            <div className="col-12 col-sm-6"><Code {...this.state.FormData} /></div>
          </div>
        </div>
      </div>  
    );
  }
}

export default App;
