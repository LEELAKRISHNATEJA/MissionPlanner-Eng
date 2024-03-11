import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";

const VerticalScrollingMessageBox = () => {
  const [messages, setMessages] = useState('');
  const [status, setStatus] = useState('Fetching messages...');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('https://missionplanner-api.onrender.com/messages-data');
        const data = response.data;

        
     
        setMessages(data.m_StringValue);
        setStatus('Messages fetched successfully');
        console.log("messages are",messages);
      } catch (error) {
        console.error('Error fetching messages data:', error);
        setStatus('Error fetching messages');
      }
    };

    // Fetch messages initially and then every 5 seconds
    fetchMessages();
    const fetchInterval = setInterval(fetchMessages, 50);

    
    return () => {
      clearInterval(fetchInterval); // Clear interval when component unmounts
    };
  }, []); 
  console.log("my messages are:",messages);

  

  //console.log(formattedMessages)

  return (
    <div className="vertical-scrolling-container">
      <div className="status">{status}</div>
      <div className="vertical-scrolling-message-box">
        <div className="vertical-scrolling-content">
   <pre>{messages}</pre>


        </div>
      </div>
    </div>
  );
};

export default VerticalScrollingMessageBox;