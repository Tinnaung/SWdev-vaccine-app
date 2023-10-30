import styles from "./topmenu.module.css";
import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

export default async function TopMenu() {
  const session = await getServerSession(authOptions)
  return (
    <div className="flex fixed bg-white border border-y-2 m-0 inset-y-0 h-20 w-full z-30 ">
      <div className="flex flex-row h-20 w-full ml-8 p-2">
      {
        session? <Link href="/api/auth/signout">
          <div className="flex items-center px-2 h-full text-cyan-600 text-md mr-2">Sign-Out of {session.user?.name}</div>
        </Link>
        :<Link href="/api/auth/signin">
          <div className="flex items-center px-2 h-full text-cyan-600 text-md mr-2">Sign-In</div>
        </Link>
      }
      <TopMenuItem title="MyBooking" pageRef="/mybooking" />
      </div>
      <div className="flex flex-row absolute right-0 h-20 py-2 px-3 mr-4 w-max">
        <TopMenuItem title="Booking" pageRef="/booking"/>
        <TopMenuItem title="Select Hospital" pageRef="/hospital" />
        <Link href={"/"}>
          <Image
            src={"/img/logo.png"}
            className="object-contain h-16 w-auto m-0 p-0 inset-0"
            alt="logo"
            width={0}
            height={0}
            sizes="100vh"
          />
        </Link>
      </div>
    </div>
  );
}
