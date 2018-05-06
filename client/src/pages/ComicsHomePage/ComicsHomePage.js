import React from "react";
import { /* BrowserRouter as Router, Route, Switch,Redirect*/  } from "react-router-dom";
// import API from "./utils/API";
import Navbar from "../../components/Navbar"

class ComicsHomePage extends React.Component {

  state = {
    activePage: "Comics",
    activeMenuItem: "Top",
    menuColor: "red",
  };

  handleMenuClick = value => {
    this.setState({activeMenuItem: value})
  }

  hanldeChangeTheme = value => {
    
  }

  render() {
    return(
      <div>
        <span>This is the standard home page yo</span>
        <Navbar
          activePage={this.state.activePage}
          handleMenuClick={this.handleMenuClick}
          activeMenuItem={this.state.activeMenuItem}
          menuColor={this.state.menuColor}
        />
      </div>
    )
  }
}

export default ComicsHomePage;
