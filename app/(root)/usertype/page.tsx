"use client";
import StartNav from "@/components/shared/start/StartNav";
import { User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [isServiceProvider, setIsServiceProvider] = useState(false);
  const [isServiceSeeker, setIsServiceSeeker] = useState(false);
  const router = useRouter();

  const handleAccountCreation = () => {
    if (isServiceProvider) {
      router.push("/serviceprovider/register");
    } else if (isServiceSeeker) {
      router.push("/student/auth/register");
    } else {
      alert("Please select an option to continue.");
    }
  };

  return (
    <div>
      <StartNav />
      {/* Hero section */}
      <div className="flex flex-col pt-32 items-center gap-14 bg-[#EEF2FE] h-[41.9rem] overflow-hidden">
        {/* Heading */}
        <div className="px-4">
          <p className="text-center font-bold text-2xl sm:text-2xl lg:w-[24vw]">
            Join as a Service Seeker or Service Provider
          </p>
        </div>

        {/* Card sections */}
        <div className="flex flex-col sm:flex-row justify-between w-[90vw] sm:w-[70vw] md:w-[50vw] lg:w-[32vw] h-auto sm:h-[8rem]">
          {/* Card 1 for Service Provider */}
          <div
            className={`w-full sm:w-52 mb-4 sm:mb-0 border-2 ${isServiceProvider ? "border-blue-500" : "border-white"
              } bg-gray-50 rounded-xl px-6 pt-4 pb-6`}
          >
            <div className="flex justify-between items-center">
              <User />
              <div
                onClick={() => {
                  setIsServiceProvider(true);
                  setIsServiceSeeker(false);
                }}
                className={`w-4 h-4 border border-blue-700  cursor-pointer rounded-full ${isServiceProvider ? "bg-blue-700" : "bg-white"
                  }`}
              ></div>
            </div>
            <h6 className="font-bold text-sm mt-4">I'm a service provider</h6>
            <p className="font-normal text-sm mt-1">I will provide service</p>
          </div>

          {/* Card 2 for Service Seeker */}
          <div
            className={`w-full sm:w-52 border-2 ${isServiceSeeker ? "border-blue-500" : "border-white"
              } bg-gray-50 rounded-xl px-6 pt-4 pb-6`}
          >
            <div className="flex justify-between items-center">
              <User />
              <div
                onClick={() => {
                  setIsServiceSeeker(true);
                  setIsServiceProvider(false);
                }}
                className={`w-4 h-4 border border-blue-700  cursor-pointer rounded-full ${isServiceSeeker ? "bg-blue-700" : "bg-white"
                  }`}
              ></div>
            </div>
            <h6 className="font-bold text-sm mt-4">I'm a service seeker</h6>
            <p className="font-normal text-sm mt-1">I need a service</p>
          </div>
        </div>

        {/* Footer */}



        <div className={!(isServiceProvider || isServiceSeeker) ? "opacity-0" : "flex justify-center flex-col items-center gap-3"}>
          <div>
            <button
              onClick={handleAccountCreation}
              disabled={isServiceProvider === isServiceSeeker}
              className="h-8 gap-2 bg-[#E9E9E9] hover:bg-blue-700 text-[#6B6B6B] hover:text-white duration-200 transition-all rounded-3xl flex items-center px-6 py-5"
            >
              <p className="text-sm font-semibold">Create an account</p>
            </button>
          </div>

          <p className="text-[#6B6B6b] text-center font-normal ">
            Already have an account?{" "}
            <Link
              className="underline text-blue-700"
              href={
                isServiceProvider
                  ? "/serviceprovider/login"
                  : "/student/auth/login"
              }
            >
              Login as {isServiceProvider
                ? "Service Provider"
                : "Service Seeker"}
            </Link>


          </p>
        </div>

      </div>
    </div>
  );
};

export default Page;
