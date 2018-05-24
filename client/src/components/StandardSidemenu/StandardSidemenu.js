import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect, Link*/ } from "react-router-dom";
import { Container, Icon, Divider, Menu } from 'semantic-ui-react';
import { stack as Sidemenu } from "react-burger-menu"
import { Link } from 'react-scroll'
import "./StandardSidebarmenu.css"

const StandardSidemenu = props => {
  return (
    <div>
      <Sidemenu isOpen={props.visible} width={150} height={"100%"} style={{backgroundColor: props.primaryColor}}> 
        <Menu style={{backgroundColor: props.primaryColor}}>
          <Menu.Item name='Top' style={{color: props.secondaryColor}}>
            <Link activeClass="active" className="top" to="top" spy={true} smooth={true} duration={500} style={{color: props.secondaryColor, cursor: "pointer", width: 125}}>
              <Container textAlign="center">
                <Icon name='arrow up' size="big" style={{display: "block", margin: "auto"}}/><br></br>Top
              </Container>
            </Link>
          </Menu.Item>
          <Divider style={{color: props.secondaryColor, backgroundColor: props.secondaryColor, margin: -5}}/>
          <Menu.Item name='Bio' style={{color: props.secondaryColor}}>
            <Link activeClass="active" className="bio" to="bio" spy={true} smooth={true} duration={500} style={{color: props.secondaryColor, cursor: "pointer", width: 125}}>
              <Container textAlign="center">
                <Icon name='info' size="big" style={{display: "block", margin: "auto"}}/><br></br>Bio
              </Container>
            </Link>
          </Menu.Item>
          <Divider style={{color: props.secondaryColor, backgroundColor: props.secondaryColor, margin: -5}}/>
          <Menu.Item name='Technologies' style={{color: props.secondaryColor}}>
            <Link activeClass="active" className="technologies" to="technologies" spy={true} smooth={true} duration={500} style={{color: props.secondaryColor, cursor: "pointer", width: 125}}>
              <Container textAlign="center">
                <Icon name='html5' size="big" style={{display: "block", margin: "auto"}}/><br></br>Techs
              </Container>
            </Link>
          </Menu.Item>
          <Divider style={{color: props.secondaryColor, backgroundColor: props.secondaryColor, margin: -5}}/>
          <Menu.Item style={{color: props.secondaryColor}} >
            <Link activeClass="active" className="portfolio" to="portfolio" spy={true} smooth={true} duration={500} style={{color: props.secondaryColor, cursor: "pointer", width: 125}}>
              <Container textAlign="center">
                <Icon name='folder open' size="big" style={{display: "block", margin: "auto"}}/><br></br>Portfolio
              </Container>
            </Link>
          </Menu.Item>
          <Divider style={{color: props.secondaryColor, backgroundColor: props.secondaryColor, margin: -5}}/>
          <Menu.Item name='Comics' style={{color: props.secondaryColor}}>
            <Link to="/comics" style={{color: props.secondaryColor, width: 125}}>
              <Container textAlign="center">
                <Icon size="big" name='spy'  style={{display: "block", margin: "auto"}}/><br></br>Comic Book Style
              </Container>
            </Link>
          </Menu.Item>
          <Divider style={{color: props.secondaryColor, backgroundColor: props.secondaryColor, margin: -5}}/>
          <Menu.Item name='Starwars' style={{color: props.secondaryColor}}>
            <Link to="/starwars" style={{color: props.secondaryColor, width: 125}}>
              <Container textAlign="center">
                <Icon size="big" name='star'  style={{display: "block", margin: "auto"}}/><br></br>Star Wars Style
              </Container>
            </Link>
          </Menu.Item>
        </Menu>
      </Sidemenu>
    </div>
  );
}

export default StandardSidemenu