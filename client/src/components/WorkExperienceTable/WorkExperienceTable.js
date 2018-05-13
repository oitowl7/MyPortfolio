import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect, Link*/ } from "react-router-dom";
import { Header, List } from 'semantic-ui-react';

const WorkExperienceTable = props => {
  return (
    <div style={{marginTop: 60, fontFamily: "MyWebFont !important"}}>
      <Header as="h3" style={{color: props.secondaryColor}}>
        Skills Learned Outside of Coding
        </Header>
      <Header as="h4" style={{color: props.secondaryColor}}>
        I am new to coding. I have basic skills in some areas and intermediate skills in others. I am not a coding guru, yet. However, I have developed many many soft skills working in the engineering/surveying field that will be useful anywhere.
      </Header>

      <List style={{color: props.secondaryColor}} as="h5">
        <List.Item>
          <List.Header as="h4" style={{color: props.secondaryColor, fontStyle: "italic", marginTop: 15}}>Work Ethic</List.Header>
          In my current career, if you don't work hard, there is no place for you. I would not be where I am today without a lot of effort, and I'm pretty proud of that.
        </List.Item>
        <List.Item>
          <List.Header as="h4" style={{color: props.secondaryColor, fontStyle: "italic", marginTop: 15}}>Learning</List.Header>
          I love to learn. I am a very quick learner and enjoy doing it a lot. I'm always up for a new challenge.
        </List.Item>
        <List.Item>
          <List.Header as="h4" style={{color: props.secondaryColor, fontStyle: "italic", marginTop: 15}}>Problem Solving</List.Header>
          I have to problem solve every single day. The path from beginning of project to end is never precisely laid out and requires constant change of plans to deal with all kinds of unforseen obstacles.
        </List.Item>
        <List.Item>
          <List.Header as="h4" style={{color: props.secondaryColor, fontStyle: "italic", marginTop: 15}}>Budgeting</List.Header>
          Every project we have has a budget, and part of my job is being aware of this budget and do the best job I can do while staying within it.
        </List.Item>
      </List>
    </div>
  );
}


export default WorkExperienceTable