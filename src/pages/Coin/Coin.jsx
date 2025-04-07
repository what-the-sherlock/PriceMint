// import React, { useContext, useEffect, useState } from 'react'
// import './Coin.css'
// import {useParams} from 'react-router-dom'
// import { CoinContext } from '../../context/CoinContext';
// import LineChart from '../../components/LineChart/LineChart';

// const Coin = () => {

//   const {coinId} = useParams();
//   const [coinData, setCoinData] = useState();
//   const [historicalData, setHistoricalData] = useState()
//   const {currency} = useContext(CoinContext);

//   const fetchCoinData = async ()=>{
//     const options = {
//       method: 'GET',
//       headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-q6jo4MfmPcspTVW4CVPCx77g'}
//     };
    
//     fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
//       .then(res => res.json())
//       .then(res => setCoinData(res))
//       .catch(err => console.error(err));
//   }

//   const fetchHistoricalData = async ()=>{
//     const options = {
//       method: 'GET',
//       headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-q6jo4MfmPcspTVW4CVPCx77g'}
//     };
    
//     fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
//       .then(res => res.json())
//       .then(res => setHistoricalData(res))
//       .catch(err => console.error(err));
//   }

//   useEffect(()=>{
//     fetchCoinData();
//     fetchHistoricalData();
//   },[currency])

//   if(coinData && historicalData){
//     return (
//       <div className='coin'>
//         <div className='coin-name'>
//           <img src={coinData.image.large} alt='coin image' />
//           <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
//         </div>
//         <div className='coin-chart'>
//           <LineChart historicalData={historicalData}/>
//         </div>

//         <div className='coin-info'>
//           <ul>
//             <li>Crypto Market Rank</li>
//             <li>{coinData.market_cap_rank}</li>
//           </ul>
//           <ul>
//             <li>Current Price</li>
//             <li>{currency.symbol}{coinData.market_data.current_price[currency.name].toLocaleString()}</li>
//           </ul>
//           <ul>
//             <li>Market Cap</li>
//             <li>{currency.symbol}{coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
//           </ul>
//           <ul>
//             <li>24 hour high</li>
//             <li>{currency.symbol}{coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
//           </ul>
//           <ul>
//             <li>24 hour low</li>
//             <li>{currency.symbol}{coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
//           </ul>
//         </div>

//       </div>
//     )
//   }else{
//     return (
//       <div className='spinner'>
//         <div className='spin'></div>
//       </div>
//     )
//   }
// }

// export default Coin

import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext'
import LineChart from '../../components/LineChart/LineChart'

const Coin = () => {
  const { coinId } = useParams()
  const [coinData, setCoinData] = useState()
  const [historicalData, setHistoricalData] = useState()
  const [loading, setLoading] = useState(true)
  const [days, setDays] = useState(1)
  const { currency } = useContext(CoinContext)

  const timeRanges = [
    { label: "24h", value: 1 },
    { label: "1 Week", value: 7 },
    { label: "1 Month", value: 30 },
    { label: "3 Months", value: 90 },
    { label: "1 Year", value: 365 }
  ]

  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-q6jo4MfmPcspTVW4CVPCx77g'
      }
    }

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(res => res.json())
      .then(res => setCoinData(res))
      .catch(err => console.error(err))
  }

  const fetchHistoricalData = async () => {
    setLoading(true)
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-q6jo4MfmPcspTVW4CVPCx77g'
      }
    }

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=${days}&interval=daily`, options)
      .then(res => res.json())
      .then(res => {
        setHistoricalData(res)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchCoinData()
    fetchHistoricalData()
  }, [currency, days])

  if (coinData && historicalData) {
    return (
      <div className='coin'>
        <div className='coin-name'>
          <img src={coinData.image.large} alt='coin' />
          <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
        </div>

        <div className='chart-filters'>
          {timeRanges.map(range => (
            <button
              key={range.value}
              onClick={() => setDays(range.value)}
              className={`filter-btn ${days === range.value ? 'active' : ''}`}
            >
              {range.label}
            </button>
          ))}
        </div>

        <div className='coin-chart'>
          <LineChart historicalData={historicalData} loading={loading} />
        </div>

        <div className='coin-info'>
          <ul><li>Crypto Market Rank</li><li>{coinData.market_cap_rank}</li></ul>
          <ul><li>Current Price</li><li>{currency.symbol}{coinData.market_data.current_price[currency.name].toLocaleString()}</li></ul>
          <ul><li>Market Cap</li><li>{currency.symbol}{coinData.market_data.market_cap[currency.name].toLocaleString()}</li></ul>
          <ul><li>24 hour high</li><li>{currency.symbol}{coinData.market_data.high_24h[currency.name].toLocaleString()}</li></ul>
          <ul><li>24 hour low</li><li>{currency.symbol}{coinData.market_data.low_24h[currency.name].toLocaleString()}</li></ul>
        </div>
      </div>
    )
  } else {
    return (
      <div className='spinner'>
        <div className='spin'></div>
      </div>
    )
  }
}

export default Coin

