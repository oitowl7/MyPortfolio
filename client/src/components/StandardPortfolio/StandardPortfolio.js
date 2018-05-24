import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect, Link*/ } from "react-router-dom";
import { Container } from 'semantic-ui-react';
import StandardPortfolioCard from "../StandardPortfolioCard"

const StandardPortfolio = props => {
  return (
    <div id="portfolio">
      <Container>
        <StandardPortfolioCard
          primaryColor={props.primaryColor}
          secondaryColor={props.secondaryColor}
          displayModal={props.displayModal}
        />
      </Container>
    </div>
  );
}


export default StandardPortfolio