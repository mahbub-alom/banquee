import Bank from "@/Components/components/compare/Bank";
import Banner from "@/Components/components/compare/Banner";
import Credit from "@/Components/components/compare/Credit";
import Extra from "@/Components/components/compare/Extra";
import Pricing from "@/Components/components/compare/Pricing";
import Questions from "@/Components/components/compare/Questions"
import React from "react";

const Compare = () => {
  return (
    <div>
      <Banner />
      <Pricing />
      <Credit />
      <Bank />
      <Extra />
      <Questions/>
    </div>
  );
};

export default Compare;
