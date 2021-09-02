import React, { useRef, createContext } from 'react';
import PropTypes from 'prop-types';
import socketio from 'socket.io-client';

export const SocketContext = createContext(null);

const SocketProvider = ({ children }) => {
  const socketUrl = process.env.REACT_APP_SOCKET_URL;
  const socket = useRef(null);

  if (!socket.current) {
    socket.current = socketio.connect(socketUrl);
  }

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

SocketProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default SocketProvider;
