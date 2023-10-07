"use client";

import Link from "next/link";
import ProductCard from "./ProductCard";
import { useReducer } from "react";


export default async function HospitalCatalog({hospitalJson} : {hospitalJson:Object}){
    //onCompare
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
    const hosJsonReady = await hospitalJson
    return (
        <>
        Number of hospitals = {hosJsonReady.count}
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
      {hosJsonReady.data.map((hosItem:Object) => (
        <Link href={`/hospital/${hosItem.id}`} className="w-1/5">
          <ProductCard
            title={hosItem.name}
            pic={hosItem.picture}
            // message={hosItem.message}
            onCompare={(hos: string, rate: number) =>
              dispatchCompare({ type: "change", hosName: hos, rating: rate })
            }
            ratingParent={RatingMap.get(hosItem.name) || 0}
          />
        </Link>
      ))}
      </div>
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
        </>
    );
}