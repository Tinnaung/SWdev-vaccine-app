import styles from "./page.module.css";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
const des_1 =
  "Vaccination is a simple, safe, and effective way of protecting you against harmful diseases, before you come into contact with them. It uses your body’s natural defenses to build resistance to specific infections and makes your immune system stronger.";
const des_2 =
  "In today’s world, infectious diseases can easily cross borders, and infect anyone who is not protected. Two key reasons to get vaccinated are to protect ourselves and to protect those around us";
const des_3 =
  "Like any medicine, vaccines can cause mild side effects, such as a low-grade fever, or pain or redness at the injection site. Mild reactions go away within a few days on their own.Severe or long-lasting side effects are extremely rare.";
const des_4 =
  "In most countries you will be given a vaccination card that tells you what vaccines you or your child have had and when the next vaccines or booster doses are due. It is important to make sure that all these vaccines are up to date.";
export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          alignContent: "space-around",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <ProductCard
          pic="/img/card1.jpg"
          title="What is vaccination ?"
          message={des_1}
        />
        <ProductCard
          pic="/img/card2.jpg"
          title="Why should I get vaccinated ?"
          message={des_2}
        />
        <ProductCard
          pic="/img/card3.jpg"
          title="Side effects of vaccines?"
          message={des_3}
        />
        <ProductCard
          pic="/img/card4.jpeg"
          title="When should I get vaccinated ?"
          message={des_4}
        />
      </div>
    </main>
  );
}
