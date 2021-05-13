import React from 'react';
import Navbar from './components/layout/Navbar';
import BreakingNews from './components/layout/BreakingNews';
import CategoryButtons from './components/layout/CategoryButtons';
import MainPage from './components/MainPage';
import Footer from './components/layout/Footer'
import './style.css';

document.body.style = 'background: #111518'

const App = () => {
  return (
    <>
      <Navbar />
      <MainPage />
      <Footer />
    </>
  );
};

export default App;
