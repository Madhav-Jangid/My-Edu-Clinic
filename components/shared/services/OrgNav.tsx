"use client"

import React from 'react'
import { ComboBox } from './utils/ComboBox'
import OrgMainnav from './utils/OrgMainnav'
import { LogOut, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import ServiceLogo from '@/components/ui/ServiceLogo'
import AnalyticsLogo from '@/components/ui/AnalyticsLogo'
import ProjectLogo from '@/components/ui/ProjectLogo'

const OrgNav = () => {

  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const LogoutNow = () => {

    document.cookie = "token=; Max-Age=0; path=/;";
    document.cookie = "role=; Max-Age=0; path=/;";

    localStorage.removeItem('x-auth-token');
    router.push('/');
  }

  return (
    <div className='h-20 border-b flex items-center justify-between lg:px-28 px-10'>
      {/* Mobile Navigation Button */}
      <button
        title='button'
        className="lg:hidden focus:outline-none"
        onClick={toggleMobileMenu}
      >
        <svg className="w-6 h-6 fill-current text-gray-700" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      {/* combobox navbar for creating service  */}
      <div>
        <ComboBox />
      </div>

      <div className='md:self-center '>
        <h1 className="text-2xl font-extrabold">
          <Link href={"/"}> Educlinic</Link>
        </h1>
      </div>

      {/* Navbar for routes of particular services  */}
      <div className={`absolute left-0 top-[80px] z-50 border-r border-r-gray-300 bg-[#EEF2FE] w-72 pt-10 h-screen ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <Link className='border border-gray-300 rounded-full  flex items-center justify-start gap-3 pl-8 h-[44px] max-w-[70%] mx-auto m-4' href={`/serviceprovider/dashboard`}>
          <ServiceLogo />
          <p>Overview</p>
        </Link>
        <Link className='border border-gray-300 rounded-full flex items-center justify-start gap-3 pl-8 h-[44px] max-w-[70%] mx-auto m-4' href={`/serviceprovider/analytics`} >
          <AnalyticsLogo />
          <p>Anaylytics</p>
        </Link>
        <Link className='border border-gray-300 rounded-full flex items-center justify-start gap-3 pl-8 h-[44px] max-w-[70%] mx-auto m-4' href={`/serviceprovider/projects`} >
          <ProjectLogo />
          <p>Projects</p>
        </Link>
      </div>


      {/* //useavartar and logout button  */}
      <div className='flex gap-1 sm:gap-4' >
        <div onClick={LogoutNow} className='flex gap-3 mx-2 sm:mx-4 justify-center items-center cursor-pointer'>
          <LogOut size={22} />
          <p className='hidden sm:block'>Logout</p>
        </div>
        <div className='cursor-pointer flex gap-3 mx-2 sm:mx-4 justify-center items-center'>
          <User className='text-blue-700' size={22} />
          <p className='hidden sm:block'>Profile</p>
        </div>


      </div>
    </div >
  )
}

export default OrgNav
