


import { useEffect, useState } from "react";
import PropTypes from 'prop-types'; // Add PropTypes import
import NewsItem from "./NewsItem";

const NewsBoard = ({ category, searchTerm }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;

        // Add search functionality if searchTerm is not empty
        if (searchTerm) {
          url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${process.env.REACT_APP_API_KEY}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.status === "error") {
          throw new Error(`API error: ${data.message}`);
        }

        setArticles(data.articles || []);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error("Error fetching news:", error.message);
        setArticles([]);
        setLoading(false);
        setError("Error fetching news. Please try again later.");
      }
    };

    fetchData();
  }, [category, searchTerm]); // Include searchTerm as a dependency

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {articles.map((news, index) => (
        <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
    </div>
  );
};

NewsBoard.propTypes = {
  category: PropTypes.string.isRequired,
  searchTerm: PropTypes.string,
};

export default NewsBoard;
