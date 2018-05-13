import React from "react";
import { /* BrowserRouter as Router, Route, Switch, Redirect*/ } from "react-router-dom";
// import API from "./utils/API";
import Navbar from "../../components/Navbar";
import StandardTopImage from "../../components/StandardTopImage";
import StandardAboutMe from "../../components/StandardAboutMe";
import StandardPortfolio from "../../components/StandardPortfolio"
import StandardModal from "../../components/StandardModal"
import { Image, Divider, Container } from 'semantic-ui-react';



class StandardHomePage extends React.Component {

  state = {
    activePage: "Standard",
    activeMenuItem: "Top",
    tableColor: "blue",
    secondaryColor: "#FFDF80",
    tertiaryColor: "white",
    quadrinaryColor: "black",
    primaryColor: "#02647B",
    modalOpen: false
  };

  handleMenuClick = value => {
    this.setState({activeMenuItem: value})
  }

  handleChangeTheme = value => {
    window.location = `/${value}`
  }

  componentDidMount(){
    console.log("margin in here: " +  window.marginCalc)
  }

  displayModal = event => {
    const {name} = event.target;
    console.log(name);
    this.setState({modalOpen: true})
    // return(
    //   <StandardModal
    //     primaryColor={this.state.primaryColor}
    //     tertiaryColor={this.state.tertiaryColor}
    //     secondaryColor={this.state.secondaryColor}
    //     modalToOpen= {name}
    //     isOpen={true}
    //   />
    // );
  }

  render() {
    return(
      <div style={{}}>
        <Navbar
          activePage={this.state.activePage}
          handleMenuClick={this.handleMenuClick}
          activeMenuItem={this.state.activeMenuItem}
          tableColor={this.state.tableColor}
          handleChangeTheme={this.handleChangeTheme}
          secondaryColor={this.state.secondaryColor}
        />
        <StandardTopImage 
          secondaryColor={this.state.secondaryColor}
        />
        <div></div>
        <StandardAboutMe
          primaryColor={this.state.primaryColor}
          tertiaryColor={this.state.tertiaryColor}
          secondaryColor={this.state.secondaryColor}
        />
        <Container>
          <Divider style={{color: this.state.secondaryColor}}/>
          <Divider style={{color: this.state.secondaryColor}}/>
        </Container>
        <StandardPortfolio
          primaryColor={this.state.primaryColor}
          tertiaryColor={this.state.tertiaryColor}
          secondaryColor={this.state.secondaryColor}
          displayModal={this.displayModal}
        />
        <StandardModal
          primaryColor={this.state.primaryColor}
          tertiaryColor={this.state.tertiaryColor}
          secondaryColor={this.state.secondaryColor}
          // modalToOpen= {this.state.name}
          open={this.state.modalOpen}
        />
        {this.showModal}
      </div>
    )
  }
}

export default StandardHomePage;
