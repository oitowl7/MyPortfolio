import React from "react";
import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
// import API from "./utils/API";
import Navbar from "../../components/Navbar";
import StandardTopImage from "../../components/StandardTopImage";
import StandardAboutMe from "../../components/StandardAboutMe";
import StandardPortfolio from "../../components/StandardPortfolio"
import StandardModal from "../../components/StandardModal"
import { Image, Divider, Container, Responsive, Button, Sidebar, Segment, Menu, Icon, Header, Dropdown} from 'semantic-ui-react';



class StandardHomePage extends React.Component {

  state = {
    activePage: "Standard",
    activeMenuItem: "Top",
    tableColor: "blue",
    secondaryColor: "#FFDF80",
    tertiaryColor: "white",
    quadrinaryColor: "black",
    primaryColor: "#02647B",
    modalOpen: false,
    visible: false
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

  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  


  render() {
    const style = {
      sidebar: {
        zIndex: 2, backgroundColor: this.state.primaryColor, color: this.state.secondaryColor, position: "fixed", top: 30
      },
      sidebarButton: {
        position: "fixed", left: 5, zIndex: 1, backgroundColor: this.state.primaryColor, color: this.state.secondaryColor
      },
      sidebarPushable: {
        backgroundColor: this.state.primaryColor, marginTop: 0
      }
    }
    return(
      <div style={{}}>
        <Responsive  minWidth={768} style={{backgroundColor: this.state.primaryColor}}>
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
            margin="70px"
            zindex={1}
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
          <StandardModal
            primaryColor={this.state.primaryColor}
            tertiaryColor={this.state.tertiaryColor}
            secondaryColor={this.state.secondaryColor}
            // modalToOpen= {this.state.name}
            open={this.state.modalOpen}
          />
        </Responsive>


        <Responsive  maxWidth={768}>
          <Button inverted onClick={this.toggleVisibility} style={style.sidebarButton}><Icon name='bars'/>Menu</Button>
          <Sidebar.Pushable as={Segment}  style={style.sidebarPushable}>
            <Sidebar as={Menu} stackable animation='slide out' width='thin' visible={this.state.visible} icon='labeled' vertical inverted style={style.sidebar} inverted>
              <Menu.Item name='Top' style={{color: this.state.secondaryColor}}>
                <Icon name='arrow up' />Top
              </Menu.Item>
              <Menu.Item name='Bio' style={{color: this.state.secondaryColor}}>
                <Icon name='info' />Bio
              </Menu.Item>
              <Menu.Item name='Technologies' style={{color: this.state.secondaryColor}}>
                <Icon name='html5' />Technologies
              </Menu.Item>
              <Menu.Item name='Portfolio' style={{color: this.state.secondaryColor}}>
                <Icon name='folder open' />Portfolio
              </Menu.Item>
              <Menu.Item name='Portfolio' style={{color: this.state.secondaryColor}}>
                <Link to="/comics" style={{color: this.state.secondaryColor}}><Icon size="big" name='spy' /><br></br>Comic Book Style</Link>
              </Menu.Item>
              <Menu.Item name='Portfolio' style={{color: this.state.secondaryColor}}>
                <Link to="/starwars" style={{color: this.state.secondaryColor}}><Icon size="big" name='star' /><br></br>Star Wars Style</Link>
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher style={{backgroundColor: this.state.primaryColor}}>

              <Responsive maxWidth={768} minWidth={486}>
              <StandardTopImage 
                secondaryColor={this.state.secondaryColor}
                margin="-150px"
              />
              </Responsive>

              <Responsive maxWidth={486}>
              <StandardTopImage 
                secondaryColor={this.state.secondaryColor}
                margin="-250px"
              />
              </Responsive>


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
              <StandardModal
                primaryColor={this.state.primaryColor}
                tertiaryColor={this.state.tertiaryColor}
                secondaryColor={this.state.secondaryColor}
                // modalToOpen= {this.state.name}
                open={this.state.modalOpen}
              />
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Responsive>
      </div>
    )
  }
}

export default StandardHomePage;
