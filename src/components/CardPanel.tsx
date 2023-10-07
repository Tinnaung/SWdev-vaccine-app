"use client";
import { useReducer } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function CardPanel() {
  //description
  const des_1 =
    "King Chulalongkorn Memorial Hospital is a public general and tertiary referral hospital in Bangkok, Thailand. It is operated by the Thai Red Cross Society, and serves as the teaching hospital for the Faculty of Medicine, Chulalongkorn University and Srisavarindhira Thai Red Cross Institute of Nursing.";
  const des_2 =
    "Rajavithi Hospital is large public hospital located in Ratchathewi District, Bangkok, Thailand. It was founded in 1951 as the Women's Hospital, and is operated by the Ministry of Public Health's Department of Medical Services. With an inpatient capacity of 1,200 beds, it is one of the largest hospitals in Thailand. It serves as a teaching hospital for the College of Medicine, Rangsit University.";
  const des_3 =
    "Thammasat University Hospital is a public hospital subsidiary to the Office of the Rector, Thammasat University, Ministry of Education. It is located in the Rangsit Campus, Pathum Thani Province, Thailand.";
  //description

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
        // console.log("after delete", new Map(RatingMap));

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
  /* Mock Data*/
  const mockHospitalRepo = [
    {
      hid: "001",
      name: "Chulalongkorn Hospital",
      image: "/img/chula.jpg",
      message: des_1,
    },
    {
      hid: "002",
      name: "Rajavithi Hospital",
      image: "/img/rajavithi.jpg",
      message: des_2,
    },
    {
      hid: "003",
      name: "Thammasat University Hospital",
      image: "/img/thammasat.jpg",
      message: des_3,
    },
  ];
  return (
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
      {mockHospitalRepo.map((hosItem) => (
        <Link href={`/hospital/${hosItem.hid}`} className="w-1/5">
          <ProductCard
            title={hosItem.name}
            pic={hosItem.image}
            // message={hosItem.message}
            onCompare={(hos: string, rate: number) =>
              dispatchCompare({ type: "change", hosName: hos, rating: rate })
            }
            ratingParent={RatingMap.get(hosItem.name) || 0}
          />
        </Link>
      ))}
      <div className="w-full text-xl font-medium mt-16 pt-4">
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
      </div>
    </div>
  );
}
