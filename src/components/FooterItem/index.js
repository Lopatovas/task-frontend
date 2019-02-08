import React from 'react';
import PropTypes from 'prop-types';

export default function FooterItem(props) {
  return (
    window.screen.width > 1000 ? (
    <div className="col-sm">
      <p className="text-white"><span className="text-success">&#10004;</span>{props.text}</p>
    </div>) : (
      <p className="text-white"><span className="text-success">&#10004;</span>{props.text}</p>
    )
    );
}

FooterItem.propTypes = {
  text: PropTypes.string,
}