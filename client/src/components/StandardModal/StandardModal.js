import React from 'react';
import { Link } from "react-router-dom";
import { Header, Modal, Image, Container, Grid, Tab, List, Segment } from 'semantic-ui-react';
import "./StandardModal.css"
import cardData from "../../utils/StandardFullsizeInfo"

const StandardFullsizeModal = props => {
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

  return (
    <div id="portfolio">      
      <Container style={{backgroundColor: props.primaryColor, color: props.secondaryColor}}>
        <Header as="h2" style={{color: props.secondaryColor}}>Portfolio</Header><Header as="h4" style={{color: props.secondaryColor}}>(Click the Images for More Information)</Header><br></br>
        <Grid stackable>
          <Grid.Row columns={3}>
            {cardData.map( (card, i) => {
              return(
              <Grid.Column key={i}>

                <Container fluid textAlign="center">
                  <Header as="h4" style={style.secondary} >{card.title}</Header>
                  <Container style={{width: "80%", marginBottom: 20}}>
                    <Segment style={{color: props.secondaryColor, backgroundColor: props.primaryColor, borderColor: props.secondaryColor}}>
                      <Image.Group style={{display: "block", margin:"auto"}}>
                        <Link target="_blank" to={card.links[0]}><Image size="tiny" src={card.images[4]}/></Link>
                        <Link target="_blank" to={card.links[1]}><Image size="tiny" src={card.images[5]}/></Link>
                      </Image.Group>
                    </Segment>
                  </Container>

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

                              // { menuItem: 'Links', render: () => 
                              // <Tab.Pane attached={false} style={style.secondaryPrimary}>
                              //   <Grid>
                              //     <Grid.Column width={8}>
                              //       <Image wrapped src={card.images[3]} style={style.imageCenter} size="medium" rounded/>
                              //     </Grid.Column>
                              //     <Grid.Column width={8}>
                              //       <List bulleted>
                              //         <List.Item>
                              //           <Link style={style.secondary} target="_blank" to={card.links[0]}>Gitpages/Heroku Page</Link>
                              //         </List.Item>
                              //         <List.Item style={{marginTop: 15}}>
                              //           <Link style={style.secondary} target="_blank" to={card.links[1]}>Github</Link>
                              //         </List.Item>
                              //       </List>
                              //     </Grid.Column>
                              //   </Grid>
                              // </Tab.Pane> }

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


export default StandardFullsizeModal