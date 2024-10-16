"use client";

import { IOrganization } from "@/lib/database/models/serviceprovider.model";
import { Flame } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import OrganizationsDefaultLogo from "@/public/Organization_default.png";
import React from "react";

type StudentOrgsParams = {
  organization: any;
  filter: any
  // name: any
};

const StudentOrg = ({ organization, filter }: StudentOrgsParams) => {
  const router = useRouter();
  return (
    <div className="pb-10 px-4 sm:px-8 lg:px-20">
      <div className="flex items-center gap-2">
        <Flame />
        <h1 className="text-xl sm:text-2xl font-semibold text-zinc-800">
          Explore Organizations
        </h1>
      </div>
      <p className="text-zinc-500 text-sm mt-2">
        You can explore all organizations here and explore their services
      </p>



    

      {organization.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-5 p-2">
          {organization.filter((item: { orgName: string; }) => { return filter === "" ? true : item.orgName.toLowerCase().includes(filter?.toLowerCase()) }).map((curr: IOrganization) => (
            <div
              onClick={() => {
                router.push(`/student/home/organization/${curr._id}`);
              }}
              className="bg-white border-[1px] border-[#E0E0E0] w-[160px] h-[200px] rounded-[5px] flex flex-col justify-between overflow-hidden hover:scale-[102%]"
            >
              <Image src={curr.orgImage || OrganizationsDefaultLogo} alt={curr.orgName}
                width={curr.orgImage ? 160 : 150}
                height={158}
              />
              <div className="flex items-center h-10 justify-center bg-[#E0E0E0]">
                {curr.orgName}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentOrg;
