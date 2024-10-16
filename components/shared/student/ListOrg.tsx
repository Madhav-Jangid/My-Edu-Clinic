"use client";
import React, { useEffect, useState } from "react";
import { Flame } from "lucide-react";
import { Input } from "@/components/ui/input";
import StudentOrg from "./StudentOrg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import hero2 from "@/public/hero2.png";
import OrganizationGlowSvg from "@/public/Organization-glow.svg";
import OrganizationFilterSvg from "@/public/Oraganization-Filter.svg";
import OrganizationGlowBall from "@/public/Organization-Center-Glow.png";
import SearchIconSvg from "@/public/Search_Icon.svg";
import OrganizationGlowPinkSvg from "@/public/Organization-glow-pink.svg";


interface Organization {
  orgName: string;
}

type OrganizationProps = {
  organization: Organization[];
};

export default function ListOrg({ organization }: OrganizationProps) {
  const [searchName, setSearchName] = useState<any>("");
  const [filterationValue, setFilterationValue] = useState<any>();

  useEffect(() => {
    console.log(searchName);
  }, []);

  const sampleImages = [
    { name: "Sunset", url: "https://via.placeholder.com/300?text=Sunset" },
    { name: "Mountain View", url: "https://via.placeholder.com/300?text=Mountain+View" },
    { name: "City Skyline", url: "https://via.placeholder.com/300?text=City+Skyline" },
    { name: "Forest Path", url: "https://via.placeholder.com/300?text=Forest+Path" },
    { name: "Beach Waves", url: "https://via.placeholder.com/300?text=Beach+Waves" },
    { name: "Desert Dunes", url: "https://via.placeholder.com/300?text=Desert+Dunes" },
    { name: "Starry Night", url: "https://via.placeholder.com/300?text=Starry+Night" },
    { name: "Waterfall", url: "https://via.placeholder.com/300?text=Waterfall" },
    { name: "Snowy Mountain", url: "https://via.placeholder.com/300?text=Snowy+Mountain" },
    { name: "Lake View", url: "https://via.placeholder.com/300?text=Lake+View" },
    { name: "Tropical Island", url: "https://via.placeholder.com/300?text=Tropical+Island" },
    { name: "Canyon", url: "https://via.placeholder.com/300?text=Canyon" },
    { name: "Autumn Forest", url: "https://via.placeholder.com/300?text=Autumn+Forest" },
    { name: "Hot Air Balloon", url: "https://via.placeholder.com/300?text=Hot+Air+Balloon" },
    { name: "City Night Lights", url: "https://via.placeholder.com/300?text=City+Night+Lights" },
    { name: "Cliffside", url: "https://via.placeholder.com/300?text=Cliffside" },
    { name: "River Rapids", url: "https://via.placeholder.com/300?text=River+Rapids" },
    { name: "Rainforest", url: "https://via.placeholder.com/300?text=Rainforest" },
    { name: "Lighthouse", url: "https://via.placeholder.com/300?text=Lighthouse" },
    { name: "Flower Field", url: "https://via.placeholder.com/300?text=Flower+Field" }
  ];


  return (
    <>
      <div className="bg-organizationsBackgroundImage h-[350px] relative flex items-center justify-center overflow-hidden bg-slate-700">
        <Image src={OrganizationGlowBall} alt="Organization Radial Bg" className="w-full absolute top-[-95px] z-10"></Image>
        <Image src={OrganizationGlowSvg} alt="Organization Radial Bg" className="absolute right-[-20px] top-[-80px] z-0"></Image>
        <Image src={OrganizationGlowPinkSvg} alt="Organization Radial Bg" className="absolute left-[10%] top-10 z-0"></Image>

        <div className="flex flex-col w-full items-center my-auto gap-3 z-30 relative">
          <h1 className="text-[36px] sm:text-[40px] md:text-[48px] lg:text-[55px] px-5 font-semibold">Organizations</h1>
          <p className="text-center text-[18px] sm:text-[19px] md:text-[20px] lg:text-[21px] px-5">
            You can explore all the services out there
          </p>
          <div className="w-[90%] max-w-[500px] p-[1.3rem] bg-[#d2d1d171] rounded-full border-[2px] border-white">
            <div className="w-full h-14  rounded-full flex bg-white p-1">
              <Input
                className="h-full  rounded-full border-none bg-transparent"
                placeholder="Type any organizations name"
                onChange={(e) => {
                  setSearchName(e.target.value);
                }}
              />
              <Button className="bg-transparent h-full w-max hover:bg-transparent hover:opacity-90">
                <Image src={OrganizationFilterSvg} alt="Organization Filter icon" width={25} />
              </Button>
              <span className="w-[1px] h-[80%] m-auto bg-gray-200" ></span>
              <Button className="bg-transparent ml-3 aspect-square p-0 h-full hover:bg-transparent hover:opacity-90">
                <Image src={SearchIconSvg} alt="Organization Filter icon " />
              </Button>

            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-10">
        <StudentOrg organization={organization} filter={searchName} />
      </div>

    </ >
  );
}
