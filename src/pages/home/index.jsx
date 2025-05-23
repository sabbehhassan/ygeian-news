import React from "react";
import Hero from "../../components/hero";
import CardItems from "../../components/card-items";
import { Data } from "../../constents";

const Home = () => {
  return (
    <>
      <Hero />
      <CardItems data={Data} />
      {/* <h1>Popular cards</h1>
      <CardItems data={Data} /> */}
      {/* add more home content here */}
    </>
  );
};

export default Home;
