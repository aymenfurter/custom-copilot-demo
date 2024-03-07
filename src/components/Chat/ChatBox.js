import React, { useState, useEffect } from 'react';
import Message from './Message'; // Import the Message component
import './ChatBox.css';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [currentInput, setCurrentInput] = useState('');

  const handleInputChange = (e) => {
    setCurrentInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (currentInput.trim() === '') {
      return;
    }
    setMessages([...messages, { type: 'user', text: currentInput }]);
    setCurrentInput('');

    // Simulate a bot response
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { type: 'bot', text: 'This is a simulated response.' },
      ]);
    }, 1000);
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
  }, [currentInput, messages]);

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} type={message.type} />
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
