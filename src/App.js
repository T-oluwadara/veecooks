import React from "react";
import Hero from "./componenets/Hero";
import Navbar from "./componenets/Navbar";
import Cards from "./componenets/Cards";
import Foods from "./componenets/Food";
import Category from "./componenets/Category";

function App() {
  return (
    <div className="font-openSans bg-dimWhite">
      <Navbar />
      <Hero />
      <Cards />
      <Foods />
      <Category />
    </div>
  );
}

export default App;
