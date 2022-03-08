import React from 'react'
import './CoinItem.scss'

const Coin = ({ coins }) => {
  return (
    <div className='coin'>
      <div>{coins.market_cap_rank}</div>
      <div className='coinImg'>
        <img src={coins.image} alt='' />
        <span className='symbol'>{coins.symbol}</span>
      </div>
      <div>${coins.current_price}</div>
      <div>{coins.price_change_percentage_24h.toFixed(2)}%</div>
      <div className='hidden-mobile'>
        ${coins.total_volume.toLocaleString()}
      </div>
      <div className='hidden-mobile'>${coins.market_cap.toLocaleString()}</div>
    </div>
  )
}

export default Coin
