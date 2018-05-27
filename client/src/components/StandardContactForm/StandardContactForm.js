import React from "react";
// import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link  } from "react-router-dom";
// import API from "./utils/API";
import { Form, Header, Grid, Label } from 'semantic-ui-react';
import "./StandardContactForm.css"


class StandardContactForm extends React.Component {

  state = {
    error: false,
    radioValue: null
  };

  render() {
    return(
      <Form>

        <Form.Group widths='equal'>
          <Form.Field required onChange={this.props.handleFormChange}>
            <br></br>
            <label style={{color: this.props.secondaryColor}}>First Name</label>
            <input name="firstName" placeholder="Buddy" style={{color: this.props.primaryColor, backgroundColor: this.props.secondaryColor}} />
            {this.props.firstNameError ?
              <Label basic color="red" pointing="above">{`${this.props.firstNameMessage}`}</Label>
            : ""}
          </Form.Field>
          <Form.Field required onChange={this.props.handleFormChange}>
            <br></br>
            <label style={{color: this.props.secondaryColor}}>Last Name</label>
            <input name="lastName" placeholder="Light" style={{color: this.props.primaryColor, backgroundColor: this.props.secondaryColor}} />
            {this.props.lastNameError ?
              <Label basic color="red" pointing="above">{`${this.props.lastNameMessage}`}</Label>
            : ""}
          </Form.Field>
          <Form.Field required onChange={this.props.handleFormChange}>
            <br></br>
            <label style={{color: this.props.secondaryColor}}>Email</label>
            <input name="lastName" name="email" placeholder="buddylight@email.com" style={{color: this.props.primaryColor, backgroundColor: this.props.secondaryColor}} />
            {this.props.emailError ?
              <Label basic color="red" pointing="above">{`${this.props.emailMessage}`}</Label>
            : ""}
          </Form.Field>
        </Form.Group>
          {/* <Header as="h5">Reason for Emailling</Header> */}

        <Form.Group inline>
          <label style={{fontStyle: "strong", color: this.props.secondaryColor}}>Reason for Emailling: <span style={{color: "red"}}>*</span></label>
          {this.props.radioError ?
            <Label basic color="red" pointing="left">{`${this.props.radioMessage}`}</Label>
          : ""}
          <Grid style={{marginTop: 5}}>
            <Grid.Row columns={this.props.columns}>
              <Grid.Column>
                <Form.Radio className="standardRadio" label='Employment' value='employment' checked={this.props.radioValue === 'Employment'} name="radioValue" onChange={() => this.props.handleRadioChange("Employment")} style={{}}/>
              </Grid.Column>
              <Grid.Column>
                <Form.Radio className="standardRadio" label='Freelance Work' value='freelance' checked={this.props.radioValue === 'Freelance'} name="radioValue" onChange={() => this.props.handleRadioChange("Freelance")} />
              </Grid.Column>
              <Grid.Column>
                <Form.Radio className="standardRadio" label='Compliment My Fashion Sense' value='fashion' checked={this.props.radioValue === 'Fashion'} name="radioValue" onChange={() => this.props.handleRadioChange("Fashion")} />
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field onChange={this.props.handleFormChange} required>
            <br></br>
            <label style={{color: this.props.secondaryColor}}>Subject</label>
            <input name="subject" placeholder="I want you to fight forest fires" name="subject" style={{color: this.props.primaryColor, backgroundColor: this.props.secondaryColor}} />
            {this.props.subjectError ?
              <Label basic color="red" pointing="above">{`${this.props.subjectMessage}`}</Label>
            : ""}
          </Form.Field>
          <Form.Field onChange={this.props.handleFormChange}>
            <br></br>
            <label style={{color: this.props.secondaryColor}}>Budget (if applicable in $USD)</label>
            <input name="budget" type="number" placeholder="1000" style={{color: this.props.primaryColor, backgroundColor: this.props.secondaryColor}} />
          </Form.Field>
          <Form.Field onChange={this.props.handleFormChange}>
            <br></br>
            <label style={{color: this.props.secondaryColor}}>Timetable (if applicable)</label>
            <input name="timetable" placeholder="However much you need (lol)" name="timetable" style={{color: this.props.primaryColor, backgroundColor: this.props.secondaryColor}} />
          </Form.Field>
        </Form.Group>

          <Form.Field required onChange={this.props.handleFormChange}>
            <br></br>
            <label style={{color: this.props.secondaryColor}}>Message</label>
            <textarea name="message"  placeholder="Hello. My name is Inigo Montoya....." style={{color: this.props.primaryColor, backgroundColor: this.props.secondaryColor}} />
            {this.props.messageError ?
              <Label basic color="red" pointing="above">{`${this.props.messageMessage}`}</Label>
            : ""}
          </Form.Field>
        <Form.Button onClick={this.props.handleFormSubmit} style={{color: this.props.primaryColor, backgroundColor: this.props.secondaryColor}}>Submit</Form.Button>
      </Form>
    )
  }
}

export default StandardContactForm;
