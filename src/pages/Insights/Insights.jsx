import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Insights.css";

const Insights = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const API_KEY = "7e962bada75743d1b5588d3407ba669f";
  const API_URL = (pageNum) =>
    `https://newsapi.org/v2/everything?q=crypto&language=en&sortBy=publishedAt&pageSize=10&page=${pageNum}&apiKey=${API_KEY}`;

  const fetchNews = async (pageNum) => {
    setLoading(true);
    try {
      const res = await fetch(API_URL(pageNum));
      const data = await res.json();

      if (res.ok && Array.isArray(data.articles)) {
        setArticles((prev) => [...prev, ...data.articles]);
        setHasMore(data.articles.length > 0);
      } else {
        console.error("Unexpected API response", data);
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(page);
  }, [page]);

  const lastArticleRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="insights-container">
      <h2 className="insights-heading">Insights</h2>
      <div className="crypto-grid">
        {Array.isArray(articles) &&
          articles.map((article, index) => {
            const isLast = index === articles.length - 1;
            return (
              <div
                key={index}
                className="crypto-card"
                ref={isLast ? lastArticleRef : null}
              >
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="crypto-image"
                  />
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
                    {article.source?.name} •{" "}
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </p>
                  <p className="crypto-description">{article.description}</p>
                </div>
              </div>
            );
          })}
      </div>
      {loading && <div className="loading-message">Loading more news...</div>}
      {!hasMore && <div className="loading-message">No more news available.</div>}
    </div>
  );
};

export default Insights;
