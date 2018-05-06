import React from "react";
import { BrowserRouter as Router, Route, Switch, /*Redirect*/ } from "react-router-dom";
// import API from "./utils/API";
import Question from "./pages/Question"
import StandardHomePage from "./pages/StandardHomePage"
import Page404 from "./pages/Page404"

class App extends React.Component {

  state = {
    
  };

  render() {
    
    return(
      <Router>
        <Switch>
          <Route exact path="/" 
            render={(routeProps) => {
              return (
                <Question
                // facebook_id={this.state.facebook_id}
                />
              )
            }} 
          />
          <Route exact path="/standard" 
            render={(routeProps) => (
              <StandardHomePage
                // user={this.state.user}
              />
            )} 
          />
          <Route component={Page404} />
        </Switch>
      </Router>
    )
  }


  // render() {
  //   if (!this.state.checked) {
  //     return (
  //       <div>
  //         <Header />
  //         <Loading />
  //         <div 
  //           style={{display: "none"}}
  //         >
  //           {this.facebookButton()}
  //         </div>
  //       </div>
  //     )
  //   } else {
  //     if (!this.state.facebook_id) {
  //       return (
  //         <div>
  //           <Header />
  //           <LoginCard />
  //           <div>
  //             {this.facebookButton()}
  //           </div>
  //           <Footer/>
  //         </div>
  //       )
  //     } else {
  //       if (this.state.newUser) {
  //         return(
  //         <div>
  //           <Header />
  //           <Register
  //             facebook_id={this.state.facebook_id}
  //           />
  //           {/* {this.redirectToQuestionnaire()} */}
  //         </div>
  //         )
  //       } else {
  //         return (
  //           <div>
  //             {this.router()}
  //           </div>
  //         )
  //       }
  //     } 
  //   }
  // } 

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   //Matching Algorithm
    //School "wraps" the algorithm
    //At least one class together
    //At least 1 time
    //At least two study preferences

    //map{schools.map((schools) => (
        //if (schools.users.classes[i] === schools.users.classes[i]) {
        //   let i=0
         //  for (; i < users.length; i++) {
         //   if (users.availability[i] === users.availability[i]) {
          //   let i=0 
          //   for (; i < users.length; i++) {
          //    if (users.studyMethod[i] === users.studyMethod[i]) || users.studyPlace[i] === users.studyPlace[i] {
          //        //match them }
          //}
         //  }
         //} 
         //}
     //   ))}
}

export default App;
