'use client'
import { VlogPlayer } from "./VlogPlayer"
import { useState } from "react"
import { useWindowListener } from "@/hooks/useWindowListener"

export function PromoteCard() {
    const [playing,setPlaying] = useState(true)
    useWindowListener('contextmenu',(e)=>{
        e.preventDefault()
    })
    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row">
            <VlogPlayer isPlaying={playing} vdoSrc="/video/getvaccine.mp4"></VlogPlayer>
            <div className="ml-10 text-medium">
                Get Vaccine
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm mt-8"
                onClick={() => setPlaying(!playing)}>
                    {playing? 'Pause':'Play'}
                </button>
            </div>
        </div>
    )
}