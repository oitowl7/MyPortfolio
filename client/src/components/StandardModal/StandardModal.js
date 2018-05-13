import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect, Link*/ } from "react-router-dom";
import { Header, Modal, Image, Container, Button } from 'semantic-ui-react';

const cardData = [
  {
    title: "Local",
    purpose: "To find the best restaurants in specific geographic neighborhoods around Richmond (and potentially beyond), therefore living like a local",
    technologiesUsed: "HTML5, CSS3, Javascript, jQuery, google places api",
    photo: ""
  }
]

const StandardPortfolioCard = props => {
  console.log("hitting Modal");
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
    <div>
      <Modal open={props.open} onOpen={props.open}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='/images/local/0.png' />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
}


export default StandardPortfolioCard