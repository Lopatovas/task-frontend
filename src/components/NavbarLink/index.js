import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

export default function NavbarLink(props) {
  return (props.onSale ? 
    (<li className="nav-item">
      <a className="nav-link text-white" href={props.urlName}>
      <p className="saleStyle">ON SALE</p>
        {props.name}
      </a>
    </li>) : 
    (<li className="nav-item itemMargin">
      <a className="nav-link text-white" href={props.urlName}>
        {props.name}
      </a>
    </li>)
    );
}

NavbarLink.propTypes = {
  urlName: PropTypes.string,
  name: PropTypes.string,
}