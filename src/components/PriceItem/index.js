import React from 'react';
import './style.css';

export default function PriceItem() {
  return (
    <React.Fragment>
        <div className="col text-white">
            <div className="row">
                <div className="col">
                    <p className="dollarSymbol">$</p>
                </div>
                <div className="col">
                    <p className="priceBig">1</p>
                </div>
                <div className="col">
                    <p className="priceSmall">45</p>
                    <p className="priceText">/mo</p>
                </div>
            </div>
        </div>
    </React.Fragment>
    );
}