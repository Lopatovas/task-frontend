import React from 'react';
import PropTypes from 'prop-types';

export default function FooterItem(props) {
  return (
    <div className="col-sm">
      <p className="text-white"><span className="text-success">&#10004;</span>{props.text}</p>
    </div>
    );
}

FooterItem.propTypes = {
  text: PropTypes.string,
}