import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Insights.css";

const Insights = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const observerRef = useRef(null);

  const API_KEY = "7e962bada75743d1b5588d3407ba669f";

  const fetchNews = async (pageNum = 1) => {
    setLoading(true);
    try {
      const res = await fetch(`https://newsapi.org/v2/everything?q=crypto&language=en&sortBy=publishedAt&pageSize=10&page=${pageNum}&apiKey=${API_KEY}`);
      const data = await res.json();
      if (data.articles) {
        setArticles(prev => [...prev, ...data.articles]);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(page);
  }, [page]);

  // Infinite scroll observer
  const lastArticleRef = useCallback(node => {
    if (loading) return;
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prev => prev + 1);
      }
    });
    if (node) observerRef.current.observe(node);
  }, [loading]);

  return (
    <div className="insights-container">
      <h2 className="insights-heading">Insights</h2>
      <div className="crypto-grid">
        {articles.map((article, index) => {
          const isLast = index === articles.length - 1;
          return (
            <div
              key={index}
              ref={isLast ? lastArticleRef : null}
              className="crypto-card"
            >
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="crypto-image" />
              )}
              <div className="crypto-content">
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="crypto-title">
                  {article.title}
                </a>
                <p className="crypto-meta">
                  {article.source.name} • {new Date(article.publishedAt).toLocaleDateString()}
                </p>
                <p className="crypto-description">{article.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      {loading && <div className="loader">Loading more news...</div>}
    </div>
  );
};

export default Insights;
