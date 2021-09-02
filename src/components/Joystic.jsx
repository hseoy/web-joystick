import React, { useState, useEffect, useContext } from 'react';
import { SocketContext } from './SocketProvider';
import Nipple from './Nipple';

const Joystic = () => {
  const [nippleData, setNippleData] = useState([]);
  const socket = useContext(SocketContext);

  const onChange = ({ degree, distance }) => {
    setNippleData([parseInt(degree, 10), parseInt(distance, 10)]);
  };

  useEffect(() => {
    const [degree, distance] = nippleData;
    if (degree && distance) {
      socket.current.emit('joystic', {
        degree,
        distance,
      });
    } else {
      socket.current.emit('joystic', {
        degree: 0,
        distance: 0,
      });
    }
  }, [nippleData]);

  return (
    <div className="container">
      <Nipple
        onChange={onChange}
        width="250px"
        height="250px"
        options={{
          mode: 'static',
          position: { top: '50%', left: '50%' },
          color: 'black',
        }}
      />
    </div>
  );
};

export default Joystic;
