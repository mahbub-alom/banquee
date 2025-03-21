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
        details="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque illum quo, repellat quasi magnam rerum sed voluptatem omnis dicta perferendis repudiandae delectus sint optio, ducimus animi quod quae quisquam fuga est dolore autem. Accusantium inventore omnis cum saepe ut adipisci consequuntur, nemo aut."
        point1="Malesuada Ipsum"
        point2="Vestibulum"
        point3="Parturient Lorem"
        appImage="/image/app1.png" // ✅ Use relative path instead of import
      />
      <Cards
        title="Cards"
        heading1st="Manage"
        headinglst="your cards"
        details=" nihil dicta eaque a reiciendis assumenda esse nobis vitae, ducimus architecto fugit explicabo odio dolorem laborum perferendis? Et accusamus expedita est totam reprehenderit nesciunt illum laborum eaque ab sint. Iste adipisci culpa labore, ad, ipsam aperiam sit animi vitae necessitatibus molestiae, ea aut libero! Modi, vel laborum praesentium architecto quae, magni at ratione libero alias beatae ea."
        point1="Malesuada Ipsum"
        point2="Vestibulum"
        point3="Parturient Lorem"
        appImage="/image/app2.png"
      />
      <Cards
        title="Advanced Statistics"
        heading1st="Keep control"
        headinglst="over your money"
        details="distinctio omnis unde possimus vel ullam cum. Voluptatum porro ex corporis dolor distinctio rerum cupiditate fugiat inventore consequatur exercitationem, magnam nostrum sunt hic obcaecati numquam similique! Consequatur quo laborum aspernatur sit ad ipsam odio natus asperiores, numquam adipisci officiis beatae commodi temporibus nulla. Error commodi labore beatae, excepturi minima quae. Cum nulla dolore ratione asperiores magnam at laboriosam laudantium non sunt laborum?"
        point1="Malesuada Ipsum"
        point2="Vestibulum"
        point3="Parturient Lorem"
        appImage="/image/app3.png"
      />
      <Cards
        title="Saving Accounts"
        heading1st="Lorem et"
        headinglst="ipsum dolor"
        details=" nihil dicta eaque a reiciendis assumenda esse nobis vitae, ducimus architecto fugit explicabo odio dolorem laborum perferendis? Et accusamus expedita est totam reprehenderit nesciunt illum laborum eaque ab sint. Iste adipisci culpa labore, ad, ipsam aperiam sit animi vitae necessitatibus molestiae, ea aut libero! Modi, vel laborum praesentium architecto quae, magni at ratione libero alias beatae ea."
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
