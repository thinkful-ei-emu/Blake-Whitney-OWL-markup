import React from 'react';
import './App.css';
import ParticipantList from './participant-list';
import Stage from './Stage';
import ChatList from './chat-list';

function App() {
  return (
    <div>
      <ParticipantList/>
      <Stage />
      <ChatList />
    </div>
  );
}

export default App;
