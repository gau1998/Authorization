import React, { Component } from "react";
import "../MainPage/Style.scss";
import Navbar from "../Navbar";
import Header from "../Header";
import LeftSide from "../LeftSide";
import RightSide from "../RightSide";
import { Link, Redirect } from "react-router-dom";


class Main extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("Token");
    let loggedin = true;
    if (token == null) {
      loggedin = false;
    }
    this.state = {
      loggedin: "",
    };
  }
  render() {
    if (this.state.loggedin === false) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Navbar />
        <hr />
        <div className="row left ">
          <div className="col-3 leftside">
            <LeftSide />
          </div>
          <div className='col'>
             <Header/> 
            
           <RightSide/>
          </div>
        </div>
        <Link to="/logout" />
      </div>
    );
  }
}

export default Main;
