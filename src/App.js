// src/App.js
import React, { useState } from 'react';
import './App.css';
import News from './News';
import Movies from './Movies';
import AppBar from './AppBar';
import Technology from './Technology';
import Footer from './Footer'; // Import Footer

function App() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    return (
        <div className="App">
            <header className="App-header">
                <h1>KMR NEWS</h1>
                
                <img src="https://static.vecteezy.com/system/resources/previews/020/067/904/original/kmr-abstract-technology-circle-setting-logo-design-on-black-background-kmr-creative-initials-letter-logo-vector.jpg" alt="Logo" className="header-logo" />
            </header>
            <AppBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            {selectedCategory === 'movies' ? (
                <Movies selectedCategory={selectedCategory} />
            ) : selectedCategory === 'technology' ? (
                <Technology selectedCategory={selectedCategory} />
            ) : (
                <News selectedCategory={selectedCategory} />
            )}
            <Footer /> {/* Add Footer */}
        </div>
    );
}

export default App;
