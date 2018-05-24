import React from "react";
import { BrowserRouter as Router, Route, Switch, /*Redirect*/ } from "react-router-dom";
// import API from "./utils/API";
// import Question from "./pages/Question";
import StandardHomePage from "./pages/StandardHomePage";
import Page404 from "./pages/Page404";
import ComicsHomePage from "./pages/ComicsHomePage";
import StarWarsPage from "./pages/StarWarsPage";

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
                <StandardHomePage
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

          <Route exact path="/comics" 
            render={(routeProps) => (
              <ComicsHomePage
                // user={this.state.user}
              />
            )} 
          />

          <Route exact path="/starwars" 
            render={(routeProps) => (
              <StarWarsPage
                // user={this.state.user}
              />
            )} 
          />

          <Route component={Page404} />
          
        </Switch>
      </Router>
    )
  }
}

export default App;
