import styles from "./page.module.css";
import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";
import ProductCard from "@/components/ProductCard";
const des_1 =
  "King Chulalongkorn Memorial Hospital is a public general and tertiary referral hospital in Bangkok, Thailand. It is operated by the Thai Red Cross Society, and serves as the teaching hospital for the Faculty of Medicine, Chulalongkorn University and Srisavarindhira Thai Red Cross Institute of Nursing.";
const des_2 =
  "Rajavithi Hospital is large public hospital located in Ratchathewi District, Bangkok, Thailand. It was founded in 1951 as the Women's Hospital, and is operated by the Ministry of Public Health's Department of Medical Services. With an inpatient capacity of 1,200 beds, it is one of the largest hospitals in Thailand. It serves as a teaching hospital for the College of Medicine, Rangsit University.";
const des_3 =
  "Thammasat University Hospital is a public hospital subsidiary to the Office of the Rector, Thammasat University, Ministry of Education. It is located in the Rangsit Campus, Pathum Thani Province, Thailand.";
export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
    </main>
  );
}
