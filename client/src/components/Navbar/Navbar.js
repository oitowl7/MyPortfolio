import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect*/ Link } from "react-router-dom";
import { Segment, Menu, Dropdown } from 'semantic-ui-react';
import "./Navbar.css"

const Navbar = props => {
  return (
    <div>
      {/* <Segment> */}
        <Menu color={props.primaryColor} inverted secondary fluid>
          <Menu.Item name='JORDAN SHEAR' />
          <Menu.Item name='Top' active={props.activeMenuItem === 'Top'} onClick={()=>props.handleMenuClick("Top")} />
          <Menu.Item name='Bio' active={props.activeMenuItem === 'Bio'} onClick={()=>props.handleMenuClick("Bio")} />
          <Menu.Item name='Technologies' active={props.activeMenuItem === 'Technologies'} onClick={()=>props.handleMenuClick("Technologies")} />
          <Menu.Item name='Portfolio' active={props.activeMenuItem === 'Portfolio'} onClick={()=>props.handleMenuClick("Portfolio")} />
          <Dropdown item text='Change Themes' >
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