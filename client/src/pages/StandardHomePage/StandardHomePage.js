import React from "react";
// import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
import API from "../../utils/API.js";
import Navbar from "../../components/Navbar";
import StandardTopImage from "../../components/StandardTopImage";
import StandardAboutMe from "../../components/StandardAboutMe";
// import StandardPortfolio from "../../components/StandardPortfolio"
import StandardModal from "../../components/StandardModal"
import StandardTechnologies from "../../components/StandardTechnologies"
import SidemenuComponent from "../../components/StandardSidemenu"
import StandardContact from "../../components/StandardContact"
import StandardFooter from "../../components/StandardFooter"
import { Divider, Container, Responsive, Dimmer, Header } from 'semantic-ui-react';
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
    visible: false,
    radioValue: null,
    dimmerOpen: false
  };

  handleMenuClick = value => {
    this.setState({activeMenuItem: value})
  }

  handleChangeTheme = value => {
    window.location = `/${value}`
  }

  handleDimmerOpen = () => {
    this.setState({dimmerOpen: true})
  }

  handleDimmerClose = () => {
    this.setState({dimmerOpen: false})
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
  //begin form functions
  
  handleFormChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
      });
  };
  
  handleRadioChange = value => {
    this.setState({ radioValue: value })
  };


  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({firstNameError: null, firstNameMessage: null, lastNameError: null, lastNameMessage: null, emailError: null, emailMessage: null, messageError: null, messageMessage: null, radioError: null, radioMessage: null, subjectError: null, subjectMessage: null})
    const objToSave = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      reason: this.state.radioValue,
      budget: this.state.budget,
      timetable: this.state.timetable,
      subject: this.state.subject,
      message: this.state.message
    }
    console.log(objToSave)
    // checks the inputs for user errors and such. returns false if there are none
    const problem = this.checkFunction(objToSave);
    if (problem) {
      return;
    } else {
      this.setState({ emailBeingSent: true })
      console.log("we got here");
      API.sendEmail(objToSave).then(data =>{
        console.log(data);
        this.setState({emailBeingSent: false, dimmerOpen: true});
      }).catch(err => console.log(err));
    }
  };

  checkFunction = objToSave => {
    let problem = false;
    if (!this.state.firstName) {
      this.setState({ firstNameError: "error", firstNameMessage: "This is a required field"})
      problem = true;
    }
    if (!this.state.lastName) {
      this.setState({ lastNameError: "error", lastNameMessage: "This is a required field"})
      problem = true;
    }
    if (!this.state.email) {
      this.setState({ emailError: "error", emailMessage: "This is a required field"})
      problem = true;
    } else {
      const firstEmailSplit = this.state.email.split("@");
      if (firstEmailSplit.length === 2) {
        const secondEmailSplit = firstEmailSplit[1].split(".");
        if (secondEmailSplit.length !== 2) {
          problem = true;
          this.setState({emailError: "error", emailMessage: "Please enter a valid email address (xxx@yyy.zzz)"})
        }
      } else {
        problem = true;
        this.setState({emailError: "error", emailMessage: "Please enter a valid email address (xxx@yyy.zzz)"})
      }
    }
    if(!this.state.radioValue) {
      this.setState({ radioError: "error", radioMessage: "This is a required field"})
      problem = true;
    }
    if (!this.state.message) {
      this.setState({messageError: "error", messageMessage: "This is a required field"})
      problem = true;
    }
    if (!this.state.subject) {
      this.setState({subjectError: "error", subjectMessage: "This is a required field"})
      problem = true;
    }
    return(problem);
  }

  //end form functions


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
          <Container>
            <Divider style={{color: this.state.secondaryColor, backgroundColor: this.state.secondaryColor}}/>
            <Divider style={{color: this.state.secondaryColor, backgroundColor: this.state.secondaryColor}}/>
          </Container>
          <Element name="contact">
            <StandardContact
              primaryColor={this.state.primaryColor}
              tertiaryColor={this.state.tertiaryColor}
              secondaryColor={this.state.secondaryColor}
              columns={1}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              email={this.state.email}
              firstNameError={this.state.firstNameError}
              firstNameMessage={this.state.firstNameMessage}
              lastNameError={this.state.lastNameError}
              lastNameMessage={this.state.lastNameMessage}
              emailError={this.state.emailError}
              emailMessage={this.state.emailMessage}
              radioValue={this.state.radioValue}
              radioError={this.state.radioError}
              radioMessage={this.state.radioMessage}
              budget={this.state.budget}
              timetable={this.state.timetable}
              subject={this.state.subject}
              subjectError={this.state.subjectError}
              subjectMessage={this.state.subjectMessage}
              message={this.state.message}
              messageError={this.state.messageError}
              messageMessage={this.state.messageMessage}
              handleFormChange={this.handleFormChange}
              handleFormSubmit={this.handleFormSubmit}
              handleRadioChange={this.handleRadioChange}
            />
          </Element>
          <Dimmer
            active={this.state.dimmerOpen}
            onClickOutside={this.handleDimmerClose}
            page
          >
            <div>
              <iframe src="https://giphy.com/embed/5Z4j3cbEXGrTy"></iframe>
            </div><br></br><br></br>
            <Container textAlign="center">
              <Header as="h3" style={{color: this.state.secondaryColor}}>Your email has been sent. I promise to probably read it!</Header>
            </Container>
          </Dimmer>
          <StandardFooter 
            height={80}
            primaryColor={this.state.primaryColor}
            secondaryColor={this.state.secondaryColor}
          />
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
            margin="50px"
          />
          </Responsive>
          <Responsive maxWidth={486}>
          <StandardTopImage 
            secondaryColor={this.state.secondaryColor}
            margin="0"
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
            <Container>
              <Divider style={{color: this.state.secondaryColor, backgroundColor: this.state.secondaryColor}}/>
              <Divider style={{color: this.state.secondaryColor, backgroundColor: this.state.secondaryColor}}/>
            </Container>
            <Element name="contact">
              <StandardContact
                primaryColor={this.state.primaryColor}
                tertiaryColor={this.state.tertiaryColor}
                secondaryColor={this.state.secondaryColor}
                columns={1}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                email={this.state.email}
                firstNameError={this.state.firstNameError}
                firstNameMessage={this.state.firstNameMessage}
                lastNameError={this.state.lastNameError}
                lastNameMessage={this.state.lastNameMessage}
                emailError={this.state.emailError}
                emailMessage={this.state.emailMessage}
                radioValue={this.state.radioValue}
                radioError={this.state.radioError}
                radioMessage={this.state.radioMessage}
                budget={this.state.budget}
                timetable={this.state.timetable}
                subject={this.state.subject}
                subjectError={this.state.subjectError}
                subjectMessage={this.state.subjectMessage}
                message={this.state.message}
                messageError={this.state.messageError}
                messageMessage={this.state.messageMessage}
                handleFormChange={this.handleFormChange}
                handleFormSubmit={this.handleFormSubmit}
                handleRadioChange={this.handleRadioChange}
              />
            </Element>
            <Dimmer
              active={this.state.dimmerOpen}
              onClickOutside={this.handleDimmerClose}
              page
            >
              <div>
                <iframe src="https://giphy.com/embed/5Z4j3cbEXGrTy"></iframe>
              </div><br></br><br></br>
              <Container textAlign="center">
                <Header as="h3" style={{color: this.state.secondaryColor}}>Your email has been sent. I promise to probably read it!</Header>
              </Container>
            </Dimmer>
            <StandardFooter 
              height={80}
              primaryColor={this.state.primaryColor}
              secondaryColor={this.state.secondaryColor}
            />
          </div>
        </Responsive>
      </div>
    )
  }
}

export default StandardHomePage;
