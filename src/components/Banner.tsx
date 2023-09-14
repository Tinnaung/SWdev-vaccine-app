"use client";
import { useState } from "react";
import styles from "./banner.module.css";
import Image from "next/image";

export default function Banner() {
  const covers = [
    "/img/cover1.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
  ];
  const [index, setIndex] = useState(0);
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
    </div>
  );
}
