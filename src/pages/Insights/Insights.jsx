import React, { useState, useEffect } from "react";
import "./Insights.css";

const Insights = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "7e962bada75743d1b5588d3407ba669f";
  const API_URL = `https://newsapi.org/v2/everything?q=crypto&language=en&sortBy=publishedAt&pageSize=20&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
    const interval = setInterval(fetchNews, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="loading-message">Loading crypto news...</div>;

  return (
    <div className="insights-container">
      <h2 className="insights-heading">Insights</h2>
      <div className="crypto-grid">
        {articles.map((article, index) => (
          <div key={index} className="crypto-card">
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className="crypto-image" />
            )}
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
                {article.source.name} • {new Date(article.publishedAt).toLocaleDateString()}
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
