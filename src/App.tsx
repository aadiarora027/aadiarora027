import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChatAiWidget } from "@sendbird/chat-ai-widget";
import "@sendbird/chat-ai-widget/dist/style.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ChatAiWidget applicationId="40E7672D-6730-41EE-B706-4836A519ED54" botId="UMD-CS"/>
      </header>
    </div>
  );
}

export default App;
