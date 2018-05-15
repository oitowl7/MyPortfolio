import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect*/ Link } from "react-router-dom";
import { Image, Container, Header } from 'semantic-ui-react';
import "./StandardTopImage.css"

const StandardTopImage = props => {
  return (
    <div id="topOfPage">
    <Image 
      src="../images/standard/top.jpg"
      style={style.image}
    />
    <div style={style.container}>
        <Container  textAlign="center">
          <Header as="h1" style={{marginTop: "20%", color: "#3A3B3A"}}>Jordan Shear</Header>
          <Header as="h3">a full stack web developer, wannabe glam rock star, and laser scanning expert</Header>
        </Container>
    </div>    
    </div>
  );
}


const style = {
  container: {
    // position: "relative"
    height: "auto",
    width: "100%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    top: "10%",

  },
  image: {
    // flexGrow:1,
    // height:null,
    width: "100%",
    alignItems: 'center',
    justifyContent:'center',
    zIndex: "-1",
    // marginTop: "-20%"
  },
};

export default StandardTopImage