import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Coin from "./Coin.js";
import Heading from "./Heading";
const apiurl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=50&page=1&sparkline=false";

function App() {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(apiurl)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handelChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredcoin = coin.filter((ele) =>
    ele.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1>Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handelChange}
          />
        </form>
      </div>
      <Heading />

      {filteredcoin.map((ele) => {
        return (
          <Coin
            key={ele.id}
            name={ele.name}
            image={ele.image}
            symbol={ele.symbol}
            marketcap={ele.market_cap}
            price={ele.current_price}
            priceChange={ele.price_change_percentage_24h}
            volume={ele.total_volume}
          />
        );
      })}
    </div>
  );
}

export default App;
