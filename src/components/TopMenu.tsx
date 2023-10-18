import styles from "./topmenu.module.css";
import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

export default async function TopMenu() {
  const session = await getServerSession(authOptions)
  return (
    <div className="flex flex-row-reverse fixed items-center flex-wrap bg-white border border-y-2 m-0 inset-y-0 h-20 w-full p-2 z-30 ">
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
      <TopMenuItem title="Booking" pageRef="/booking" />
      {
        session? <Link href="/api/auth/signout">
          <div className="flex items-center absolute left-0 px-2 absolute left-0 text-cyan-600 text-md ml-8">Sign-Out of {session.user?.name}</div>
        </Link>
        :<Link href="/api/auth/signin">
          <div className="flex items-denter absolute left-0 px-2 absolute left-0 text-cyan-600 text-md ml-8">Sign-In</div>
        </Link>
      }
    </div>
  );
}
