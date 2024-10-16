import Image from "next/image";
import React from "react";

const StudentHero = () => {
  return (
    <>
      <div className="w-full h-[70vh] sm:h-[76vh] md:h-3/4 bg-[url('/home2.svg')] bg-cover bg-center relative overflow-hidden">
        {/* */}
        <div className="radial w-full h-[30rem] sm:h-[48rem] absolute z-10 -bottom-32 sm:-bottom-60 left-1/2 transform -translate-x-1/2 border-2 border-white rounded-t-full">
          <div className="flex flex-col items-center gap-5 sm:gap-10 md:gap-10 justify-center pt-10  sm:pt-16 md:pt-20 px-4">
            <button className="bg-transparent border border-white rounded-3xl px-6 py-2 md:px-8 md:py-3 text-blue-700">
              Explore Services
            </button>

            <div className="w-full sm:w-2/3 md:w-3/4 lg:w-1/2 flex flex-col items-center gap-6 md:gap-8 justify-center m-auto">
              <h2 className="w-[18rem] sm:w-[70vw] sm:text-4xl md:text-4xl lg:text-5xl xl:text-3xl xl:w-[25rem] font-bold text-center">
                Explore Your Educational{" "}
                <span className="text-blue-700 underline">MarketPlace</span> At
                One Place
              </h2>
              <p className="text-center sm:w-[75vw] w-[21rem] md:w-3/4 lg:w-2/3 text-[#3C3C44] text-sm md:text-base">
                Explore your marketplace where you can connect with service
                providers and organizers offering solutions for student growth
                and upskilling. Now, it's time to grow!
              </p>
            </div>

            <button className="bg-blue-700 border border-white rounded-3xl px-6 py-2 md:px-8 md:py-3 text-white">
              Tell us your Needs
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 pt-12">
        <span className="flex items-center gap-2">
          <Image src="/ticks.svg" alt="ticks" width={20} height={20} />
          <span>Counselling Services</span>
        </span>
        <span className="flex items-center gap-2">
          <Image src="/ticks.svg" alt="ticks" width={20} height={20} />
          <span>Scholarship Programs</span>
        </span>
        <span className="flex items-center gap-2">
          <Image src="/ticks.svg" alt="ticks" width={20} height={20} />
          <span>Academic Advising</span>
        </span>
        <span className="flex items-center gap-2">
          <Image src="/ticks.svg" alt="ticks" width={20} height={20} />
          <span>Funding and Support</span>
        </span>
        <span className="flex items-center gap-2">
          <Image src="/ticks.svg" alt="ticks" width={20} height={20} />
          <span>Internships</span>
        </span>
      </div>
    </>
  );
};

export default StudentHero;
