import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/layout/Navbar';
import MainPage from './components/MainPage';
import Footer from './components/layout/Footer';
import './style.css';

document.body.style = 'background: #111518';

const App = () => {
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar />
      <MainPage />
      <h1>Hi {message}</h1>
      <button onClick={()=>
    dispatch({ type: 'CHANGE_GREETING', payload: 'Uranus'})  
    }>Say hi to your anus</button>
      <Footer />
    </>
  );
};

export default App;
