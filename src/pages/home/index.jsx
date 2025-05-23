import React from "react";
import Hero from "../../components/hero";
import CardItems from "../../components/card-items";
import { Data } from "../../constents";
import Speciality from "../../components/speciality";

const Home = () => {
  return (
    <>
      <Hero />
      <CardItems data={Data} />
      <Speciality/>
      {/* <h1>Popular cards</h1>
      <CardItems data={Data} /> */}
      {/* add more home content here */}
    </>
  );
};

export default Home;
