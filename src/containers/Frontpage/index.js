import React from 'react';
import './style.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PriceItem from '../../components/PriceItem';
import Advert from '../../components/Advert';
import config from '../../constants';

export default class Frontpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: config.INITIAL_TIME,
      clock: this.getClock(config.INITIAL_TIME),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((state, props) =>{
        let clock = this.getClock(state.time);
        return {
          time: state.time - 1,
          clock: clock,
        }
      })
    }, 1000);
  }

  getClock(time){
      let days = parseInt(time / config.DAYS_TO_SECONDS, 10);
      let hours = parseInt((time - days*config.DAYS_TO_SECONDS) / config.HOURS_TO_SECONDS, 10);
      let minutes = parseInt((time - hours*config.HOURS_TO_SECONDS - days*config.DAYS_TO_SECONDS) / config.MINUTES_TO_SECONDS, 10);
      let seconds = parseInt(time % config.MINUTES_TO_SECONDS, 10);
      let clock = {
        days: days < 10 ? `0${days}`: days,
        hours: hours < 10 ? `0${hours}`: hours,
        minutes: minutes < 10 ? `0${minutes}`: minutes,
        seconds: seconds < 10 ? `0${seconds}`: seconds,
      }
      return clock;
  }

  render() {
    const { clock } = this.state;
    return (
        <div className='frontpageBackground'>
            <div className='container'>
                <Navbar />
                {window.screen.width > 1000 ? (
                <div className="row">
                    <Advert 
                        days={clock.days}
                        hours={clock.hours}
                        minutes={clock.minutes}
                        seconds={clock.seconds}
                    />
                    <PriceItem />
                </div>) : 
                <React.Fragment>
                  <div className="row">
                    <PriceItem />
                  </div>
                  <div className="row">
                    <Advert 
                        days={clock.days}
                        hours={clock.hours}
                        minutes={clock.minutes}
                        seconds={clock.seconds}
                    />
                  </div>
                </React.Fragment>}
                <Footer />
            </div>
        </div>
    );
  }
}
