import React from "react";
import Hero from "../../components/hero";
import CardItems from "../../components/card-items";
import { Data } from "../../constents";
import Speciality from "../../components/speciality";
import CheckInbox from "../../pages/checkInbox";
import ResetPass from "../../pages/resetPassword";
import  ResetSuccess from "../../pages/resetSucces"

const Home = () => {
  return (
    <>
      <Hero />
      <CardItems data={Data} />
      <Speciality/>
      <CheckInbox />
      <ResetPass />
      <ResetSuccess />
      {/* <h1>Popular cards</h1>
      <CardItems data={Data} /> */}
      {/* add more home content here */}
    </>
  );
};

export default Home;
