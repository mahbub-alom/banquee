import Account from "@/Components/components/frontpage/Account";
import Banner from "@/Components/components/frontpage/Banner";
import Notifications from "@/Components/components/frontpage/Notifications";
import OneAppOneBanking from "@/Components/components/frontpage/OneAppOneBanking";
import Organize from "@/Components/components/frontpage/Organize";
import Sponsor from "@/Components/components/frontpage/Sponsor";
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
      <Sponsor />
      <Account />
    </div>
  );
};

export default Home;
