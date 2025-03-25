import Banner from "@/Components/components/frontpage/Banner";
import OneAppOneBanking from "@/Components/components/frontpage/OneAppOneBanking";
import Transactions from "@/Components/components/frontpage/Transactions";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <OneAppOneBanking />
      <Transactions />
    </div>
  );
};

export default Home;
