import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

export default function CountdownItem(props) {
  return (
    <div className="col">
      <p className="countdownNumbers">{props.time}</p>
      <p className="countdownText">{props.text}</p>
    </div>
    );
}

CountdownItem.propTypes = {
  time: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
  ]),
  text: PropTypes.string,
}