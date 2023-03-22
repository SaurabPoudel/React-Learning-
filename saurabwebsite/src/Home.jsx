import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";

const Home = () => {
  // const data = {
  //   name: "Saurab Poudel",
  //   image: "./images/hero.svg",
  // };
  const { updateHomePage } = useGlobalContext();
  useEffect(() => {
    updateHomePage();
  }, []);

  return <HeroSection />;
};

export default Home;
