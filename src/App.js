import React from 'react'
import Header from './Header'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Chats from './Chats'
import ChatScreen from './ChatScreen'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          
        </Switch>

        {/* Button below tinder cards */}

        {/* Chats screen */}
        {/* Individual chat screen */}

      </Router>

    </div>
  );
}

export default App;
