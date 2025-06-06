import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";  // <--- dono import karo
import { fetchNews } from "../../features/news/news.slice";

import Hero from "../../components/hero";
import CardItems from "../../components/card-items";
import Speciality from "../../components/speciality";

const Home = () => {
  const dispatch = useDispatch();
  const { items: news, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  console.log("Fetched News:", news);

  return (
    <>
      <Hero />
      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : error ? (
        <div className="text-red-500 text-center py-10">{error}</div>
      ) : (
        <CardItems />
      )}
      <Speciality />
    </>
  );
};

export default Home;
