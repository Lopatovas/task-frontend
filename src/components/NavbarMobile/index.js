import React from 'react';
import './style.css';
import logo from '../../assets/logo.png'
import config from '../../constants';
import urls from '../../urls';

export default class NavbarMobile extends React.Component {
    enableDropdown(event) {
        let dropdownMenu = document.getElementById("links");
        event.preventDefault();
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        } else {
            dropdownMenu.style.display = "block";
        }
      }
  render() {
    return (
        <div className="topnav">
            <a href={urls.BASE} className="active">
                <img className="mobileImage"src={logo} alt="Hostinger logo" />
            </a>
            <div id="links">
                <a href={`${urls.BASE}${urls.WEB}`}>{config.WEB}</a>
                <a href={`${urls.BASE}${urls.CLOUD}`}>{config.CLOUD}<span className="saleStyle">  ON SALE</span></a>
                <a href={`${urls.BASE}${urls.VPS}`}>{config.VPS}</a>
                <a href={`${urls.BASE}${urls.DOMAIN}`}>{config.DOMAIN}</a>
                <a href={`${urls.BASE}${urls.BUILDER}`}>{config.BUILDER}</a>
            </div>
            <a href="/" className="navbar-toggler navbar-dark icon" onClick={this.enableDropdown}>
                <i className="navbar-toggler-icon"></i>
            </a>
      </div>
    );
  }
}