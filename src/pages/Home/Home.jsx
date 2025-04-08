import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import search_icon from '../../assets/search.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext)
  const [displayCoin, setDisplayCoin] = useState([])
  const [input, setInput] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const coinsPerPage = 10

  const inputHandler = (event) => {
    setInput(event.target.value)
    if (event.target.value === '') {
      setDisplayCoin(allCoin)
    }
  }

  const searchHandler = async (event) => {
    event.preventDefault()
    const coins = await allCoin.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    )
    setCurrentPage(1)
    setDisplayCoin(coins)
  }

  useEffect(() => {
    setDisplayCoin(allCoin)
  }, [allCoin])

  // Pagination logic
  const indexOfLastCoin = currentPage * coinsPerPage
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage
  const currentCoins = displayCoin.slice(indexOfFirstCoin, indexOfLastCoin)
  const totalPages = Math.ceil(displayCoin.length / coinsPerPage)

  return (
    <div className='home'>
      <div className='hero'>
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to the World's largest crypto currency Marketplace. Sign up
          to explore more about cryptos
        </p>
        <form onSubmit={searchHandler}>
          <input
            onChange={inputHandler}
            list='coinlist'
            type='text'
            value={input}
            placeholder='Search crypto...'
            required
          />
          <datalist id='coinlist'>
            {allCoin.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>
          <button type='submit'>
            <img src={search_icon} alt='Search icon' className='search' />
          </button>
        </form>
      </div>

      <div className='crypto-table'>
        <div className='table-layout'>
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: 'center' }}>24H Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>

        {currentCoins.map((item, index) => (
          <Link to={`/coin/${item.id}`} className='table-layout' key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt='Bitcoin' />
              <p>{item.name + ' - ' + item.symbol}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={
                item.price_change_percentage_24h > 0 ? 'green' : 'red'
              }
            >
              {item.price_change_percentage_24h}
            </p>
            <p className='market-cap'>
              {currency.symbol} {item.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className='pagination'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? 'active-page' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Home
