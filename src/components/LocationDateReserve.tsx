'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Select,MenuItem, LinearProgress } from "@mui/material"
import { Dayjs } from "dayjs"
import { Suspense, useEffect, useState } from "react"

export default function LocationDateReserve({onDateChange, onLocationChange,hospitals,inithosName}:{onDateChange: Function, onLocationChange:Function, hospitals:Object,inithosName:string}) {
    const [reserveDate, setReserveDate] = useState<Dayjs|null>(null)
    const [location, setLocation] = useState("")
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchHospital = async () => {
          const hos = await hospitals;
          if(inithosName == ""){setLocation(hos.data[0].name)}
          else{setLocation(inithosName)}
        }
        fetchHospital();
      },[])

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                    value = {reserveDate}
                    onChange={(value) => {setReserveDate(value); onDateChange(value)}}
                />
            </LocalizationProvider>
            <Select variant="standard" name="location" id="location" className="h-[2em] w-[200px]"
                value={location} onChange={(e) => {setLocation(e.target.value); onLocationChange(e.target.value);}}
            >
                {(hospitals) ? hospitals.data.map((hos) => (
                    <MenuItem value= {hos.name}>{hos.name}</MenuItem>
                )):null}
            </Select>
        </div>
    );
}