// src/AppBar.js
import React from 'react';
import './AppBar.css';

const AppBar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <div className="app-bar">
            <button
                className={`category-button ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
            >
                All
            </button>
            <button
                className={`category-button ${selectedCategory === 'sports' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('sports')}
            >
                Sports
            </button>
            <button
                className={`category-button ${selectedCategory === 'movies' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('movies')}
            >
                Movies
            </button>
            <button
                className={`category-button ${selectedCategory === 'technology' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('technology')}
            >
                Technology
            </button>
        </div>
    );
};

export default AppBar;
