import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import About from './components/About'
import Home from './components/Home'


const App = () => {

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );

}

export default App;
