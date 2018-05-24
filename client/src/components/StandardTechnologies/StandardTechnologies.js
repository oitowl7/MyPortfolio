import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect, Link*/ } from "react-router-dom";
import { Container, Header, Grid, Image } from 'semantic-ui-react';
import technologies from "../../utils/standardTechnologies.js"

const StandardTechnologies = props => {
  return (
    <div id="portfolio">
      <Container style={{marginTop: 20}}>
        <Header as="h2" style={style.header}>Technologies</Header>
        <Grid columns={props.columnNumber}>
          {technologies.map((technology, i) => {
            return(
              <Grid.Column key={i}>
                <Container textAlign="center">
                  <Image src={technology.src} style={style.imageCenter}/>
                  <Header as="h4" style={{color: props.secondaryColor}}>{technology.text}</Header>
                </Container>
              </Grid.Column>
            )
          })}
        </Grid>
      </Container>
    </div>
  );
}

const style = {
  header: {
    color: "#FFDF80" ,
  }
};

export default StandardTechnologies
