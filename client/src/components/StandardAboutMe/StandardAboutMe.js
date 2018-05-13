import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect, Link*/ } from "react-router-dom";
import { Container, Header, Grid, Table, List } from 'semantic-ui-react';
import EducationTable from "../EducationTable";
import WorkExperienceTable from "../WorkExperienceTable";
import "./StandardAboutMe.css";

const StandardAboutMe = props => {
  return (
    <div id="aboutMe">
      <Container >
        <Header as="h2"  style={{color: props.secondaryColor}}>
          About Me
        </Header>
        {/* <List bulleted style={{color: props.secondaryColor}}>
          <List.Item as="h4">  Current LiDAR technician becoming a full-stack developer</List.Item>
          <List.Item as="h4">  Recent graduate of University of Richmond's 6 month coding bootcamp</List.Item>
          <List.Item as="h4">  Resident of Richmond, VA and loving every second of it</List.Item>
        </List> */}
        <Header as="h4" style={{color: props.secondaryColor}}>I am a recent graduate of the University of Richmond Coding Bootcamp. I currently work in the Civil Engineering field, but I want to develop your next website project. Whether you are looking for a freelancer to make your blog or a web development company working on huge projects, I'm your huckleberry.</Header>

        <EducationTable
          primaryColor={props.primaryColor}
          tertiaryColor={props.tertiaryColor}
          secondaryColor={props.secondaryColor}
        />
        <WorkExperienceTable
          primaryColor={props.primaryColor}
          tertiaryColor={props.tertiaryColor}
          secondaryColor={props.secondaryColor}
        />
      </Container>
    </div>
  );
}

const style = {
  header: {
    color: "#FFDF80" ,
  }
};

export default StandardAboutMe