import React from "react";
import { /* BrowserRouter as Router, Route, Switch,Redirect*/  } from "react-router-dom";
// import API from "./utils/API";
import Navbar from "../../components/Navbar"

class StarWarsPage extends React.Component {

  state = {
    activePage: "StarWars",
    activeMenuItem: "Top",
    primaryColor: "yellow",
    secondaryColor: "grey",
  };

  handleMenuClick = value => {
    this.setState({activeMenuItem: value})
  }

  handleChangeTheme = value => {
    window.location = `/${value}`
  }

  render() {
    return(
      <div>
        <span>This is the Starwars home page yo</span>
        <Navbar
          activePage={this.state.activePage}
          handleMenuClick={this.handleMenuClick}
          activeMenuItem={this.state.activeMenuItem}
          primaryColor={this.state.primaryColor}
          handleChangeTheme={this.handleChangeTheme}
          secondaryColor={this.state.secondaryColor}
        />
      </div>
    )
  }
}

export default StarWarsPage;
