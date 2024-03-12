import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';

const VerticalScrollingMessageBox = () => {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState('Fetching messages...');
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const scrollingElement = useRef(null);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://missionplanner-api.onrender.com/messages-data');
        const messageString = response.data.m_StringValue;
        const newMessages = messageString.split('\n').filter(message => message.trim() !== '');

        setMessages(prevMessages => [...prevMessages, ...newMessages]);
        setStatus('Messages fetched successfully');
        setHasMore(newMessages.length > 0);
      } catch (error) {
        console.error('Error fetching messages data:', error);
        setStatus('Error fetching messages');
      }
      setLoading(false);
    };

    // Fetch messages initially
    fetchMessages();

    // Schedule periodic polling to fetch messages every 5 seconds
    const intervalId = setInterval(fetchMessages, 50);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = scrollingElement.current;
    if (scrollHeight - scrollTop === clientHeight && !loading && hasMore) {
      fetchMoreMessages();
    }
  };

  const fetchMoreMessages = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://missionplanner-api.onrender.com/messages-data');
      const messageString = response.data.m_StringValue;
      const newMessages = messageString.split('\n').filter(message => message.trim() !== '');

      setMessages(prevMessages => [...prevMessages, ...newMessages]);
      setHasMore(newMessages.length > 0);
    } catch (error) {
      console.error('Error fetching more messages:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (scrollingElement.current) {
      scrollingElement.current.addEventListener('scroll', handleScroll);
      return () => {
        scrollingElement.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, [hasMore]);

  return (
    <div className="vertical-scrolling-container" ref={scrollingElement}>
      <div className="status" style={{color:"white"}}>{status}</div>
      <div className="vertical-scrolling-message-box">
        <div className="vertical-scrolling-content">
          {messages.map((message, index) => (
            <pre key={index}style={{color:"white"}}>{message}</pre>
          ))}
          {loading && <div>Loading...</div>}
        </div>
      </div>
    </div>
  );
};

export default VerticalScrollingMessageBox;