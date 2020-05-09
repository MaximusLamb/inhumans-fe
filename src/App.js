import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import CharacterDetail from './CharacterDetail.js';
import CharacterList from './CharacterList.js';
import AdminPage from './AdminPage.js';


export default class App extends Component {


  render() {
    return (


      <div>
        <Router>
          <Switch>
            <Route
            path="/inhumans"
            exact
            render={(routerProps) => <CharacterList {...routerProps} />}
            />
             <Route
            path="/inhumans/:id"
            exact
            render={(routerProps) => <CharacterDetail {...routerProps} />}
            />
             <Route
            path="/inhumans/:id"
            exact
            render={(routerProps) => <AdminPage {...routerProps} />}
            />
          </Switch>
        </Router>
        
      </div>
    )
  }
}

