import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { dbConnect } from "@/db/dbConnect";
import Hospital from "@/db/models/Hospital";
import { revalidateTag } from "next/cache";
import { revalidatePath } from "next/cache";

export default async function AddHospitalForm(){
    const session = await getServerSession(authOptions);

    if (!session || !session.user.token) return null;
  
    const profile = await getUserProfile(session.user.token);

    const addHospital = async (AddForm: FormData) => {
        "use server";
        const name = AddForm.get("name");
        const address = AddForm.get("address");
        const district = AddForm.get("district");
        const province = AddForm.get("province");
        const postalcode = AddForm.get("postalcode");
        const tel = AddForm.get("tel");
        const picture = AddForm.get("picture");
    
        try {
          await dbConnect();
          const hospital = await Hospital.create({
            name: name,
            address: address,
            district: district,
            province: province,
            postalcode: postalcode,
            tel: tel,
            picture: picture,
          });
        } catch (err) {
          console.error(err);
        }
        revalidateTag("hospitals");
        revalidatePath("/hospital")
      };


    return (
        <>
        {profile.data.role == "admin" ? (<div>
        <form className="grid justify-items-center" action={addHospital}>
            <div>
            <div className="text-xl text-blue-700">Add Hospital</div>
            <div className="flex items-center w-75 my-2 justify-start">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="name">Hospital</label>
                <input type="text" required id = "name" name="name" placeholder="Hospital naame"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>
            <div className="flex items-center w-75 my-2 justify-start">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="address">Address</label>
                <input type="text" required id = "address" name="address" placeholder="Address"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>
        
            <div className="flex items-center w-full my-2 justify-start">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="district">District</label>
                <input type="text" required id = "district" name="district" placeholder="District"
                    className="ml-2 bg-white border-2 border-gray-200 rounded w-[20%] p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                />
                <label className="ml-2 w-auto block text-gray-700 pr-4" htmlFor="province">Province</label>
                <input type="text" required id = "province" name="province" placeholder="Province"
                    className="bg-white border-2 border-gray-200 rounded w-[20%] p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                />
                <label className="ml-2 w-auto block text-gray-700 pr-4" htmlFor="postalcode">Postal Code</label>
                <input type="text" required id = "postalcode" name="postalcode" placeholder="Postal Code"
                    className="bg-white border-2 border-gray-200 rounded w-[20%] p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>
            <div className="flex items-center w-1/2 my-2 justify-start">
                <label className="ml-10 w-auto block text-gray-700 pr-4" htmlFor="tel">Tel</label>
                <input type="text" required id = "tel" name="tel" placeholder="Tel"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700  justify-self-end focus:outline-none focus:border-blue-400"
                />
            </div>
            <div className="flex items-center w-1/2 my-2 justify-start">
                <label className="ml-2 w-auto block text-gray-700 pr-4" htmlFor="picture">Picture</label>
                <input type="text" required id = "picture" name="picture" placeholder="URL"
                    className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"
                />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">Add New Hospital</button>
            </div>
        </form>
        </div>):null}
        
        </>
    );
}