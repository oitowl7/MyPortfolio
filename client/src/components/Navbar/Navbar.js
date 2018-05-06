import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect*/ Link } from "react-router-dom";
import { Segment, Menu, Dropdown } from 'semantic-ui-react';
import "./Navbar.css"

const Navbar = props => {
  return (
    <div>
      <Segment>
        <Menu color={props.menuColor} inverted secondary fluid>
          <Menu.Item name='JORDAN SHEAR' />
          <Menu.Item name='Top' active={props.activeMenuItem === 'Top'} onClick={()=>props.handleMenuClick("Top")} />
          <Menu.Item name='Bio' active={props.activeMenuItem === 'Bio'} onClick={()=>props.handleMenuClick("Bio")} />
          <Menu.Item name='Technologies' active={props.activeMenuItem === 'Technologies'} onClick={()=>props.handleMenuClick("Technologies")} />
          <Menu.Item name='Portfolio' active={props.activeMenuItem === 'Portfolio'} onClick={()=>props.handleMenuClick("Portfolio")} />
          <Dropdown item text='Change Themes' inverted>
            <Dropdown.Menu color="teal" inverted secondary fluid>
              <Dropdown.Item >
                <Link to="/standard" className={`${props.activePage}Dropdown`} inverted>Standard</Link>
              </Dropdown.Item>
              <Dropdown.Item >
                <Link to="/comics" className={`${props.activePage}Dropdown`} inverted>Comic Books</Link>
              </Dropdown.Item>
              <Dropdown.Item >
                <Link to="/starwars" className={`${props.activePage}Dropdown`} inverted>Star Wars</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </Segment>
    </div>    
  );
}

export default Navbar