
import OrgRegisterForm from '@/components/shared/services/OrgRegisterForm'
import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <div className='bg-gradient-to-tr from-red-50 via-slate-100 to-indigo-200 min-h-screen w-full p-2 sm:p-4 md:p-6 lg:p-8 flex items-center justify-center'>
      <div className='border border-white rounded-3xl shadow-lg flex flex-col lg:flex-row w-11/12 max-w-5xl overflow-hidden'>
        {/* Left section */}
        <div className='w-full lg:w-1/2 p-6 sm:p-8 md:p-10 lg:py-32 relative'>
          <div className=' mb-6 lg:mb-10'>
            <h1 className='text-2xl sm:text-3xl lg:text-3xl font-semibold text-center'>EduClinic</h1>
            <p className='text-sm sm:text-base text-slate-500 mt-2 text-center'>Your Educational Marketplace</p>
          </div>
          <div className='flex justify-center'>
            <Image
              src={'/heroimg.svg'}
              alt='Hero Image'
              width={300}
              height={200}
              className='w-full max-w-xs lg:max-w-sm'
            />
          </div>
          {/* Adjusted border */}
          <div className='hidden lg:block absolute top-1/2 right-0 w-px bg-slate-200 transform -translate-y-1/2 border border-white' style={{ height: '70%' }}></div>
        </div>
      <div className='w-full lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-8 flex flex-col justify-center'>
      <div className='text-center lg:text-left mb-6'>
        <p className='font-semibold text-xl text-blue-700 text-center'>EduClinic</p>
        <p className='font-semibold text-2xl mt-2 text-zinc-800 text-center'>Create account!</p>
        {/* <p className='text-sm mt-2 text-zinc-500'>Please Enter Your Details</p> */}
        </div>
        <div className='m-2 sm:flex sm:justify-center'>
          <OrgRegisterForm/>
        </div>

      </div>
      </div>
    </div>
  )
}

export default page
