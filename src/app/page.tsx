import Banner from "@/Components/Banner";
import Cards from "@/Components/Reusable/Cards";
import AllinOneBank from "@/Components/AllinOneBank";
import ThreeCards from "@/Components/ThreeCards";
import Pricing from "@/Components/Pricing";
import AppPromo from "@/Components/AppPromo";
import Support from "@/Components/Support";

export default function Home() {
  return (
    <div>
      <Banner />
      <Cards
        title="Transactions"
        heading1st="Send & receive"
        headinglst="money instantly"
        details="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint..."
        point1="Malesuada Ipsum"
        point2="Vestibulum"
        point3="Parturient Lorem"
        appImage="/image/app1.png" // ✅ Use relative path instead of import
      />
      <Cards
        title="Cards"
        heading1st="Manage"
        headinglst="your cards"
        details="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint..."
        point1="Malesuada Ipsum"
        point2="Vestibulum"
        point3="Parturient Lorem"
        appImage="/image/app2.png"
      />
      <Cards
        title="Advanced Statistics"
        heading1st="Keep control"
        headinglst="over your money"
        details="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint..."
        point1="Malesuada Ipsum"
        point2="Vestibulum"
        point3="Parturient Lorem"
        appImage="/image/app3.png"
      />
      <Cards
        title="Saving Accounts"
        heading1st="Lorem et"
        headinglst="ipsum dolor"
        details="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint..."
        point1="Malesuada Ipsum"
        point2="Vestibulum"
        point3="Parturient Lorem"
        appImage="/image/app4.png"
      />
      <AllinOneBank />
      <ThreeCards />
      <Pricing />
      <AppPromo />
      <Support />
    </div>
  );
}
