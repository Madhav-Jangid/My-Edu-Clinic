import AnayModule from '@/components/shared/services/AnayModule'
import OrgNav from '@/components/shared/services/OrgNav'
import { BarChart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import Image from 'next/image'
import AnalyticsLogo from '@/components/ui/AnalyticsLogo'
import ServiceLogo from '@/components/ui/ServiceLogo'
import ProjectLogo from '@/components/ui/ProjectLogo'



const page = () => {
  return (
    <div>
      <OrgNav />
      <div className='flex min-h-screen'>
        <div className='bg-[#EEF2FE] w-96 pt-10 lg:block hidden'>
          <Link className='rounded-full  flex items-center justify-start gap-3 pl-8 h-[44px] max-w-[60%] mx-auto m-4' href={`/serviceprovider/dashboard`}>
            <ServiceLogo />
            <p>Your Services</p>
          </Link>
          <Link className='rounded-full border border-[#1D4ED8] flex items-center justify-start gap-3 pl-8 h-[44px] max-w-[60%] mx-auto m-4' href={`/serviceprovider/analytics`} >
            <AnalyticsLogo stroke={'#1D4ED8'} />
            <p className='text-[#1D4ED8]'>Anaylytics</p>
          </Link>
          <Link className='rounded-full flex items-center justify-start gap-3 pl-8 h-[44px] max-w-[60%] mx-auto m-4' href={`/serviceprovider/projects`} >
            <ProjectLogo />
            <p>Projects</p>
          </Link>
        </div>
        <div className='flex-1 bg-[#F3F4FD] md:px-1 px-8 relative'>
          <div className='h-28 w-full border-b-2  border-b-white  flex flex-col  justify-center md:px-14 p-3' >
            <div>
              <h1 className='text-2xl font-semibold' >Anaylytics</h1>
              <p className='text-sm text-zinc-700' >Explore your analytics and know your booming service</p>
            </div>
          </div>
          <AnayModule />
        </div>
      </div>
    </div>
  )
}

export default page
