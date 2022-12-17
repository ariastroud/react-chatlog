// import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>🗣 chat log 🗣</h1>
      </header>
      <main>
        <ChatLog entries={chatMessages} />
      </main>
    </div>
  );
};

export default App;
