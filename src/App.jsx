import React from 'react';
import Navbar from './components/layout/Navbar';
import BreakingNews from './components/layout/BreakingNews';
import CategoryButtons from './components/layout/CategoryButtons';
import MainPage from './components/MainPage';
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <BreakingNews />
      <CategoryButtons/>
      <MainPage />
      <Footer />
    </>
  );
};

export default App;
