import React from 'react';
import config from '../../constants';
import './style.css';
import CountdownItem from '../CountdownItem';
import PropTypes from 'prop-types';

export default function Countdown(props) {
  return (
    <div className="row">
        <p className="col-0 triangleColor mobileStyling">&#9654;</p>
            <div className="col-8">
               <div className="row">
                    <CountdownItem text={config.DAYS} time={props.days} />
                    <CountdownItem text={config.HOURS} time={props.hours} />
                    <CountdownItem text={config.MINUTES} time={props.minutes} />
                    <CountdownItem text={config.SECONDS} time={props.seconds} />
               </div>
            </div>
        <p className="col-0 triangleColor">&#9664;</p>
    </div>
    );
}

Countdown.propTypes = {
    days: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    hours: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    minutes: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    seconds: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
}