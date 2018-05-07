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
            <Table.HeaderCell width={4}>Company</Table.HeaderCell>
            <Table.HeaderCell width={8}>Skills</Table.HeaderCell>
            <Table.HeaderCell width={4}>Years</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Christopher Consultants<br></br>Survey Technician<br></br>Manassas, VA</Table.Cell>
            <Table.Cell>Learned how to work a really long time. This job was very demanding on both my personal time and my personal health. While this job has naught to do with web development, I developed many soft skills and coping methods to deal with what was a very challenging and rewarding job. I mean, I helped build a Smithsonian Museum after all.</Table.Cell>
            <Table.Cell style={{fontStyle: "italic"}}>2011-2013</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bush Roed and Hitchings<br></br>Survey Technician<br></br>Seattle, WA</Table.Cell>
            <Table.Cell>Again, this job isn't web development, but that doesn't mean there aren't skills I took from it. I had to learn 3 new software packages (comparable to learning new coding languages or frameworks) in the course of about 3 months. I also became a party chief and was responsible for taking a project and making sure it was done right, under budget, and as thoroughly as could be. That is a universal skill which I have been developing for some time.</Table.Cell>
            <Table.Cell style={{fontStyle: "italic"}}>2013-2015</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Rice Associates<br></br>LiDAR Technician<br></br>Richmond, VA</Table.Cell>
            <Table.Cell>Took a job here in Richmond, VA as a LiDAR (LIght Detection and Ranging) technician working with huge data sets to map and model all sorts of different locations. We primarily mapped roads but also have modelled many interior areas and even a couple statues (roughly). This job again required learning several new software packages in a short amount of time. This job has also required me to learn a little bit of patience.</Table.Cell>
            <Table.Cell style={{fontStyle: "italic"}}>2016-present</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Freelance<br></br>Web Developer<br></br>Richmond, VA</Table.Cell>
            <Table.Cell>During and now after my coding bootcamp, I have been working on a couple of pages and pet projects. I am currently working on creating a blog using react. I realize that there are things like Wordpress that would be easier but, as I'm not getting paid for it and doing it as a favor, I would like to see the pitfalls and the values of a CDN like Wordpress. I may rework it later with Wordpress if I decide it could be done better that way (likely).</Table.Cell>
            <Table.Cell style={{fontStyle: "italic"}}>2018-present</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}


export default WorkExperienceTable