import Image from "next/image";
import getHospital from "@/libs/getHospital";

export default async function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  const hosDetail = await getHospital(params.hid)
  return (
    <main className="text-center p-5">
      <h1 className="text-xl font-medium mt-8">{hosDetail.data.name}</h1>
      <div className="flex flex-row my-5 ml-10">
        <Image
          src={hosDetail.data.picture}
          alt="Hospital Picture"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[30%] bg-black"
        />
        <div className="text-md mx-5 text-left ml-10 py-10 bg-gray-100 rounded-xl w-3/5">
          <div className="text-md mx-5 my-2">Address : {hosDetail.data.address}</div>
          <div className="text-md mx-5 my-2">District : {hosDetail.data.district}</div>
          <div className="text-md mx-5 my-2">Province : {hosDetail.data.province}</div>
          <div className="text-md mx-5 my-2">Postcode : {hosDetail.data.postalcode}</div>
          <div className="text-md mx-5 my-2">Tel : {hosDetail.data.tel}</div>
        </div>
      </div>
    </main>
  );
}
