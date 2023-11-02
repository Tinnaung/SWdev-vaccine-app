
import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/HospitalCatalog";
import { Suspense, useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import AddHospitalForm from "@/components/AddHospitalForm";


export default function Hospital() {
  const hospitals = getHospitals()

  return (
    <main className="text-center p-5">
      <h1 className="text-xl font-medium">Select Your Hospital</h1>
      <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
        <HospitalCatalog hospitalJson={hospitals} />
      </Suspense>
      <AddHospitalForm/>
    </main>
  );
}
