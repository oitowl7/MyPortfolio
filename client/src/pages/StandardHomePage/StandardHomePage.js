import React from "react";
import { /* BrowserRouter as Router, Route, Switch, Redirect*/ } from "react-router-dom";
// import API from "./utils/API";
import Navbar from "../../components/Navbar"

class StandardHomePage extends React.Component {

  state = {
    activePage: "Standard",
    activeMenuItem: "Top",
    menuColor: "blue",
  };

  handleMenuClick = value => {
    this.setState({activeMenuItem: value})
  }

  hanldeChangeTheme = value => {
    
  }

  render() {
    return(
      <div>
        <span>This is the comics home page yo</span>
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

export default StandardHomePage;
