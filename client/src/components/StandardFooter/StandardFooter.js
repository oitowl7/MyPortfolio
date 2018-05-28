import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect,*/ Link } from "react-router-dom";
import { Container, Grid, Image, Header } from 'semantic-ui-react';

const StandardFooter = props => {
  return (
    <div id="footer" style={{height: props.height, backgroundColor: props.secondaryColor, color: props.primaryColor, marginTop: 40, width: "100%"}}>
      <Container fluid > 
        <Grid verticalAlign="middle">
          <Grid.Row columns={3}>
            <Grid.Column>
              <Container textAlign="center">
                <Header as="h5" style={{color: props.primaryColor}}>© Jordan Shear 2018</Header>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container textAlign="center">
              <Image.Group style={{display: "block", margin:"auto"}}>
                <Link target="_blank" to="https://www.linkedin.com/in/jordanshear"><Image size="mini" src="../images/standard/linkedin.png"/></Link>
                <Link target="_blank" to="https://github.com/oitowl7"><Image size="mini" src="../images/standard/github.png"/></Link>
              </Image.Group>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container textAlign="center">
                <Header as="h5" style={{color: props.primaryColor}}>My <Link target="_blank" to="https://i.imgur.com/NOozaSk.jpg" style={{color: props.primaryColor}}>dad</Link> says "Hi!"</Header>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}


export default StandardFooter