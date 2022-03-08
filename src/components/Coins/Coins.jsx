import React from 'react'
import { Link } from 'react-router-dom'
import ShowMore from '../AddMore/ShowMore'
import CoinPage from '../CoinPage/CoinPage'
import CoinItem from './CoinItem/CoinItem'
import './Coins.scss'

const Coins = ({ coins, coinNum, setCoinNum }) => {
  return (
    <div className='coins'>
      <div className='container'>
        <div className='coinsTop'>
          <span>#</span>
          <span>coins</span>
          <span>price</span>
          <span>24h</span>
          <span className='hidden-mobile'>volume</span>
          <span className='hidden-mobile'>mkt cap</span>
        </div>
        <div className='coinsItems'>
          {coins.map(coin => (
            <Link to={`/coin/${coin.id}`} element={<CoinPage />}>
              <CoinItem coins={coin} key={coin.id} />
            </Link>
          ))}
        </div>
        <ShowMore coinNum={coinNum} setCoinNum={setCoinNum} />
      </div>
    </div>
  )
}

export default Coins
