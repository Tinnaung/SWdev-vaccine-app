import LocationDateReserve from "@/components/LocationDateReserve";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";

export default async function reservation() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);
  return (
    <main className="w-[100%] flex flex-col items-center space-y-12 py-10">
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
      <div className="w-fit space-x-2 flex flex-row">
        <div className="text-md text-center text-gray-600">First Name</div>
        <input
          type="text"
          id="f-name"
          placeholder="Your First Name"
          className="rounded ring-1 ring-inset ring-gray-400 text-md leading-6 indent-2 placeholder:text-gray-400"
        />
        <div className="text-md text-center text-gray-600">Last Name</div>
        <input
          type="text"
          id="l-name"
          placeholder="Your Last Name"
          className="rounded ring-1 ring-inset ring-gray-400 text-md leading-6 indent-2 placeholder:text-gray-400"
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
        />
      </div>
      <div className="w-fit space-y-2">
        <div className="text-md text-left text-gray-600">
          Vaccination Date and Location
        </div>
        <LocationDateReserve />
      </div>
      <button className="block rounded-md bg-sky-600 hover:bg-sky-950 px-3 py-2 shadow-sm text-white">
        Confirm Your Appointment
      </button>
    </main>
  );
}
