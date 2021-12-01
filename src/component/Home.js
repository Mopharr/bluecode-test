import React from "react";
import Nav from "./Nav";
import Cards from "./Cards";
import "../style/home.css";
import Header from "./Header";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <>
        <Header />
        <Cards />
      </>
    </div>
  );
};

export default Home;
