import React from 'react';
// import { /* BrowserRouter as Router, Route, Switch, Redirect*/ Link } from "react-router-dom";
import StandardContactForm from "../StandardContactForm"
import { Header, Image, Container } from 'semantic-ui-react';
import { Link } from 'react-scroll'

const StandardContact = props => {
  return (
    <div id="contactDiv">
      <Container>
        <Header as="h2" style={{color: props.secondaryColor}}>Contact</Header>
          <StandardContactForm
            columns={props.columns}
            secondaryColor={props.secondaryColor}
            primaryColor={props.primaryColor}
            firstName={props.firstName}
            lastName={props.lastName}
            email={props.email}
            firstNameError={props.firstNameError}
            firstNameMessage={props.firstNameMessage}
            lastNameError={props.lastNameError}
            lastNameMessage={props.lastNameMessage}
            emailError={props.emailError}
            emailMessage={props.emailMessage}
            radioValue={props.radioValue}
            radioError={props.radioError}
            radioMessage={props.radioMessage}
            budget={props.budget}
            timetable={props.timetable}
            subject={props.subject}
            subjectError={props.subjectError}
            subjectMessage={props.subjectMessage}
            message={props.message}
            messageError={props.messageError}
            messageMessage={props.messageMessage}
            handleFormChange={props.handleFormChange}
            handleFormSubmit={props.handleFormSubmit}
            handleRadioChange={props.handleRadioChange}
          />
      </Container>
    </div>    
  );
}

export default StandardContact