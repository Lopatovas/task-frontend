import React from 'react';
import FooterItem from '../FooterItem';
import config from '../../constants';
import './style.css';

export default function Footer() {
  return (
    <footer className="row bottomPaddings">
        <FooterItem text={config.GUARANTEE} />
        <FooterItem text={config.PERFORMANCE} />
        <FooterItem text={config.SUPPORT} />
        <FooterItem text={config.MONEY_BACK} />
    </footer>
    );
}