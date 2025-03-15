import Banner from "@/Components/Banner";
import Image from "next/image";
import Cards from "@/Components/Reusable/Cards";
import appImage1 from "/public/image/app1.png";
import appImage2 from "/public/image/app2.png";
import appImage3 from "/public/image/app3.png";
import appImage4 from "/public/image/app4.png";
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
        details="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet."
        point1="Malesuada Ipsum"
        point2="Vestibulum"
        point3="Parturient Lorem"
        appImage={appImage1}
      />
      <Cards
        title="Cards"
        heading1st="Manage"
        headinglst="your cards"
        details="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        point1="Malesuada Ipsum"
        point2="Vestibulum"
        point3="Parturient Lorem"
        appImage={appImage2}
      />
      <Cards
        title="Advanced Statistics"
        heading1st="Keep control"
        headinglst="over your money"
        details="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        point1="Malesuada Ipsum"
        point2="Vestibulum"
        point3="Parturient Lorem"
        appImage={appImage3}
      />
      <Cards
        title="Saving Accounts"
        heading1st="Lorem et"
        headinglst="ipsum dolor"
        details="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet."
        point1="Malesuada Ipsum"
        point2="Vestibulum"
        point3="Parturient Lorem"
        appImage={appImage4}
      />
      <AllinOneBank />
      <ThreeCards />
      <Pricing />
      <AppPromo/>
      <Support/>
    </div>
  );
}
