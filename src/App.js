import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import HeadlineCards from "./components/HeadlineCards/HeadlineCards";
import Food from './components/Food/Food';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
    </div>
  );
}

export default App;
