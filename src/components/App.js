import React from 'react';
import VoicemailMessages from '../containers/VoicemailMessages';
import Header from '../containers/Header';

function App() {
  return (
    <div className="app-container">
      <Header />
      <VoicemailMessages />
    </div>
  );
}

export default App;
