import React from 'react';
import config from '../../constants';
import urls from '../../urls';
import './style.css';
import Countdown from '../Countdown';
import PropTypes from 'prop-types';

export default function Advert(props) {
    function handleStartedClick(){
        window.location.href = urls.BASE;
    }
  return (
    <div className="col text-white mobileCenter">
        <p className="textBig topPadding">{config.OFFER}</p>
        <p className="textBig"><span className="discountText">{config.PERCENTAGE}</span> {config.SERVICE}</p>
        <Countdown
            days={props.days}
            hours={props.hours}
            minutes={props.minutes}
            seconds={props.seconds}
        />
        <button className="btn buttonStyling" onClick={handleStartedClick}>{config.BUTTON_TEXT}</button>
    </div>
    );
}

Advert.propTypes = {
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