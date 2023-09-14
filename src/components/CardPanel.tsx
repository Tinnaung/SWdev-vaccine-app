"use client";
import { useReducer } from "react";
import ProductCard from "./ProductCard";
import { title } from "process";
import { TupleType } from "typescript";
import { Parisienne } from "next/font/google";
import { hostname } from "os";

export default function CardPanel() {
  const des_1 =
    "King Chulalongkorn Memorial Hospital is a public general and tertiary referral hospital in Bangkok, Thailand. It is operated by the Thai Red Cross Society, and serves as the teaching hospital for the Faculty of Medicine, Chulalongkorn University and Srisavarindhira Thai Red Cross Institute of Nursing.";
  const des_2 =
    "Rajavithi Hospital is large public hospital located in Ratchathewi District, Bangkok, Thailand. It was founded in 1951 as the Women's Hospital, and is operated by the Ministry of Public Health's Department of Medical Services. With an inpatient capacity of 1,200 beds, it is one of the largest hospitals in Thailand. It serves as a teaching hospital for the College of Medicine, Rangsit University.";
  const des_3 =
    "Thammasat University Hospital is a public hospital subsidiary to the Office of the Rector, Thammasat University, Ministry of Education. It is located in the Rangsit Campus, Pathum Thani Province, Thailand.";
  const compareReducer = (
    RatingMap: Map<string, number>,
    action: { type: string; hosName: string; rating: number }
  ) => {
    switch (action.type) {
      case "change": {
        return new Map(RatingMap.set(action.hosName, action.rating));
      }
      case "delete": {
        RatingMap.delete(action.hosName);
        console.log("after delete", new Map(RatingMap));

        return new Map(RatingMap);
      }
      default:
        return RatingMap;
    }
  };
  const [RatingMap, dispatchCompare] = useReducer(
    compareReducer,
    new Map<string, number>()
  );
  return (
    <>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          alignContent: "space-around",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "10px",
        }}
      >
        <ProductCard
          pic="/img/chula.jpg"
          title="Chulalongkorn Hospital"
          message={des_1}
          onCompare={(hos: string, rate: number) => {
            dispatchCompare({ type: "change", hosName: hos, rating: rate });
          }}
          ratingParent={RatingMap.get("Chulalongkorn Hospital") || 0}
        />
        <ProductCard
          pic="/img/rajavithi.jpg"
          title="Rajavithi Hospital"
          message={des_2}
          onCompare={(hos: string, rate: number) => {
            dispatchCompare({ type: "change", hosName: hos, rating: rate });
          }}
          ratingParent={RatingMap.get("Rajavithi Hospital") || 0}
        />
        <ProductCard
          pic="/img/thammasat.jpg"
          title="Thammasat University Hospital"
          message={des_3}
          onCompare={(hos: string, rate: number) => {
            dispatchCompare({ type: "change", hosName: hos, rating: rate });
          }}
          ratingParent={RatingMap.get("Thammasat University Hospital") || 0}
        />
      </div>
      {/* <div className="w-full text-xl font-medium">
        Compare List ({compareList.length} Hospital)
      </div> */}
      {Array.from(RatingMap).map(([hosMap, valueMap]) => (
        <div
          key={hosMap}
          className="cursor-pointer"
          onClick={() =>
            dispatchCompare({
              type: "delete",
              hosName: hosMap,
              rating: valueMap,
            })
          }
        >
          {hosMap} Rating = {valueMap}
        </div>
      ))}
    </>
  );
}
