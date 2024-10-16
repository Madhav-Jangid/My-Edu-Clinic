"use client"

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'
import ModuleForm from './utils/ModuleForm'

type moduleComponentProps = {
  serviceId: string
  categoryName: string
  moduleCategoryId: string
}
const ModuleComponent = ({ serviceId, categoryName, moduleCategoryId }: moduleComponentProps) => {




  return (
    <div className='w-full   md:px-14 p-3 py-8'>
      <div className="flex items-center justify-between border-b pb-4">
        <div className="">
          <h1 className="text-2xl text-zinc-900 font-semibold">
            Your Modules {" "}
          </h1>
          <p className="text-zinc-700">
            {categoryName} / {moduleCategoryId}
          </p>
        </div>
        <Button className='bg-[#1D4ED8] p-7 px-3 pr-6 rounded-full hover:bg-[#1D4ED8] font-normal' >
          <Plus size={30} className="mr-2 border border-white rounded-full p-1" />
          <ModuleForm id={serviceId} type='ADD' categoryName={categoryName} moduleCategoryId={moduleCategoryId} />
        </Button>
      </div>
      <div className='border-b w-full mt-3' ></div>
    </div>
  )
}

export default ModuleComponent
