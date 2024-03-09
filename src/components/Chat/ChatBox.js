import React, { useState, useEffect, useCallback } from 'react';
import Message from './Message';
import './ChatBox.css';

const ChatBox = ({ onMessageSent, messages }) => {
  const [currentInput, setCurrentInput] = useState('');

  const isInputEmpty = useCallback(() => currentInput.trim() === '', [currentInput]);

  const handleInputChange = (event) => setCurrentInput(event.target.value);

  const sendMessage = useCallback(() => {
    if (isInputEmpty()) return;
    onMessageSent(currentInput);
    setCurrentInput('');
  }, [currentInput, onMessageSent, isInputEmpty]);

  const handleCodeCopy = useCallback((code) => {
    navigator.clipboard.writeText(code);
  }, []);

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((message, index) => (
          <Message
            key={`${message.id}-${index}`} // Ideally, use a unique ID instead of index
            text={message.text}
            type={message.type}
            onCodeCopy={handleCodeCopy}
          />
        ))}
      </div>
      <form className="input-area" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={currentInput}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        <button type="submit" onClick={sendMessage}>Send</button>
      </form>
    </div>
  );
};

export default ChatBox;