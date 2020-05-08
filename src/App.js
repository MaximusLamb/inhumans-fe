import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import CharacterDetail from './CharacterDetail.js';


export default class App extends Component {
  render() {
    return (


      <div>
        <Router>
          <Switch>
            <Route
            path="/inhumans"
            exact
            render={(routerProps) => <CharacterDetail {...routerProps} />}
            />
          </Switch>
        </Router>
        
      </div>
    )
  }
}

