"use client";

import React, { useState } from 'react'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


import { Plus } from "lucide-react";
import AddDiscuss from '@/components/shared/student/AddDiscuss';

function InputFeildforForm() {


    const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

    return (<>
        <div onClick={() => {
            setIsFormVisible(!isFormVisible)
        }} className="w-[90%] max-w-[500px] p-[1.3rem] bg-[#d2d1d171] rounded-full border-[2px] border-white">
            <div className="w-full h-14  rounded-full flex bg-white p-1">
                <Input
                    className="h-full  rounded-full border-none bg-transparent"
                    placeholder="Add your discussion topics"
                />

                <Button className="bg-[#1D4ED8] rounded-[50%] ml-3 aspect-square p-0 h-full">
                    <Plus />
                </Button>

            </div>
        </div>


        {isFormVisible &&
            <AddDiscuss setIsFormVisible={setIsFormVisible} />
        }
    </>)
}

export default InputFeildforForm
