import React, { useEffect, useState } from "react";
import "./Compare.css";

const Compare = () => {
  const [allCoins, setAllCoins] = useState([]);
  const [coin1, setCoin1] = useState(null);
  const [coin2, setCoin2] = useState(null);
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");

  useEffect(() => {
    const fetchCoins = async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&price_change_percentage=1y"
      );
      const data = await res.json();
      setAllCoins(data);
    };
    fetchCoins();
  }, []);

  useEffect(() => {
    setCoin1(allCoins.find((coin) => coin.id === selected1));
    setCoin2(allCoins.find((coin) => coin.id === selected2));
  }, [selected1, selected2, allCoins]);

  return (
    <div className="compare-container">
      <h2 className="compare-heading">Compare Coins</h2>

      <div className="coin-selectors">
        <select value={selected1} onChange={(e) => setSelected1(e.target.value)}>
          <option value="">Select Coin A</option>
          {allCoins.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name}
            </option>
          ))}
        </select>

        <select value={selected2} onChange={(e) => setSelected2(e.target.value)}>
          <option value="">Select Coin B</option>
          {allCoins.map((coin) => (
            <option key={coin.id} value={coin.id}>
              {coin.name}
            </option>
          ))}
        </select>
      </div>

      {coin1 && coin2 && (
        <div className="compare-grid">
          {[coin1, coin2].map((coin, i) => (
            <div key={i} className="compare-card">
              <img src={coin.image} alt={coin.name} />
              <h3>{coin.name}</h3>

              <div className="stat"><strong>Price:</strong> ${coin.current_price?.toLocaleString()}</div>
              <div className="stat"><strong>Market Cap:</strong> ${coin.market_cap?.toLocaleString()}</div>
              <div className="stat"><strong>24h Volume:</strong> ${coin.total_volume?.toLocaleString()}</div>
              <div className={`stat ${coin.price_change_percentage_24h >= 0 ? "price-up" : "price-down"}`}>
                <strong>Change (24h):</strong> {coin.price_change_percentage_24h?.toFixed(2)}%
              </div>
              <div className="stat"><strong>Rank:</strong> #{coin.market_cap_rank}</div>
              <div className="stat"><strong>Circulating Supply:</strong> {coin.circulating_supply?.toLocaleString()}</div>
              <div className="stat"><strong>Total Supply:</strong> {coin.total_supply ? coin.total_supply.toLocaleString() : "N/A"}</div>
              <div className="stat"><strong>ATH:</strong> ${coin.ath?.toLocaleString()}</div>
              <div className="stat"><strong>ATL:</strong> ${coin.atl?.toLocaleString()}</div>
              <div className={`stat ${coin.price_change_percentage_1y_in_currency >= 0 ? "price-up" : "price-down"}`}>
                <strong>1Y Change:</strong> {coin.price_change_percentage_1y_in_currency?.toFixed(2)}%
              </div>
              <div className="stat"><strong>ROI:</strong> {coin.roi ? `${coin.roi.percentage.toFixed(2)}%` : "N/A"}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Compare;
