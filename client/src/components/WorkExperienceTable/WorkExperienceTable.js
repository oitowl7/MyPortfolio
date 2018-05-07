import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect, Link*/ } from "react-router-dom";
import { Header, Table } from 'semantic-ui-react';

const WorkExperienceTable = props => {
  return (
    <div style={{marginTop: 20}}>
      <Header as="h2" style={{color: "white"}}>Previous Work Experience</Header>

      <Table style={{backgroundColor: "", color: props.tableColor }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={4}>Company/Position/Location</Table.HeaderCell>
            <Table.HeaderCell width={8}>Skills</Table.HeaderCell>
            <Table.HeaderCell width={4}>Years</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Christopher Consultants<br></br>Survey Technician<br></br>Manassas, VA</Table.Cell>
            <Table.Cell>Worked around 60-80 hours per week most of the year in this job. Learned how to work long hours and how to deal with that, and also that I don't want to work that much anymore. Became a party cheif and learned to manage time and subordinates for the first time.</Table.Cell>
            <Table.Cell style={{fontStyle: "italic"}}>2011-2013</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bush Roed and Hitchings<br></br>Survey Technician<br></br>Seattle, WA</Table.Cell>
            <Table.Cell>I had to learn 3 new software packages (comparable to learning new coding languages or frameworks) in the course of about 3 months. I also was a party chief and was responsible for making sure a project was done right, under budget, and as thoroughly as could be. That I feel is a universal skill no matter the job.</Table.Cell>
            <Table.Cell style={{fontStyle: "italic"}}>2013-2015</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Rice Associates<br></br>LiDAR Technician<br></br>Richmond, VA</Table.Cell>
            <Table.Cell>Mapped and modelled many things (roads, buildings, etc.) using laser scanned data sets. This job again required learning several new software packages in a short amount of time.</Table.Cell>
            <Table.Cell style={{fontStyle: "italic"}}>2016-present</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Freelance<br></br>Web Developer<br></br>Richmond, VA</Table.Cell>
            <Table.Cell>During and now after my coding bootcamp, I have been working on a couple of pages and pet projects. I am currently working on creating a blog on food and many of the misconceptions surrounding it.</Table.Cell>
            <Table.Cell style={{fontStyle: "italic"}}>2018-present</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}


export default WorkExperienceTable