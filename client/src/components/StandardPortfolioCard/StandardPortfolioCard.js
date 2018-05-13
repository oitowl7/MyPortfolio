import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect, Link*/ } from "react-router-dom";
import { Header, Grid, Image, Container } from 'semantic-ui-react';

const StandardPortfolioCard = props => {
  const style = {
    secondary: {
      color: props.secondaryColor ,
    },
    imageCenter: {
      display: "block",
      margin: "auto"
    }
};
  return (
    <div id="portfolio">
      <Container fluid style={{backgroundColor: props.primaryColor, color: props.secondaryColor}}>
        <Header as="h2" style={style.secondary}>Portfolio</Header><br></br>
        <Grid>
          <Grid.Row columns={3} divided>
            <Grid.Column>
              <Container fluid textAlign="center">
                <Header as="h4" style={style.secondary} >Trivia Game</Header>
                <Image circular style={style.imageCenter} name="triviaGame" src="/images/trivia/0.jpg" size="medium" onClick={props.displayModal} />
              </Container>
            </Grid.Column>

            <Grid.Column>
              <Container fluid textAlign="center">
                <Header as="h4" style={style.secondary} >Local</Header>
                <Image circular style={style.imageCenter} name="local" src="/images/local/0.png" size="medium" onClick={props.displayModal} />
              </Container>
            </Grid.Column>

            <Grid.Column>
              <Container fluid textAlign="center">
                <Header as="h4" style={style.secondary} >Studii</Header>
                <Image circular style={style.imageCenter} name="studii" src="/images/studii/0.png" size="medium" onClick={props.displayModal} />
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}


export default StandardPortfolioCard