import ProjectForm from "@/components/shared/student/ProjectForm";
import StudentNav from "@/components/shared/student/StudentNav";
import Image from "next/image";
import OrganizationGlowSvg from "@/public/Organization-glow.svg";
import OrganizationGlowBall from "@/public/Organization-Center-Glow.png";
import React from "react";
import OrganizationGlowPinkSvg from "@/public/Organization-glow-pink.svg";

const Page = () => {
  return (
    <div>
      <StudentNav />
      <div className="bg-organizationsBackgroundImage h-[350px] relative flex items-center justify-center overflow-hidden bg-slate-700 mb-3">
        <Image src={OrganizationGlowBall} alt="Organization Radial Bg" className="w-full absolute top-[-95px] z-10"></Image>
        <Image src={OrganizationGlowSvg} alt="Organization Radial Bg" className="absolute right-[-20px] top-[-80px] z-0"></Image>
        <Image src={OrganizationGlowPinkSvg} alt="Organization Radial Bg" className="absolute left-[10%] top-10 z-0"></Image>

        <div className="flex flex-col w-full items-center my-auto gap-3 z-30 relative">
        <h1 className="text-center text-[36px] sm:text-[40px] md:text-[48px] lg:text-[55px] px-5 font-semibold">Fundraising for <br /> Project</h1>
        <p className="text-center text-[18px] sm:text-[19px] md:text-[20px] lg:text-[21px] px-5">You can raise fund for your projects</p>
        </div>
      </div>

      <div className="w-[90%] mx-auto mt-10">
        <p>Please fill the require information for fundraising for your project</p>
        <ProjectForm />
      </div>
    </div>
  );
};

export default Page;
