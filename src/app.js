import React from 'react';
import ReactDOM from 'react-dom';
import MonacoXML from './components/Editor/MonacoXML';
import ChatBox from './components/Chat/ChatBox';
import './main.css'; 

const App = () => {
  return (
    <div className="app">
      <div className="editor-chat-container">
        <div className="editor">
          <MonacoXML />
        </div>
        <div className="chat">
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));