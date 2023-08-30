import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image src={"/img/cover.jpg"} alt="cover" fill={true} objectFit="cover" />
      <div className={styles.bannerText}>
        <h1 className="text-9xl font-medium object-contain ">
          Get your vaccine !
        </h1>
        <h3 className="text-3xl font-serif mt-5 object-contain ">
          an important part of protecting yourself
        </h3>
      </div>
    </div>
  );
}
