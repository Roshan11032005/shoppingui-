// Import necessary dependencies
import React, { useState } from "react";
import "./SupportChat.css";

const SupportChat = ({ orderId }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const sendMessage = () => {
    if (messageInput.trim()) {
      setMessages([...messages, { sender: "user", text: messageInput }]);
      setMessageInput("");

      // Simulate support response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "support", text: "Thank you for reaching out! How can we assist you?" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="support-chat-container">
      <button className="toggle-chat-btn" onClick={toggleChat}>
        {isChatOpen ? "-" : "Contact Support"}
      </button>

      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Support Chat</span>
            <button className="minimize-btn" onClick={toggleChat}>-</button>
          </div>
          <div className="chat-body">
            {messages.length === 0 && (
              <p className="no-messages">You are chatting about Order ID: {orderId}</p>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender === "user" ? "user-message" : "support-message"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              className="message-input"
              placeholder="Type your message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <button className="send-btn" onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportChat;
