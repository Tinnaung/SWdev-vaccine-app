import styles from "./productcard.module.css";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

interface Data_props {
  pic: string;
  title: string;
  message: string;
}
export default function ProductCard({ pic, title, message }: Data_props) {
  return (
    <InteractiveCard contentName={title}>
      <div className="w-full h-[60%] relative rounded-t-lg">
        <Image
          src={pic}
          alt="Vaccine Picture"
          fill={true}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="w-full h-[30%] p-[15px] text-center font-semibold font-sans mt-8">
        {title}
      </div>
      <div className={styles.describtion}>{message}</div>
    </InteractiveCard>
  );
}
