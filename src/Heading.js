import React from "react";
import "./Coin.css";
const Heading = () => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <h1>Name</h1>
          <p className="coin-symbol">symbol</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Price(₹)</p>
          <p className="coin-volume">Volume</p>
          <p className="coin-per ">24h</p>
          <p className="coin-marketcap">Market Cap</p>
        </div>
      </div>
    </div>
  );
};
export default Heading;
