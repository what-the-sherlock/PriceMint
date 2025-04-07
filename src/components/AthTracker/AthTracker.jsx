import React, { useState } from 'react';
import './AthTracker.css';

const AthTracker = ({ coinData, currency }) => {
  const [isHovered, setIsHovered] = useState(false);

  const currentPrice = coinData.market_data.current_price[currency.name];
  const ath = coinData.market_data.ath[currency.name];
  const atl = coinData.market_data.atl[currency.name];
  const athDate = new Date(coinData.market_data.ath_date[currency.name]).toLocaleDateString();
  const atlDate = new Date(coinData.market_data.atl_date[currency.name]).toLocaleDateString();
  const percentageFromAth = ((currentPrice / ath) * 100).toFixed(2);
  const percentageBelow = (100 - percentageFromAth).toFixed(2);

  return (
    <div className='ath-tracker'>
      <h3>ATH Performance Tracker</h3>

      <div
        className="ath-bar-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="ath-bar-fill"
          style={{ width: `${Math.min(percentageFromAth, 100)}%` }}
        />
        {isHovered && (
          <div className="ath-tooltip">
            {percentageFromAth}% of ATH<br />
            Current: {currency.symbol}{currentPrice.toLocaleString()}
          </div>
        )}
      </div>

      <div className='ath-info'>
        <p><b>Current Price:</b> {currency.symbol}{currentPrice.toLocaleString()}</p>
        <p><b>All Time High:</b> {currency.symbol}{ath.toLocaleString()} on {athDate}</p>
        <p><b>All Time Low:</b> {currency.symbol}{atl.toLocaleString()} on {atlDate}</p>
        <p><b>% Below ATH:</b> {percentageBelow}%</p>
      </div>
    </div>
  );
};

export default AthTracker;
