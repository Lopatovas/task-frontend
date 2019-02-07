import React from 'react';
import './style.css';
import NavLink from '../NavbarLink';
import logo from '../../assets/logo.png'
import config from '../../constants';
import urls from '../../urls';

export default class Navbar extends React.Component {
  render() {
    return (
        <div className="customNavbar">
            <nav className="nav">
                <a href={urls.BASE}>
                    <img className="customImage" src={logo} alt="Hostinger logo" />
                </a>
                <ul className="nav ml-auto">
                    <NavLink name={config.WEB} urlName={`${urls.BASE}${urls.WEB}`} />
                    <NavLink name={config.CLOUD} urlName={`${urls.BASE}${urls.CLOUD}`} onSale={true} />
                    <NavLink name={config.VPS} urlName={`${urls.BASE}${urls.VPS}`} />
                    <NavLink name={config.DOMAIN} urlName={`${urls.BASE}${urls.DOMAIN}`} />
                    <NavLink name={config.BUILDER} urlName={`${urls.BASE}${urls.BUILDER}`} />
                </ul>
            </nav>
        </div>
    );
  }
}