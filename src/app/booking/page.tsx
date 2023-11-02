"use client";
import LocationDateReserve from "@/components/LocationDateReserve";
import getUserProfile from "@/libs/getUserProfile";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import dayjs from 'dayjs';
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import { BookingItem } from "../../../interfaces";
import { useSession } from "next-auth/react";
import { Dayjs } from "dayjs";
import Hospital from "../(hospitalinfo)/hospital/page";
import getHospitals from "@/libs/getHospitals";
import { LinearProgress } from "@mui/material";

export default function reservation() {
  const urlParams = useSearchParams();
  const hid = urlParams.get("id");
  const hos = urlParams.get("hos");
  const dispatch = useDispatch<AppDispatch>();

  const makeReservation = () => {
    if (firstName && lastName && citizenID && bookingLocation && bookingDate && hosID) {
      const item: BookingItem = {
        name: firstName,
        surname: lastName,
        hid: hosID,
        hospital: bookingLocation,
        bookingDate: dayjs(bookingDate).format("YYYY/MM/DD"),
        citizenId: citizenID,
      };
      dispatch(addBooking(item));
      alert("Your vaccine has successfully booked")
    }
  };

  const { data: session } = useSession();
  const [profile, setProfile] = useState<any>();

  
  const [bookingDate, setBookingDate] = useState<Dayjs | null>(null);
  const [bookingLocation, setBookingLocation] = useState<string>();
  const [hosID, setHosId] = useState<string>();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [citizenID, setCitizenID] = useState<string>("");
  const [hospitals,setHospitals] = useState<Object>();

  useEffect(() => {
    const fetchProfile = async () => {
      let profile = await getUserProfile(session.user.token);
      setProfile(profile);
    };
    fetchProfile();
  }, [session, getUserProfile]);

  useEffect(() => {
    const fetchHospital = async () => {
      const hospitals = await getHospitals();
      setHospitals(hospitals)
      if(!hos){
        setBookingLocation(hospitals.data[0].name)
      }
      else {setBookingLocation(hos)}
      if(!hid) {setHosId(hospitals.data[0]._id)}
      else {setHosId(hid)}
      
    }
    fetchHospital();
  },[])


  if (!session || !session.user.token || !profile) return null;

  var createdAt = new Date(profile.data.createdAt);


  return (
    <main className="w-[100%] flex flex-col items-center space-y-12 py-10">
      <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
      <div className="bg-slate-100 m-5 p-5 rounded-md">
        <div className="text-2xl text-center">{profile.data.name}</div>
        <table className="table-auto border-seperate border-spacing-2">
          <tbody>
            <tr>
              <td>Email</td>
              {profile.data.email}
            </tr>
            <tr>
              <td>Tel</td>
              {profile.data.tel}
            </tr>
            <tr>
              <td>Member Since{createdAt.toString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-5xl font-sans">Vaccination Appointment</div>
      <div className="text-4xl font-sans">{hos}</div>
      <div className="w-fit space-x-2 flex flex-row">
        <div className="text-md text-center text-gray-600">First Name</div>
        <input
          type="text"
          id="f-name"
          placeholder="Your First Name"
          className="rounded ring-1 ring-inset ring-gray-400 text-md leading-6 indent-2 placeholder:text-gray-400"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <div className="text-md text-center text-gray-600">Last Name</div>
        <input
          type="text"
          id="l-name"
          placeholder="Your Last Name"
          className="rounded ring-1 ring-inset ring-gray-400 text-md leading-6 indent-2 placeholder:text-gray-400"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="w-fit space-y-2">
        <div className="text-md text-center text-gray-600">
          Enter Your Citizen ID
        </div>
        <input
          type="number"
          id="citizen-id"
          placeholder="Your Citizen ID"
          className="rounded ring-1 ring-inset ring-gray-400 text-md leading-6 indent-2 placeholder:text-gray-400"
          value={citizenID}
          onChange={(e) => setCitizenID(e.target.value)}
        />
      </div>
      <div className="w-fit space-y-2">
        <div className="text-md text-left text-gray-600">
          Vaccination Date and Location
        </div>
        <LocationDateReserve
          onDateChange={(value: Dayjs) => {
            setBookingDate(value);
          }}
          onLocationChange={(value: string) => {
            setBookingLocation(value);
            if (hospitals && hospitals.data){
              hospitals.data.forEach(hos => {
                if(hos.name == value){
                  setHosId(hos._id)
                }
              });
            }
          }}
          hospitals={hospitals}
          inithosName={bookingLocation}
        />
      </div>
      <button
        className="block rounded-md bg-sky-600 hover:bg-sky-950 px-3 py-2 shadow-sm text-white"
        onClick={makeReservation}
      >
        Confirm Your Appointment
      </button>
      </Suspense>
    </main>
  );
}
