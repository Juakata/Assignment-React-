import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Selector from '../containers/Selector';
import VoicemailMessages from '../containers/VoicemailMessages';
import Header from '../containers/Header';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Selector />} />
          <Route exact path="/list" render={() => <VoicemailMessages />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
