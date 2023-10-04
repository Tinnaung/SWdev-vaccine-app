import Image from "next/image";
export default function HospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  /* mock data */
  const des_1 =
    "King Chulalongkorn Memorial Hospital is a public general and tertiary referral hospital in Bangkok, Thailand. It is operated by the Thai Red Cross Society, and serves as the teaching hospital for the Faculty of Medicine, Chulalongkorn University and Srisavarindhira Thai Red Cross Institute of Nursing.";
  const des_2 =
    "Rajavithi Hospital is large public hospital located in Ratchathewi District, Bangkok, Thailand. It was founded in 1951 as the Women's Hospital, and is operated by the Ministry of Public Health's Department of Medical Services. With an inpatient capacity of 1,200 beds, it is one of the largest hospitals in Thailand. It serves as a teaching hospital for the College of Medicine, Rangsit University.";
  const des_3 =
    "Thammasat University Hospital is a public hospital subsidiary to the Office of the Rector, Thammasat University, Ministry of Education. It is located in the Rangsit Campus, Pathum Thani Province, Thailand.";
  const mockHospitalRepo = new Map();
  mockHospitalRepo.set("001", {
    name: "Chulalongkorn Hospital",
    image: "/img/chula.jpg",
    message: des_1,
  });
  mockHospitalRepo.set("002", {
    name: "Rajavithi Hospital",
    image: "/img/rajavithi.jpg",
    message: des_2,
  });
  mockHospitalRepo.set("003", {
    name: "Thammasat University Hospital",
    image: "/img/thammasat.jpg",
    message: des_3,
  });
  return (
    <main className="text-center p-5">
      <h1 className="text-lg font-medium">Hos ID {params.hid}</h1>
      <div className="flex flex-row my-5">
        <Image
          src={mockHospitalRepo.get(params.hid).image}
          alt="Hospital Picture"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg w-[30%] bg-black"
        />
        <div className="text-md mx-5">{(mockHospitalRepo.get(params.hid)).name}</div>
      </div>
    </main>
  );
}
