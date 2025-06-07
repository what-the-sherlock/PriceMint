import React from "react";
import "./Insights.css";

const sampleArticles = [
  {
    title: "Binance partners Worldpay to integrate two digital wallets for crypto purchases",
    source: "Yahoo Finance",
    publishedAt: "April 8, 2025",
    description: "Binance, cryptocurrency exchange, has announced the integration of two digital wallets, Apple Pay and Google Pay, into its fiat onramp ecosystem, in partnership with Worldpay.",
    url: "https://finance.yahoo.com/news/binance-partners-worldpay-integrate-two-101202937.html",
    urlToImage: "https://s.yimg.com/ny/api/res/1.2/ZShkaahKFG9VRDK89Wd9Rg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MA--/https://media.zenfs.com/en/electronic_payments_938/bae998db0dbf9757f502f0828b7807c9",
  },
  {
    title: "Is Dogecoin a Buy Right Now?",
    source: "Yahoo Finance",
    publishedAt: "April 8, 2025",
    description: "The capital markets have endured quite a bit of turbulence during the past couple of months. Through the market close on April 4, the Dow Jones Industrial Average, S&P 500, and Nasdaq Composite have declined by 10%, 14%, and 19%, respectively, so far this year. The primary culprits are rooted in emotional reactions to new tariff policies and how they could affect the broader macroeconomy.",
    url: "https://finance.yahoo.com/news/dogecoin-buy-now-2-words-100000579.html",
    urlToImage: "https://s.yimg.com/ny/api/res/1.2/zxr1OyZh0UqeXyOJCtnFiQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU4OA--/https://media.zenfs.com/en/motleyfool.com/7e2f422b7c076fdb421b335ccb754e81",
  },
  {
    title: "Black Monday was a disaster. How long did it take to recover after previous crypto market crashes?",
    source: "Crypto.news",
    publishedAt: "April 8, 2025",
    description: "Stock and crypto markets crashed on Apr. 7, 2025. Media dubbed this day a Black Monday, similar to Black Thursday of 2020, Black Monday of 1987, and other “black” dates of the strongest market crashes. What does history teach us? How far are we from recovery?",
    url: "https://crypto.news/black-monday-how-long-recover-crypto-market-crashes/",
    urlToImage: "https://crypto.news/app/uploads/2024/12/crypto-news-BlackRock-Bitcoin-option03-1380x820.webp",
  },
  {
    title: "XRP, Dogecoin Surge 10% as Crypto Markets Stage Relief Rally",
    source: "Yahoo Finance",
    publishedAt: "April 8, 2025",
    description: "Crypto market cap has pulled back to levels seen in early November last year, when Donald Trump's victory triggered a rally that propelled the total value through a level that had been seen as offering resistance to further gains.",
    url: "https://finance.yahoo.com/news/xrp-dogecoin-surge-10-crypto-071904014.html",
    urlToImage: "https://s.yimg.com/ny/api/res/1.2/3E_8WKd3j8LVL5ZDUmEjtQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYzNw--/https://media.zenfs.com/en/coindesk_75/7bdb3bf2bab3f06287028644364fb120",
  },
  {
    title: "Bitcoin poised for surge as China pledges response to Trump’s 50% tariff move",
    source: "Crypto news",
    publishedAt: "April 8, 2025",
    description: "With China threatening strong retaliation against Trump’s tariff demands, Bitcoin might be primed for a breakout, following its history of thriving amid geopolitical turmoil.",
    url: "https://crypto.news/bitcoin-poised-for-surge-as-china-pledges-response-to-trumps-50-tariff-move/",
    urlToImage: "https://crypto.news/app/uploads/2024/01/crypto-news-Xi-Jingping-China-Metaverse04.webp",
  },
  {
    title: "Is Bitcoin About to Go Parabolic?",
    source: "Yahoo Finance",
    publishedAt: "April 8, 2025",
    description: "For many crypto investors, it might seem impossible that Bitcoin (CRYPTO: BTC) could come roaring back to life and skyrocket higher in 2025. After all, Bitcoin is down almost 30% from an all-time high of $109,000 in January, and the intensifying global trade war threatens to cut any nascent crypto rally short.",
    url: "https://finance.yahoo.com/news/bitcoin-parabolic-093000011.html",
    urlToImage: "https://s.yimg.com/ny/api/res/1.2/1oyVdUFm_S2HlVzInBl30Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYyNA--/https://media.zenfs.com/en/motleyfool.com/7cf079f037605c59dff93344d9b0fa05",
  },
  {
    title: "Over 50% of crypto holders in Singapore now use it for payments: Triple-A",
    source: "Yahoo Finance",
    publishedAt: "April 8, 2025",
    description: "More than half of Singapore holders are using digital assets for payments as crypto ownership climbs to 26%, survey reveals.",
    url: "https://crypto.news/over-50-of-crypto-holders-in-singapore-now-use-it-for-payments-triple-a/",
    urlToImage: "https://crypto.news/app/uploads/2024/04/crypto-news-Could-Singapore-emerge-as-the-next-spot-BTC-ETF-hotspot-option04.webp",
  },
  {
    title: "Uniswap, Coinbase, and NYSE execs to join SEC roundtable on crypto trading regulations",
    source: "Yahoo Finance",
    publishedAt: "April 8, 2025",
    description: "Executives from multiple US crypto and finance firms are set to join the U.S. Securities and Exchange Commission’s next roundtable to discuss crypto trading regulations.",
    url: "https://crypto.news/uniswap-coinbase-and-nyse-execs-to-join-sec-roundtable-on-crypto-trading-regulations/",
    urlToImage: "https://crypto.news/app/uploads/2025/02/crypto-news-crypto-exchange-option03-1380x820.webp",
  },
  {
    title: "Tesla's Deliveries Plummet: Should You Buy, Hold, or Sell Now?",
    source: "Yahoo Finance",
    publishedAt: "April 8, 2025",
    description: "On April 2, Tesla (NASDAQ: TSLA) released its quarterly vehicle delivery report for the first quarter of 2025. Global electric vehicle (EV) deliveries dropped 13% year over year to 336,681, falling more than 53,000 short of the analyst expectations of 390,000 vehicle deliveries (based on Bloomberg data). It even widely missed the consensus estimate sent by Tesla's investor relations team to some analysts of 377,590 deliveries.",
    url: "https://finance.yahoo.com/news/teslas-deliveries-plummet-buy-hold-075500608.html",
    urlToImage: "https://s.yimg.com/ny/api/res/1.2/NB08bVsiEJF8G2IXOleB4A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MA--/https://media.zenfs.com/en/motleyfool.com/c4a506eca9cefec51fdf1f1903965caf",
  },
  {
    title: "SEC revisits crypto rules, tariffs cause market downturn, Circle IPO uncertain | Weekly Recap",
    source: "Yahoo Finance",
    publishedAt: "April 6, 2025",
    description: "Today’s edition of the weekly recap covers multiple announcements from the U.S. Securities and Exchange Commission (SEC), Circle’s initial public offering and the fallout of President Trump’s tariffs.",
    url: "https://crypto.news/sec-rules-tariffs-circle-ipo-uncertain-weekly-recap/",
    urlToImage: "https://crypto.news/app/uploads/2024/08/crypto-news-ONLY-Weekly-Recap-option07-1380x820.webp",
  },
  {
    title: "Got $2,000? These 2 Cryptocurrencies Could Crush Bitcoin's Returns in 2026",
    source: "Yahoo Finance",
    publishedAt: "April 8, 2025",
    description: "Bitcoin (CRYPTO: BTC) is the king of cryptocurrencies, but that does not guarantee it will outperform other crypto assets, especially not in a relatively short time, like a year and a half or so. As smart a purchase as it is, it simply doesn't have that many catalysts that will drive major growth immediately.",
    url: "https://finance.yahoo.com/news/got-2-000-2-cryptocurrencies-100200469.html",
    urlToImage: "https://s.yimg.com/ny/api/res/1.2/1oyVdUFm_S2HlVzInBl30Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYyNA--/https://media.zenfs.com/en/motleyfool.com/7cf079f037605c59dff93344d9b0fa05",
  },
  {
    title: "Stablecoin exchange balances hit 3-month low",
    source: "Crypto news",
    publishedAt: "April 7, 2025",
    description: "Stablecoin balances, a key figure for investor sentiment, have dropped to their lowest level in months, as Bitcoin plunged to its lowest point this year.",
    url: "https://crypto.news/stablecoin-exchange-balances-hit-3-month-low/",
    urlToImage: "https://crypto.news/app/uploads/2024/09/crypto-news-Stablecoins-option06-1380x820.webp",
  },


];

const Insights = () => {
  return (
    <div className="insights-container">
      <h2 className="insights-heading">Insights</h2>
      <div className="crypto-grid">
        {sampleArticles.map((article, index) => (
          <div key={index} className="crypto-card">
            
            <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="crypto-title"
              >
                <img src={article.urlToImage} alt={article.title} className="crypto-image" />
              </a>
            <div className="crypto-content">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="crypto-title"
              >
                {article.title}
              </a>
              <p className="crypto-meta">
                {article.source} • {new Date(article.publishedAt).toLocaleDateString()}
              </p>
              <p className="crypto-description">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
