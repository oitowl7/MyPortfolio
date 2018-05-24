import React from 'react';
// import { /* BrowserRouter as Router, Route, Switch, Redirect*/ Link } from "react-router-dom";
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-scroll'
import "./Navbar.css"

const Navbar = props => {
  return (
    <div id="navbarDiv">
      {/* <Segment> */}
        <Menu fluid style={{position: "fixed", zIndex: 2, backgroundColor: props.primaryColor, zIndex: 3}}>
          <Menu.Item name='JORDAN SHEAR' style={{color: props.secondaryColor}}/>
          <Menu.Item name='Top' active={props.activeMenuItem === 'Top'} /*onClick={()=>props.handleMenuClick("Top")}*/ style={{color: props.secondaryColor}}>
            <Link  className="top" to="top" offset={-50} spy={true} smooth={true} duration={500} style={{color: props.secondaryColor, backgroundColor: props.primaryColor, cursor: "pointer"}}>
              Top
            </Link>
          </Menu.Item>
          <Menu.Item name='Bio' active={props.activeMenuItem === 'Bio'} /*onClick={()=>props.handleMenuClick("Bio")}*/  style={{color: props.secondaryColor}}>
            <Link  className="bio" to="bio" offset={-50} spy={true} smooth={true} duration={500} style={{color: props.secondaryColor, backgroundColor: props.primaryColor, cursor: "pointer"}}>
              Bio
            </Link>
          </Menu.Item>
          <Menu.Item name='Technologies' active={props.activeMenuItem === 'Technologies'} /*onClick={()=>props.handleMenuClick("Technologies")}*/  style={{color: props.secondaryColor}}>
            <Link  className="technologies" to="technologies" offset={-50} spy={true} smooth={true} duration={500} style={{color: props.secondaryColor, backgroundColor: props.primaryColor, cursor: "pointer"}}>
              Technologies
            </Link>
          </Menu.Item>
          <Menu.Item name='Portfolio' active={props.activeMenuItem === 'Portfolio'} /*onClick={()=>props.handleMenuClick("Portfolio")}*/  style={{color: props.secondaryColor}}>
            <Link  className="portfolio" to="portfolio" offset={-50} spy={true} smooth={true} duration={500} style={{color: props.secondaryColor, backgroundColor: props.primaryColor, cursor: "pointer"}}>
              Portfolio
            </Link>
          </Menu.Item>
          <Dropdown item text='Change Themes'  style={{color: props.secondaryColor}}>
            <Dropdown.Menu color="teal" style={{color: props.primaryColor, backgroundColor: props.secondaryColor}}>
              <Dropdown.Item /*onClick={()=>props.handleChangeTheme("standard")}*/ >
                <div style={{backgroundColor: props.secondaryColor}}>
                  <Link to="/standard" style={{color: props.primaryColor}}>Standard</Link>
                </div>
              </Dropdown.Item>
              <Dropdown.Item /*onClick={()=>props.handleChangeTheme("comics")}*/ >
                <Link to="/comics" style={{color: props.primaryColor}}>Comic Books</Link>
              </Dropdown.Item>
              <Dropdown.Item /*onClick={()=>props.handleChangeTheme("starwars")}*/ >
                <Link to="/starwars" style={{color: props.primaryColor}}>Star Wars</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      {/* </Segment> */}
    </div>    
  );
}

export default Navbar