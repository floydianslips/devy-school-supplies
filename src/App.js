import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import PlayerDetails from './components/players/PlayerDetails'
import SignIn from './components/auth/SignIn'
import SignUp  from './components/auth/SignUp'
import CreateMessage from './components/messages/CreateMessage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={ Dashboard } />
          <Route path='/players/:id' component={ PlayerDetails } />
          <Route path='/signin' component={ SignIn } />
          <Route path='/signup' component={ SignUp } />
          <Route path= '/create' component={ CreateMessage } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
