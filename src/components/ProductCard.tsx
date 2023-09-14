"use client";

import styles from "./productcard.module.css";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import Rating from "@mui/material/Rating";
import * as React from "react";

interface Data_props {
  pic: string;
  title: string;
  message: string;
  onCompare: Function;
  ratingParent : number;
}
export default function ProductCard({
  pic,
  title,
  message,
  onCompare,
  ratingParent,
}: Data_props) {
  const [value, setValue] = React.useState<number | null>(2);
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
      <div className="w-full h-[15%] p-[15px] text-center font-semibold font-sans mt-6">
        {title}
      </div>
      <div className="mb-4 mt-4 w-full text-center">
        <Rating
          name="simple-controlled"
          value={ratingParent}
          onChange={(event, newValue) => {
            //setValue(newValue);
            //event.stopPropagation();
            onCompare(title, newValue);
          }}
        />
      </div>

      <div className={styles.describtion}>{message}</div>
    </InteractiveCard>
  );
}
