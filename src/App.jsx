import React from 'react';
import BreakingNews from './components/layout/BreakingNews';
import CategoryButtons from './components/layout/CategoryButtons';
import Navbar from './components/layout/Navbar';
import MainPage from './components/MainPage';

const App = () => {
  return (
    <>
      <Navbar />
      <BreakingNews />
      <CategoryButtons/>
      <MainPage />
    </>
  );
};

export default App;
