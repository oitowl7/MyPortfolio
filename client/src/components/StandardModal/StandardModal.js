import React from 'react';
import { Link } from "react-router-dom";
import { Header, Modal, Image, Container, Button, Grid, Tab, List } from 'semantic-ui-react';
import "./StandardModal.css"

const cardData = [
  {
    title: "Trivia Game",
    photo: "../images/Trivia/main.jpg",
    tasks: [
      "Create a trivia game that shows one question at a time to a player who must answer it before the timer runs out, which is reset upon the question being answered.", 
      "If the player selects the right answer, show a screen congratulating them on how amazing they are.",
      "On the final screen, show the player how many they got right and wrong and give them an option to restart the game without reloading the page."
    ],
    methods: [
      "For this project, I went a bit off script from the original instructions, with the blessing of those who would be grading it of course. It mae little sense to me to have a trivia game with only 5-10 pre-scripted questions (we had not yet learned of APIs) so I decided to create a personality test that logged answers and kicked out a character that the user represents.",
      "First, I had to decide on a theme. Me being a Star Wars fan, I chose to make my characters about that. I had to choose 22 force sensitive characters from the universe. I then gave each a good/evil value as well as a short bio and stored them all in an array",
      "I then created a set of questions and responses. Each response had a value assigned to it from -2 to +2. There was also Jar Jar Binks quotes that were worth 0. If the user selected all Jar Jar quotes or ran out of time on each question, they got Jar Jar as their character. Otherwise, the final score was tallied and their character was shown.",
      "Technologies used: HTML5, CSS3, Javascript, jQuery"
    ],
    challenges: [
      "The most time consuming part of this project was creating the characters array. I had to find 22 characters (as the user score could be anywhere between -10 and +10 and 2 characters were needed for 0). Finding the characters and creating a very short bio for each character was very time consuming but also fairly enjoyable.",
      "Automating the photos that were shown when the final score was tallied was a challenge. I simply ened up naming all the photos the corresponding scores.",
      "I wanted to also mix my responses up while maintaining their values. To do this I used random number generators and verifications to randomly display the responses and keep the good/bad values intact."
    ],
    links: [
      "https://oitowl7.github.io/trivia-game/",
      "https://github.com/oitowl7/trivia-game"
    ],
    images: [
      "../images/Trivia/page.jpg",
      "../images/Trivia/results.jpg",
      "../images/Trivia/challenges.jpg",
      "../images/Trivia/links.jpg"
    ]
  },
  {
    title: "Local",
    purpose: "To find the best restaurants in specific geographic neighborhoods around Richmond (and potentially beyond), therefore living like a local",
    technologiesUsed: "HTML5, CSS3, Javascript, jQuery, Google Places API",
    photo: "../images/Local/main.png",
    tasks: [
      "Create a website which takes shows the user a list of restaurants based off a neighborhood of their choosing",
      "The user is allowed the option to look at a map of the neighborhood outlines in the city they want to look at (currently Richmond, VA is the only available city) that pops up in a modal. The user then can select from a dropdown box their neighborhood of choice to show the restaurants there.",
      "The results are listed as cards which display the restaurant's name, whether it is open or closed, address, rating, and a link to open it in Google maps",
      "The app is designed to allow the user to live like a local when they are visiting the city and don't know what to do."
    ],
    methods: [
      "We first had to come up with a design and overall idea of what we wanted the page to look like. We wanted to make it look very sleek and modern while not compromising the speed of the page loading. We used several outside vendor libraries to achieve this including Button Styles Inspiration, jQuery Nice, jQuery Easing, and Isotope (which never made it into the final build)",
      "We then had to work out the Google Places API to figure out what we could and couldn't get from it and then use that to display our desired restaurants. Google Places will return places based on neighborhood names, so we were able to use that. However, in order to let the user know where the neighborhood was, we had to create a map with polygons in it showing the neighborhood outlines using MyMaps from Google.",
      "The final part was to display a selection of restaurants in the area that they selected on the screen with the information we wanted to show (name, address, link to Google Maps, etc). This was achieved using jQuery. We also wanted to display the weather in the local area at the top and to do this we used the Openweathermap API.",
      "Technologies used: HTML5, CSS3, Javascript, jQuery, Google Places API"
    ],
    challenges: [
      "This was the first time we really got stuck into both jQuery and APIs. We lost a lot of sleep collectivly trying to figure out both how to get the information we wanted from Google and figuring out how to display that data on the page. There were several hacks done and shortcuts taken in order to get a finished project on the page but eventually we got it to where it needed to be.",
      "As with probably every project ever done, getting our scope of features and wants to have vs. haves to have narrowed down and focused was a huge task. There were so many things we wanted to do but eventually had to scrap. A famous author once said something to the effect of 'if you don't cut out something you love, then what you wrote wasn't good enough'"
    ],
    links: [
      "https://maryhall17.github.io/Local/",
      "https://github.com/oitowl7/Local"
    ],
    images: [
      "../images/Local/main.png",
      "../images/Local/methods.jpg",
      "../images/Local/challenges.jpg",
      "../images/Local/links.gif"
    ]
  },
  {
    title: "Studii",
    purpose: "To find the best restaurants in specific geographic neighborhoods around Richmond (and potentially beyond), therefore living like a local",
    technologiesUsed: "HTML5, CSS3, Javascript, jQuery, google places api",
    photo: "../images/Studii/main.png",     
    tasks: ["these", "are", "tasks"],
    methods: ["These", "are", "methods"],
    challenges: ["These", "are", "challenges"],
    links: [
      "/images/Trivia/page.png",
      "/images/Trivia/results.jpg",
      "/images/Trivia/challenges.jpg",
      "/images/Trivia/links.jpg"
    ],
    images: [
      "../images/Studii/main.png",
      "../images/Studii/method.jpg",
      "../images/Studii/challenges.jpg",
      "../images/Studii/links.jpg"
    ]
  }
]



const StandardPortfolioCard = props => {
  console.log("hitting Modal");
  const style = {
    secondary: {
      color: props.secondaryColor ,
    },
    primary: {
      backgroundColor: props.primaryColor
    },
    secondaryPrimary: {
      color: props.secondaryColor ,
      backgroundColor: props.primaryColor
    },
    imageCenter: {
      display: "block",
      margin: "auto"
    },
    backgroundColor: props.primaryColor,
    color: props.secondaryColor
};

  const color = "teal";
  return (
    <div id="portfolio">      
      <Container style={{backgroundColor: props.primaryColor, color: props.secondaryColor}}>
        <Header as="h2" style={style.secondary}>Portfolio</Header><br></br>
        <Grid stackable>
          <Grid.Row columns={3} divided>
            {cardData.map( (card, i) => {
              return(
              <Grid.Column key={i}>

                <Container fluid textAlign="center">
                  <Header as="h4" style={style.secondary} >{card.title}</Header>

                  <Modal style={style.secondaryPrimary} closeIcon trigger={
                    <Image circular style={style.imageCenter} name={card.title} src={card.photo} size="medium" />
                  }>
                    <Modal.Header style={style.secondaryPrimary}>{card.title}</Modal.Header>
                    <Modal.Content style={style.secondaryPrimary}>
                      <Grid>
                        <Grid.Row>
                          <Grid.Column width={16}>
                            <Tab className="standardMenu" menu={{ pointing: true }} panes={[

                              { menuItem: 'Tasks', render: () => 
                                <Tab.Pane attached={false} style={style.secondaryPrimary}>
                                  <Grid>
                                    <Grid.Column width={8}>
                                      <Image wrapped src={card.images[0]} style={style.imageCenter} size="medium" bordered rounded/>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                      <List bulleted>
                                        {card.tasks.map(task => {
                                          return (
                                            <List.Item>{task}</List.Item>
                                          )
                                        })}
                                      </List>
                                    </Grid.Column>
                                  </Grid>
                                </Tab.Pane> },

                              { menuItem: 'Methods', render: () => 
                                <Tab.Pane attached={false} style={style.secondaryPrimary}>
                                  <Grid>
                                    <Grid.Column width={8}>
                                      <Image wrapped src={card.images[1]} style={style.imageCenter} size="medium" bordered rounded/>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                      <List bulleted>
                                        {card.methods.map(method => {
                                          return (
                                            <List.Item>{method}</List.Item>
                                          )
                                        })}
                                      </List>
                                    </Grid.Column>
                                  </Grid>
                                </Tab.Pane> },

                              { menuItem: 'Challenges', render: () => 
                              <Tab.Pane attached={false} style={style.secondaryPrimary}>
                                <Grid>
                                  <Grid.Column width={8}>
                                    <Image wrapped src={card.images[2]} style={style.imageCenter} size="medium" bordered rounded />
                                  </Grid.Column>
                                  <Grid.Column width={8}>
                                    <List bulleted>
                                      {card.challenges.map(challenge => {
                                        return (
                                          <List.Item>{challenge}</List.Item>
                                        )
                                      })}
                                    </List>
                                  </Grid.Column>
                                </Grid>
                              </Tab.Pane> },

                              { menuItem: 'Links', render: () => 
                              <Tab.Pane attached={false} style={style.secondaryPrimary}>
                                <Grid>
                                  <Grid.Column width={8}>
                                    <Image wrapped src={card.images[3]} style={style.imageCenter} size="medium" rounded/>
                                  </Grid.Column>
                                  <Grid.Column width={8}>
                                    <List bulleted>
                                      <List.Item>
                                        <Link style={style.secondary} target="_blank" to={card.links[0]}>Gitpages/Heroku Page</Link>
                                      </List.Item>
                                      <List.Item style={{marginTop: 15}}>
                                        <Link style={style.secondary} target="_blank" to={card.links[1]}>Github</Link>
                                      </List.Item>
                                    </List>
                                  </Grid.Column>
                                </Grid>
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