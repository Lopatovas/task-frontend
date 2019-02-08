import React from 'react';
import FooterItem from '../FooterItem';
import config from '../../constants';
import './style.css';

export default function Footer() {
  return (
    <footer className={window.screen.width > 1000 ? "row bottomPaddings" : "paddingTopFooter bottomPadding text-center"}>
        <FooterItem text={config.GUARANTEE} />
        <FooterItem text={config.PERFORMANCE} />
        <FooterItem text={config.SUPPORT} />
        <FooterItem text={config.MONEY_BACK} />
    </footer>
    );
}