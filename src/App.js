import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Coins from "./components/Coins/Coins";
import CoinPage from "./components/CoinPage/CoinPage";

function App() {
  const [coins, setCoins] = useState([]);

  const [coinNum, setCoinNum] = useState(10);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${coinNum}&page=1&sparkline=false`;

  useEffect(() => {
    axios
      .get(url)
      .then((coin) => {
        setCoins(coin.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, [url]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Coins coins={coins} coinNum={coinNum} setCoinNum={setCoinNum} />
          }
        />
        <Route path="/coin">
          <Route path=":id" element={<CoinPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
