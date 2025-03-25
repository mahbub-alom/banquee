import Banner from "@/Components/components/frontpage/Banner";
import Notifications from "@/Components/components/frontpage/Notifications";
import OneAppOneBanking from "@/Components/components/frontpage/OneAppOneBanking";
import Organize from "@/Components/components/frontpage/Organize";
import Transactions from "@/Components/components/frontpage/Transactions";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <OneAppOneBanking />
      <Transactions />
      <Organize />
      <Notifications />
    </div>
  );
};

export default Home;
