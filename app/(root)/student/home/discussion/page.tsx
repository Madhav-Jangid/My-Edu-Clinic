import StudentNav from "@/components/shared/student/StudentNav";
import { getStudentDataById } from "@/lib/database/actions/auth.action";
import { getDiscuss } from "@/lib/database/actions/discussion.action";
import { UpdateStudentParams } from "@/types";
import { User } from "lucide-react";
import Link from "next/link";
import React from "react";

import Image from "next/image";
import OrganizationGlowPinkSvg from "@/public/Organization-glow-pink.svg";
import OrganizationGlowSvg from "@/public/Organization-glow.svg";
import OrganizationGlowBall from "@/public/Organization-Center-Glow.png";
import InputFeildforForm from "./InputFeildforForm";



const page = async () => {
  const discussReponse = await getDiscuss();

  const fetchUserData = async (studentId: UpdateStudentParams) => {
    return await getStudentDataById(studentId);
  };

  return (
    <div>
      <StudentNav />
      <div className="bg-organizationsBackgroundImage h-[350px] relative flex items-center justify-center overflow-hidden bg-slate-700 mb-3">
        <Image src={OrganizationGlowBall} alt="Organization Radial Bg" className="w-full absolute top-[-95px] z-10"></Image>
        <Image src={OrganizationGlowSvg} alt="Organization Radial Bg" className="absolute right-[-20px] top-[-80px] z-0"></Image>
        <Image src={OrganizationGlowPinkSvg} alt="Organization Radial Bg" className="absolute left-[10%] top-10 z-0"></Image>

        <div className="flex flex-col w-full items-center my-auto gap-3 z-30 relative">
          <h1 className="text-[36px] sm:text-[40px] md:text-[48px] lg:text-[55px] px-5 font-semibold">Discussion Panel</h1>
          <p className="text-center text-[18px] sm:text-[19px] md:text-[20px] lg:text-[21px] px-5">You can discuss whatever query you have</p>
          <InputFeildforForm />
        </div>
      </div>





      <div className="flex flex-col-reverse">
        {discussReponse?.map(async (curr: any) => {
          const userData = await fetchUserData(curr.user._id);
          return (
            <Link href={`/student/home/discussion/${curr._id}`}>
              <div className="flex justify-between items-center w-[80%] p-2  mx-auto border-b hover:bg-slate-100 cursor-pointer">
                <div className="h-full flex gap-6 p-2 items-start">
                  <div className="h-10 w-10 rounded-full  border-[1px] border-zinc-500 flex justify-center items-center">
                    <User />
                  </div>
                  <div className="">
                    <h1 className="font-semibold">{curr.title}</h1>
                    <p className="opacity-70">{curr.message}</p>
                  </div>
                </div>
                <p className="text-sm mr-2 text-indigo-400">{userData.name}</p>
              </div>
            </Link>
          );
        })
          //  ||  <h1 className="mx-auto text-center mt-10">Loading...</h1>
        }
      </div>
    </div>

  );
};

export default page;
