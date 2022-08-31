import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import HeadlineCards from "./components/HeadlineCards/HeadlineCards";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
    </div>
  );
}

export default App;
