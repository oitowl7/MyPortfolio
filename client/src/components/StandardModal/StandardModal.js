import React from 'react';
import { /* BrowserRouter as Router, Route, Switch, Redirect, Link*/ } from "react-router-dom";
import { Header, Modal, Image, Container, Button, Grid, Tab, List } from 'semantic-ui-react';

const cardData = [
  {
    title: "Trivia Game",
    technologiesUsed: "HTML5, CSS3, Javascript, jQuery",
    photo: "../images/trivia/main.jpg",
    tasks: [
      "Create a trivia game that shows one question at a time to a player who must answer it before the timer runs out, which is reset upon the question being answered.", 
      "If the player selects the right answer, show a screen congratulating them on how amazing they are.",
      "On the final screen, show the player how many they got right and wrong and give them an option to restart the game without reloading the page."
    ],
    methods: [
      "For this project, I went a bit off script from the original instructions, with the blessing of those who would be grading it of course. It mae little sense to me to have a trivia game with only 5-10 pre-scripted questions (we had not yet learned of APIs) so I decided to create a personality test that logged answers and kicked out a character that the user represents.",
      "First, I had to decide on a theme. Me being a Star Wars fan, I chose to make my characters about that. I had to choose 22 force sensitive characters from the universe. I then gave each a good/evil value as well as a short bio and stored them all in an array",
      "I then created a set of questions and responses. Each response had a value assigned to it from -2 to +2. There was also Jar Jar Binks quotes that were worth 0. If the user selected all Jar Jar quotes or ran out of time on each question, they got Jar Jar as their character. Otherwise, the final score was tallied and their character was shown."
    ],
    challenges: [
      "The most time consuming part of this project was creating the characters array. I had to find 22 characters (as the user score could be anywhere between -10 and +10 and 2 characters were needed for 0). Finding the characters and creating a very short bio for each character was very time consuming but also fairly enjoyable.",
      "Automating the photos that were shown when the final score was tallied was a challenge. I simply ened up naming all the photos the corresponding scores.",
      "I wanted to also mix my responses up while maintaining their values. To do this I used random number generators and verifications to randomly display the responses and keep the good/bad values intact."
    ],
    links: [
      "https://github.com/oitowl7/trivia-game",
      "https://oitowl7.github.io/trivia-game/"
    ],
    images: [
      "/images/trivia/page.jpg",
      "/images/trivia/results.jpg",
      "/images/trivia/challenges.jpg",
      "/images/trivia/links.jpg"
    ]
  },
  {
    title: "Local",
    purpose: "To find the best restaurants in specific geographic neighborhoods around Richmond (and potentially beyond), therefore living like a local",
    technologiesUsed: "HTML5, CSS3, Javascript, jQuery, google places api",
    photo: "../images/local/main.png",
    tasks: ["these", "are", "tasks"],
    methods: ["These", "are", "methods"],
    challenges: ["These", "are", "challenges"],
    links: [
      "/images/trivia/page.jpg",
      "/images/trivia/results.jpg",
      "/images/trivia/challenges.jpg",
      "/images/trivia/links.jpg"
    ]
  },
  {
    title: "studii",
    purpose: "To find the best restaurants in specific geographic neighborhoods around Richmond (and potentially beyond), therefore living like a local",
    technologiesUsed: "HTML5, CSS3, Javascript, jQuery, google places api",
    photo: "../images/local/main.png",     
    tasks: ["these", "are", "tasks"],
    methods: ["These", "are", "methods"],
    challenges: ["These", "are", "challenges"],
    links: [
      "/images/trivia/page.jpg",
      "/images/trivia/results.jpg",
      "/images/trivia/challenges.jpg",
      "/images/trivia/links.jpg"
    ]
  }
]

const panes = [
  { menuItem: 'Tab 1', render: () => 
    <Tab.Pane attached={false}>
      Tab 1 Content
    </Tab.Pane> },
  { menuItem: 'Tab 2', render: () => 
    <Tab.Pane attached={false}>
      Tab 2 Content
    </Tab.Pane> },
  { menuItem: 'Tab 3', render: () => 
  <Tab.Pane attached={false}>
    Tab 3 Content
  </Tab.Pane> },
]


const StandardPortfolioCard = props => {
  console.log("hitting Modal");
  const style = {
    secondary: {
      color: props.secondaryColor ,
    },
    imageCenter: {
      display: "block",
      margin: "auto"
    }
};
  return (
    <div id="portfolio">
      {/* <Container style={{backgroundColor: props.primaryColor, color: props.secondaryColor}}>
        <Header as="h2" style={style.secondary}>Portfolio</Header><br></br>
        <Grid>
          <Grid.Row columns={3} divided>
            <Grid.Column>
              <Container fluid textAlign="center">
                <Header as="h4" style={style.secondary} >Trivia Game</Header>

                <Modal trigger={
                  <Image circular style={style.imageCenter} name="triviaGame" src="../images/trivia/main.jpg" size="medium" />
                }>
                  <Modal.Header>Select a Photo</Modal.Header>
                  <Modal.Content image>
                    <Image wrapped size='medium' src='../images/trivia/main.jpg' />
                    <Modal.Description>
                      <Header>Default Profile Image</Header>
                      <p>We've found the following gravatar image associated with your e-mail address.</p>
                      <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>

              </Container>
            </Grid.Column>


            <Grid.Column>
              <Container fluid textAlign="center">
                <Header as="h4" style={style.secondary} >Local</Header>

                <Modal trigger={
                  <Image circular style={style.imageCenter} name="local" src="/images/local/main.png" size="medium" />
                }>
                  <Modal.Header>Select a Photo</Modal.Header>
                  <Modal.Content image>
                    <Image wrapped size='medium' src='/images/local/main.png' />
                    <Modal.Description>
                      <Header>Default Profile Image</Header>
                      <p>We've found the following gravatar image associated with your e-mail address.</p>
                      <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>

              </Container>
            </Grid.Column>


            <Grid.Column>
              <Container fluid textAlign="center">
                <Header as="h4" style={style.secondary} >Studii</Header>

                <Modal trigger={
                  <Image circular style={style.imageCenter} name="studii" src="/images/studii/main.png" size="medium" />
                }>
                  <Modal.Header>Select a Photo</Modal.Header>
                  <Modal.Content image>
                    <Image wrapped size='medium' src='/images/studii/main.png' />
                    <Modal.Description>
                      <Header>Default Profile Image</Header>
                      <p>We've found the following gravatar image associated with your e-mail address.</p>
                      <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>

              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container> */}



{/* ///////////////////////////////////////////////////////////////// */}



      
      <Container style={{backgroundColor: props.primaryColor, color: props.secondaryColor}}>
        <Header as="h2" style={style.secondary}>Portfolio</Header><br></br>
        <Grid stackable>
          <Grid.Row columns={3} divided>
            {cardData.map(card => {
              return(
              <Grid.Column>

                <Container fluid textAlign="center">
                  <Header as="h4" style={style.secondary} >Studii</Header>

                  <Modal trigger={
                    <Image circular style={style.imageCenter} name={card.title} src="../images/local/main.png" size="medium" />
                  }>
                    <Modal.Header>{card.title}</Modal.Header>
                    <Modal.Content tab>
                      <Grid>
                        <Grid.Row>
                          <Grid.Column width={4}>
                            <Image wrapped size='medium' src={card.photo} />
                          </Grid.Column>
                          <Grid.Column width={12}>
                            <Tab menu={{ pointing: true }} panes={[
                              { menuItem: 'Tasks', render: () => 
                                <Tab.Pane attached={false}>
                                  <List bulleted>
                                    {card.tasks.map(task => {
                                      return (
                                        <List.Item>{task}</List.Item>
                                      )
                                    })}
                                  </List>
                                </Tab.Pane> },
                              { menuItem: 'Methods', render: () => 
                                <Tab.Pane attached={false}>
                                  methods
                                </Tab.Pane> },
                              { menuItem: 'Challenges', render: () => 
                              <Tab.Pane attached={false}>
                                Challenges
                              </Tab.Pane> },
                              { menuItem: 'Links', render: () => 
                              <Tab.Pane attached={false}>
                                Links
                              </Tab.Pane> }
                            ]} />
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Modal.Content>
                  </Modal>

                </Container>

              </Grid.Column>
            )})}
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}


export default StandardPortfolioCard