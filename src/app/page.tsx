import AppPromo from "@/Components/components/feature/AppPromo";
import SupportPage from "@/Components/components/feature/Support";
import Account from "@/Components/components/frontpage/Account";
import Banner from "@/Components/components/frontpage/Banner";
import Blogs from "@/Components/components/frontpage/Blogs";
import Notifications from "@/Components/components/frontpage/Notifications";
import OneAppOneBanking from "@/Components/components/frontpage/OneAppOneBanking";
import Organize from "@/Components/components/frontpage/Organize";
import Sponsor from "@/Components/components/frontpage/Sponsor";
import Testimonial from "@/Components/components/frontpage/Testimonial";
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
      <Testimonial />
      <AppPromo />
      <SupportPage />
      <Blogs />
    </div>
  );
};

export default Home;
