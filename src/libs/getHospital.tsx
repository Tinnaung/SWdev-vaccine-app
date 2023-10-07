export default async function getHospital(id: string) {
  const response = await fetch(`http://localhost:5001/api/v1/hospitals/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fatch hospital");
  }
  return await response.json();
}
