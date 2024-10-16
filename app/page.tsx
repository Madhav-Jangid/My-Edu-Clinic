import StartNav from "@/components/shared/start/StartNav";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen ">
      <StartNav />
      <div className="h-[41.9rem] bg-gradient-to-tr from-[#DADAFF] via-[#EEF2FE] to-[#DADAFF] flex items-center justify-center ">
        <div className="h-4/5 w-4/5 bg-transparent border border-white rounded-[67px] flex items-center justify-center">
          <div className="h-4/5 w-full max-w-4xl flex flex-col items-center justify-center gap-6 md:gap-12 px-4">
            <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl leading-[2.5rem] sm:leading-[3rem] w-full md:w-[38vw] text-center">
              Unleash the Educational Sector with the platform Educlinic
              <br />
              <span className="text-blue-700">and Upskill Yourself</span>
            </h1>
            <p className="font-normal text-sm sm:text-base text-center w-full md:w-[48vw]">
              Welcome to ‘Educlinic’ Where Learning Meets Opportunity. Connect
              with top-notch educators and trainers seamlessly. Discover
              tailored modules across various categories. Our ‘Best Match’
              feature ensures you find the perfect fit based on your
              qualifications and skills. Start your educational journey today!
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <div className="h-10 bg-transparent border border-blue-600 rounded-3xl flex items-center px-8 cursor-pointer">
                <p className="text-sm font-medium text-black">
                  <Link href={"/usertype"}>Login</Link>
                </p>
              </div>
              <div className="h-10 bg-blue-700 rounded-3xl flex items-center px-8 cursor-pointer">
                <p className="text-sm font-medium text-white">
                  <Link href={"/usertype"}>Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
