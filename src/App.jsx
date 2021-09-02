import React, { useState, useEffect } from 'react';
import { hostNameApi } from 'apis';
import WebSocketProvider from 'components/SocketProvider';
import Joystic from './components/Joystic';
import './App.css';

const App = () => {
  const [hostName, setHostName] = useState('');

  useEffect(() => {
    hostNameApi()
      .then(response => {
        setHostName(response.data);
      })
      .catch(() => {
        setHostName('Failed to get host name');
      });
  }, []);

  return (
    <div className="container">
      <h1 className="host-name">{hostName}</h1>

      <WebSocketProvider>
        <Joystic />
      </WebSocketProvider>
    </div>
  );
};

export default App;
