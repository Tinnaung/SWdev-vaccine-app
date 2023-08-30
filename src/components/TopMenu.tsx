import styles from "./topmenu.module.css";
import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import Link from "next/link";

export default function TopMenu() {
  return (
    <div className="flex flex-row-reverse fixed items-center flex-wrap bg-white border border-y-2 m-0 inset-y-0 h-20 w-full p-2 z-30 ">
      <Link href={"/"}>
        <Image
          src={"/img/logo.png"}
          className="object-contain h-16 w-auto m-0 p-0 inset-0"
          alt="logo"
          width={0}
          height={0}
          sizes="100vh"
        />
      </Link>
      {/* <TopMenuItem title="Reservations" pageRef="/reservations" />
      <TopMenuItem title="About" pageRef="/about" /> */}
      <TopMenuItem title="Booking" pageRef="/booking" />
    </div>
  );
}
