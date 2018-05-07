import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect*/ Link } from "react-router-dom";
import { Segment, Menu, Dropdown } from 'semantic-ui-react';
import "./Navbar.css"

const Navbar = props => {
  return (
    <div>
      {/* <Segment> */}
        <Menu color={props.menuColor} inverted secondary fluid>
          <Menu.Item name='JORDAN SHEAR' />
          <Menu.Item name='Top' active={props.activeMenuItem === 'Top'} onClick={()=>props.handleMenuClick("Top")} />
          <Menu.Item name='Bio' active={props.activeMenuItem === 'Bio'} onClick={()=>props.handleMenuClick("Bio")} />
          <Menu.Item name='Technologies' active={props.activeMenuItem === 'Technologies'} onClick={()=>props.handleMenuClick("Technologies")} />
          <Menu.Item name='Portfolio' active={props.activeMenuItem === 'Portfolio'} onClick={()=>props.handleMenuClick("Portfolio")} />
          <Dropdown item text='Change Themes'>
            <Dropdown.Menu color="teal">
              <Dropdown.Item onClick={()=>props.handleChangeTheme("standard")}>
                Standard
              </Dropdown.Item>
              <Dropdown.Item onClick={()=>props.handleChangeTheme("comics")} >
                Comic Books
              </Dropdown.Item>
              <Dropdown.Item onClick={()=>props.handleChangeTheme("starwars")} >
                Star Wars
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      {/* </Segment> */}
    </div>    
  );
}

export default Navbar