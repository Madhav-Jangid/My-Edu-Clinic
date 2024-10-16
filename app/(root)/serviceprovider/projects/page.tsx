import OrgNav from '@/components/shared/services/OrgNav'
import { Button } from '@/components/ui/button'
import { getProject } from '@/lib/database/actions/project.action'
import { IProject } from '@/lib/database/models/project.model'
import { ArrowRight, School } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


import AnalyticsLogo from '@/components/ui/AnalyticsLogo'
import ServiceLogo from '@/components/ui/ServiceLogo'
import ProjectLogo from '@/components/ui/ProjectLogo'

const page = async () => {

    const projects = await getProject();


    return (
        <div>
            <OrgNav />
            <div className='flex'>
                <div className='bg-[#EEF2FE] w-96 pt-10  lg:block hidden'>
                    <Link className='rounded-full  flex items-center justify-start gap-3 pl-8 h-[44px] max-w-[60%] mx-auto m-4' href={`/serviceprovider/dashboard`}>
                        <ServiceLogo />
                        <p>Your Services</p>
                    </Link>
                    <Link className='rounded-full flex items-center justify-start gap-3 pl-8 h-[44px] max-w-[60%] mx-auto m-4' href={`/serviceprovider/analytics`} >
                        <AnalyticsLogo />
                        <p>Anaylytics</p>
                    </Link>
                    <Link className=' border border-[#1D4ED8] rounded-full flex items-center justify-start gap-3 pl-8 h-[44px] max-w-[60%] mx-auto m-4' href={`/serviceprovider/projects`} >
                        <ProjectLogo stroke={'#1D4ED8'} />
                        <p className='text-[#1D4ED8]'>Projects</p>
                    </Link>
                </div>
                <div className='min-h-screen flex-1 bg-[#F3F4FD] md:px-1 px-8' >
                    <div className='h-28 w-full border-b-2 border-b-white flex flex-col  justify-center md:px-14 p-3' >
                        <div>
                            <h1 className='text-2xl font-semibold' >Projects</h1>
                            <p className='text-sm text-zinc-700' >Explore all the projects for funding</p>
                        </div>
                    </div>
                    {
                        projects.length < 1 ? <div></div> : <div className='flex flex-wrap md:mx-24 md:mt-14  gap-4 mt-8' >
                            {
                                projects.map((curr: IProject) => {
                                    return <Link href={`/serviceprovider/projects/${curr._id}`}>
                                        <div className='pb-2 md:w-[350px] w-[300px] bg-white rounded-md border-[1px] border-zinc-300' >
                                            <div className='h-[250px]  m-2  rounded-sm' >
                                                <Image className='h-full w-full object-cover rounded-sm' src={curr.poster} height={9000} width={9000} alt='project image' />
                                            </div>

                                            {/* project data image */}

                                            <div className='m-2' >
                                                <h1 className='font-semibold text-lg' >{curr.name}</h1>
                                                <p className='text-[10px] text-gray-600' >{curr.detail}</p>
                                                <div className='mt-4 flex gap-2 items-center'>
                                                    <School className='text-violet-700' strokeWidth={1.5} size={17} />
                                                    <p className='text-sm font-medium' >{curr.college}</p>
                                                </div>


                                                <div className='flex justify-between mt-5' >
                                                    <p className='text-sm font-normal text-violet-700' >Patent: {curr.isGranted}</p>

                                                    <ArrowRight className='text-violet-700' size={15} strokeWidth={1.5} />

                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                })
                            }
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default page
