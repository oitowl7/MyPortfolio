import React from "react";
import { /* BrowserRouter as Router, Route, Switch, Redirect*/ } from "react-router-dom";
// import API from "./utils/API";
import Navbar from "../../components/Navbar";
import StandardTopImage from "../../components/StandardTopImage";
import StandardAboutMe from "../../components/StandardAboutMe";
import { Image } from 'semantic-ui-react';

class StandardHomePage extends React.Component {

  state = {
    activePage: "Standard",
    activeMenuItem: "Top",
    primaryColor: "blue",
    secondaryColor: "white",
    tableColor: "#2185D0"
  };

  handleMenuClick = value => {
    this.setState({activeMenuItem: value})
  }

  handleChangeTheme = value => {
    window.location = `/${value}`
  }

  render() {
    return(
      <div style={{}}>
        <Navbar
          activePage={this.state.activePage}
          handleMenuClick={this.handleMenuClick}
          activeMenuItem={this.state.activeMenuItem}
          primaryColor={this.state.primaryColor}
          handleChangeTheme={this.handleChangeTheme}
          secondaryColor={this.state.secondaryColor}
        />
        <StandardTopImage />
        <div></div>
        <StandardAboutMe
          tableColor={this.state.tableColor}
        />
      </div>
    )
  }
}

export default StandardHomePage;
