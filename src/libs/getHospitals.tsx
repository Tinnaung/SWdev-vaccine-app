
export default async function getHospitals() {
  //timeout
  await new Promise((resolve) => setTimeout(resolve,5000))
  //
  const response = await fetch("http:localhost:5001/api/v1/hospitals");
  if (!response.ok) {
    throw new Error("Falied to fetch hospitals");
  }
  return await response.json();
}
