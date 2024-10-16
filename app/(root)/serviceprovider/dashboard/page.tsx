import OrgNav from "@/components/shared/services/OrgNav";
import OrgServices from "@/components/shared/services/OrgServices";
import React from "react";


import Link from "next/link";
import AnalyticsLogo from '@/components/ui/AnalyticsLogo'
import ServiceLogo from '@/components/ui/ServiceLogo'
import ProjectLogo from '@/components/ui/ProjectLogo'



const page = async () => {
  return (
    <div>
      <OrgNav />
      <div className='flex min-h-screen'>
        <div className='bg-[#EEF2FE] w-96 pt-10 lg:block hidden'>
          <Link className='rounded-full border border-[#1D4ED8] flex items-center justify-start gap-3 pl-8 h-[44px] max-w-[60%] mx-auto m-4' href={`/serviceprovider/dashboard`}>
            <ServiceLogo stroke={'#1D4ED8'} />
            <p className='text-[#1D4ED8]'>Your Services</p>
          </Link>
          <Link className='rounded-full flex items-center justify-start gap-3 pl-8 h-[44px] max-w-[60%] mx-auto m-4' href={`/serviceprovider/analytics`} >
            <AnalyticsLogo />
            <p>Anaylytics</p>
          </Link>
          <Link className='rounded-full flex items-center justify-start gap-3 pl-8 h-[44px] max-w-[60%] mx-auto m-4' href={`/serviceprovider/projects`} >
            <ProjectLogo />
            <p>Projects</p>
          </Link>
        </div>
        <div className='flex-1 bg-[#F3F4FD] md:px-1 px-8 relative'>
        <OrgServices />
        </div>
      </div>
    </div>
  );
};

export default page;
