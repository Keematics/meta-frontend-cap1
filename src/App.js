import React from 'react';
import {Routes, Route} from 'react-router-dom'


import './App.css';
import Home from './components/Home';
import About from './components/About';
import BookingPage from './components/BookingPage';
import Order from './components/Order';
import Login from './components/Login';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    {/* <Header /> */}
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/booking' element={<BookingPage />} />
      <Route path='/order' element={<Order />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
