import React from 'react';
import Bottom from './components/Bottom';
import Category from './components/Category';
import Foods from './components/Foods';
import Footer from './components/Footer';
import HeadlineCards from './components/HeadlineCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


function App() {
  return (
    <div >
      
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Foods/>
      <Category/>
      <Bottom/> 
      <Footer/>
      
    </div>
  );
}

export default App;
