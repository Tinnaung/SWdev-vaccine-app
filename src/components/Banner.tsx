"use client";
import { useState } from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Banner() {
  const covers = [
    "/img/cover1.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const {data:session} = useSession()
  return (
    <div
      className={styles.banner}
      onClick={() => {
        setIndex((index + 1) % 4);
      }}
    >
      <Image src={covers[index]} alt="cover" fill={true} objectFit="cover" />
      <div className={styles.bannerText}>
        <h1 className="text-9xl font-medium object-contain ">
          Get your vaccine !
        </h1>
        <h3 className="text-3xl font-sans mt-5 object-contain ">
          an important part of protecting yourself
        </h3>
      </div>
      {
        session? <div className="z-30 absolute top-5 right-10 font-semibold text-yellow-100 text-xl">
          Hello {session.user?.name}
        </div> : null
      }
      <button
        className="bg-white text-cyan-600 border border-cyan-600 
        font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/hospital");
        }}
      >
        Select The Hospital
      </button>
    </div>
  );
}
