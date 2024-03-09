import React, { useState, useEffect } from 'react';
import Message from './Message';
import './ChatBox.css';

const ChatBox = ({ onMessageSent, messages }) => {
  const [currentInput, setCurrentInput] = useState('');

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (currentInput.trim() === '') {
      return;
    }
    onMessageSent(currentInput);
    setCurrentInput('');
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        handleSendMessage();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentInput]);


  const handleCodeCopy = (code) => {
    navigator.clipboard.writeText(code);
  };


  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((message, index) => (
          <Message
            key={index}
            text={message.text}
            type={message.type}
            onCodeCopy={handleCodeCopy}
          />
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={currentInput}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;