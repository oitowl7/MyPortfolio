import React from "react";
// import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
// import API from "./utils/API";
import Navbar from "../../components/Navbar";
import StandardTopImage from "../../components/StandardTopImage";
import StandardAboutMe from "../../components/StandardAboutMe";
// import StandardPortfolio from "../../components/StandardPortfolio"
import StandardModal from "../../components/StandardModal"
import StandardTechnologies from "../../components/StandardTechnologies"
import SidemenuComponent from "../../components/StandardSidemenu"
import { Divider, Container, Responsive } from 'semantic-ui-react';
import { Element , Events, animateScroll as  scroll, scrollSpy } from 'react-scroll'
 




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
    //start scroll stuff
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
 
    scrollSpy.update();
    //end scroll stuff
  }
  
  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  //start default scroll functions

  componentWillUnmount = () => {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  scrollToTop = () => {
    scroll.scrollToTop();
  }
  scrollToBottom = () => {
    scroll.scrollToBottom();
  }
  scrollTo = () => {
    scroll.scrollTo(100);
  }
  scrollMore = () => {
    scroll.scrollMore(100);
  }
  handleSetActive = to => {
    console.log(to);
  }

  //end scroll functions


  render() {
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
            primaryColor={this.state.primaryColor}
          />
          <Element name="top" />
          <StandardTopImage 
            secondaryColor={this.state.secondaryColor}
            margin="70px"
            zindex={1}
          />
          <div></div>
          <Element name="bio">
            <StandardAboutMe
              primaryColor={this.state.primaryColor}
              tertiaryColor={this.state.tertiaryColor}
              secondaryColor={this.state.secondaryColor}
            />
          </Element>
          <Container>
            <Divider style={{color: this.state.secondaryColor, backgroundColor: this.state.secondaryColor}}/>
            <Divider style={{color: this.state.secondaryColor, backgroundColor: this.state.secondaryColor}}/>
          </Container>
          <Element name="technologies">
            <StandardTechnologies
              primaryColor={this.state.primaryColor}
              tertiaryColor={this.state.tertiaryColor}
              secondaryColor={this.state.secondaryColor}
              columnNumber={6}
            />
          </Element>
          <Container>
            <Divider style={{color: this.state.secondaryColor, backgroundColor: this.state.secondaryColor}}/>
            <Divider style={{color: this.state.secondaryColor, backgroundColor: this.state.secondaryColor}}/>
          </Container>
          <Element name="portfolio">
            <StandardModal
              primaryColor={this.state.primaryColor}
              tertiaryColor={this.state.tertiaryColor}
              secondaryColor={this.state.secondaryColor}
              // modalToOpen= {this.state.name}
              open={this.state.modalOpen}
            />
          </Element>
        </Responsive>



        <Responsive  maxWidth={768} >
          <SidemenuComponent
            secondaryColor={this.state.secondaryColor}
            primaryColor={this.state.primaryColor}
            visible={this.state.visible}
          />
          <Element name="top" />
          <Responsive maxWidth={768} minWidth={486}>
          <StandardTopImage 
            secondaryColor={this.state.secondaryColor}
            margin="-300px"
          />
          </Responsive>
          <Responsive maxWidth={486}>
          <StandardTopImage 
            secondaryColor={this.state.secondaryColor}
            margin="-350px"
          />
          </Responsive>

          <div style={{backgroundColor: this.state.primaryColor}}>
            <Element name="bio">
              <StandardAboutMe
                primaryColor={this.state.primaryColor}
                tertiaryColor={this.state.tertiaryColor}
                secondaryColor={this.state.secondaryColor}
              />
            </Element>
            <Container>
              <Divider style={{color: this.state.secondaryColor, backgroundColor: this.state.secondaryColor}}/>
              <Divider style={{color: this.state.secondaryColor, backgroundColor: this.state.secondaryColor}}/>
            </Container>
            <Element name="technologies">
              <StandardTechnologies
                primaryColor={this.state.primaryColor}
                tertiaryColor={this.state.tertiaryColor}
                secondaryColor={this.state.secondaryColor}
                columnNumber={3}
              />
            </Element>
            <Container>
              <Divider style={{color: this.state.secondaryColor, backgroundColor: this.state.secondaryColor}}/>
              <Divider style={{color: this.state.secondaryColor, backgroundColor: this.state.secondaryColor}}/>
            </Container>
            <Element name="portfolio">
              <StandardModal
                primaryColor={this.state.primaryColor}
                tertiaryColor={this.state.tertiaryColor}
                secondaryColor={this.state.secondaryColor}
                // modalToOpen= {this.state.name}
                open={this.state.modalOpen}
              />
            </Element>
          </div>
        </Responsive>

        {/* this will need to be removed  */}
        {/* <Responsive  maxWidth={768}>
          <Button inverted onClick={this.toggleVisibility} style={style.sidebarButton}><Icon name='bars'/>Menu</Button>
          <Sidebar.Pushable as={"div"}  style={style.sidebarPushable}>
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
                margin="-300px"
              />
              </Responsive>

              <Responsive maxWidth={486}>
              <StandardTopImage 
                secondaryColor={this.state.secondaryColor}
                margin="-350px"
              />
              </Responsive>


              <div></div>
              <StandardAboutMe
                primaryColor={this.state.primaryColor}
                tertiaryColor={this.state.tertiaryColor}
                secondaryColor={this.state.secondaryColor}
              />
              <Container>
                <Divider style={{color: this.state.secondaryColor, backgroundColor: this.state.secondaryColor}}/>
                <Divider style={{color: this.state.secondaryColor, backgroundColor: this.state.secondaryColor}}/>
              </Container>
              <StandardTechnologies
                primaryColor={this.state.primaryColor}
                tertiaryColor={this.state.tertiaryColor}
                secondaryColor={this.state.secondaryColor}
                columnNumber={3}
              />
              <Container>
                <Divider style={{color: this.state.secondaryColor, backgroundColor: this.state.secondaryColor}}/>
                <Divider style={{color: this.state.secondaryColor, backgroundColor: this.state.secondaryColor}}/>
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
        </Responsive> */}
      </div>
    )
  }
}

export default StandardHomePage;
