import React, { useState, useEffect } from 'react';
import './App.css';
import DevelopmentBanner from './components/DevelopmentBanner/DevelopmentBanner';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <DevelopmentBanner />
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
