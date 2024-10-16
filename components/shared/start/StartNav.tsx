import { Building2, LogIn, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StartNav = () => {
  return (
    <div className="w-full border-b h-16 items-center flex justify-between md:px-32 px-3 ">
      <div>
        <h1 className="text-2xl font-extrabold">
          <Link href={"/"}> Educlinic</Link>
        </h1>
      </div>
      <div className="flex gap-6 items-center">
        <Link href={`/usertype`}>
          <div className="h-8 gap-2 bg-blue-700 rounded-2xl flex items-center px-6">
            <p className="text-sm font-normal text-white">Sign Up</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default StartNav;
