// src/Technology.js
import React, { useEffect, useState } from 'react';
import './News.css';

const Technology = ({ selectedCategory }) => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const articlesPerPage = 5; // Change this value to set the number of articles per page

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=a40490e3c11f4cc7823f008156111db2')
            .then(response => response.json())
            .then(data => {
                if (data && data.articles) {
                    setArticles(data.articles);
                } else {
                    console.error('No articles found in the response:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching the news:', error);
            });
    }, []);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredArticles = articles.filter(article =>
        (article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article.author && article.author.toLowerCase().includes(searchQuery.toLowerCase())))
    );

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="news-container">
            <input
                type="text"
                placeholder="Search for articles..."
                value={searchQuery}
                onChange={handleSearch}
                className="search-input"
            />
            {currentArticles.length > 0 ? (
                currentArticles.map((article, index) => (
                    <div key={index} className="news-article">
                        <h2>{article.title}</h2>
                        <p>{article.author}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </div>
                ))
            ) : (
                <p>No articles available</p>
            )}
            <div className="pagination">
                {Array.from({ length: Math.ceil(filteredArticles.length / articlesPerPage) }, (_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)} className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Technology;
