import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import ReactNipple from 'react-nipple';
import 'react-nipple/lib/styles.css';

const Nipple = ({ width, height, options, onChange }) => {
  const onEvent = useCallback((_evt, data) => {
    if (onChange) {
      onChange({ degree: data?.angle?.degree, distance: data?.distance });
    }
  }, []);

  return (
    <>
      <ReactNipple
        className="joystic"
        options={options}
        style={{ width, height }}
        onStart={onEvent}
        onEnd={onEvent}
        onMove={onEvent}
        onDir={onEvent}
        onPlain={onEvent}
        onShown={onEvent}
        onHidden={onEvent}
        onPressure={onEvent}
      />
    </>
  );
};

Nipple.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object]),
  onChange: PropTypes.func,
};

Nipple.defaultProps = {
  width: '100%',
  height: '100%',
  options: null,
  onChange: null,
};

export default Nipple;
