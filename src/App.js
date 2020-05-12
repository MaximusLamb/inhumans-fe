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
    console.log(AdminPage)
    return (


      <div>
        <Router>
          <Switch>
            <Route
            path="/"
            exact
            render={(routerProps) => <CharacterList {...routerProps} />}
            />
             <Route
            path="/inhumans/:id"
            exact
            render={(routerProps) => <CharacterDetail {...routerProps} />}
            />
             <Route
            path="/create"
          
            render={(routerProps) => <AdminPage {...routerProps} />}
            />
          </Switch>
        </Router>
        
      </div>
    )
  }
}
 // <div>
        //     hello
        // <form onSubmit={this.handleSubmit}>
        // <h1>NEW INHUMAN</h1>
        // <label>NAME
        // <input onChange={this.handleNameChange} name={name}></input>
        // </label>
        
        //                 <label>POWER
        //                     <input onChange={this.handlePowerChange} name={power}></input>
        //                 </label>

        //                 <label>COOL FACTOR
        //                     <input onChange={this.handleCoolFactorChange} name={cool_factor} type="number"></input>
        //                 </label>

        //                 <label>IS ROYAL
        //                     <input checked={{is_royal} === 'true'} type="radio" name={is_royal} value="true"> </input>
        //                 </label>

        //                 <label>ISN'T ROYAL
        //                     <input checked={{is_royal} === 'false'} type="radio" name={is_royal} value="false"></input>
        //                 </label>
        //             <button>Create</button>
        //         </form>
                

                
        //     </div>
