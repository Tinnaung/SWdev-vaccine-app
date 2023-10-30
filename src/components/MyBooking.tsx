"use client"
import { removeBooking } from "@/redux/features/bookSlice"
import { AppDispatch,useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function MyBooking() {
    const bookingItem= useAppSelector((state) => state.bookSlice.bookingItem)
    const dispatch = useDispatch<AppDispatch>()
    if(!bookingItem){
        return (<div className="text-xl text-center mt-8">No vaccine booking</div>)
    }
    return (
        <>
            {
                    <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookingItem.hid}>
                        <div className="text-xl">{bookingItem.hospital}</div>
                        <div className="text-sm">Booking Date: {bookingItem.bookingDate}</div>
                        <div className="text-sm">Booking Name: {bookingItem.name} {bookingItem.surname}</div>
                        <div className="text-sm">Citizen ID: {bookingItem.citizenId}</div>
                        <button 
                        className="block rounded-md bg-sky-600 hover:bg-sky-950 px-3 py-2 shadow-sm text-white"
                        onClick={() => dispatch(removeBooking(bookingItem))}
                        >
                            Cancel this booking
                        </button>
                    </div>
                
            }
        </>
    )
}