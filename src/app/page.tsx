import AllinOneBank from "@/Components/components/AllinOneBank";
import AppPromo from "@/Components/components/AppPromo";
import Banner from "@/Components/components/Banner";
import Pricing from "@/Components/components/Pricing";
import Support from "@/Components/components/Support";
import ThreeCards from "@/Components/components/ThreeCards";
import Cards from "@/Components/Reusable/Cards";

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
