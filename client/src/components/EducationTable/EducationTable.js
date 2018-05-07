import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect, Link*/ } from "react-router-dom";
import { Header, Table } from 'semantic-ui-react';

const EducationTable = props => {
  return (
    <div style={{marginTop: 20}}>
      <Header as="h2" style={{color: "white"}}>Education</Header>

      <Table style={{backgroundColor: "", color: props.tableColor }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={4}>Name/Location</Table.HeaderCell>
            <Table.HeaderCell width={8}>Degree/Reason For Attending</Table.HeaderCell>
            <Table.HeaderCell width={4}>Years of Attendance</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Oregon Institute of Technology<br></br>Klamath Falls, OR</Table.Cell>
            <Table.Cell>B.S. in Geomatics, originally started in Electrical Engineering but I couldn't do the programming (irony!)</Table.Cell>
            <Table.Cell style={{fontStyle: "italic"}}>2006-2011</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Belevue College<br></br>Bellevue, WA</Table.Cell>
            <Table.Cell>Pre-requsites for physical therapy; was planning on studying abroad but the U.S. changed its accredation rules and I had to attend a U.S. doctoral program to become a physical therapist in the U.S. and I didn't want to pay for U.S. grad school</Table.Cell>
            <Table.Cell style={{fontStyle: "italic"}}>2014-2015</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>University of Richmond Coding Bootcamp<br></br>Richmond,VA</Table.Cell>
            <Table.Cell>Moved on to do what I really enjoy doing and didn't even know it. Learned I wanted to become a web developer and won't stop until I am.</Table.Cell>
            <Table.Cell style={{fontStyle: "italic"}}>2017-2018 (6 mo. program)</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}


export default EducationTable