import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect, Link*/ } from "react-router-dom";
import { Container, Header, Grid, Table } from 'semantic-ui-react';
import EducationTable from "../EducationTable";
import WorkExperienceTable from "../WorkExperienceTable";

const StandardAboutMe = props => {
  return (
    <div style={style.background} id="aboutMe">
      <Container textAlign="center">
          <Header as="h1" style={style.header}>
            About Me
          </Header>
          <Header as="h3" style={style.header}>
            My name is Jordan Shear. Thank you for visiting my standard portfolio page. I am endevouring to becoming a full stack web developer. I currently work in civil engineering as my day job but at night I develop web pages....like the one you are looking at right now. This page will serve as a fancier resume, as well as a showcase for my pages and pet projects for the world to see and critique. I currently live in Richmond, VA and would like to continue living here. It is truly one of the best cities I've ever been in.
          </Header>

          <EducationTable
            tableColor={props.tableColor}
          />
          <WorkExperienceTable
            tableColor={props.tableColor}
          />





      </Container>
    </div>
  );
}

const style = {
  background: {
    minHeight: 400,
    display: "flex",
    alignItems: "center",
    marginTop: "40%",
    color: "#EEEEEE",
    backgroundColor: "#2185D0"
  },
  header: {
    color: "white" ,
  }
};

export default StandardAboutMe