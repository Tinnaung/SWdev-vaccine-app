import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image src={"/img/cover.jpg"} alt="cover" fill={true} objectFit="cover" />
      <div className={styles.bannerText}>
        <h1>Get your vaccine !</h1>
        <h3>an important part of protecting yourself</h3>
      </div>
    </div>
  );
}
