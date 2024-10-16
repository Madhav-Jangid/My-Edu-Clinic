"use client";
import { useState } from "react";
import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const StudentNav = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const LogoutNow = () => {


    document.cookie = "token=; Max-Age=0; path=/;";
    document.cookie = "role=; Max-Age=0; path=/;";

    
    localStorage.removeItem("x-auth-token");
    router.push("/");
  };

  interface NavItem {
    name: string;
    href: string;
  }

  const navItems: NavItem[] = [
    { name: "Home", href: "/student/home" },
    { name: "Organizations", href: "/student/home/organization" },
    { name: "Discussions", href: "/student/home/discussion" },
    { name: "Project fundraising", href: "/student/project" },
  ];
  return (
    <header className="flex justify-between px-6 sm:px-32 items-center q">
      {/* Mobile Navigation Button */}
      <button
        title="Toggle Menu"
        className="md:hidden focus:outline-none"
        onClick={toggleMobileMenu}
      >
        <svg className="w-6 h-6 fill-current text-gray-700" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {/* Logo Div */}
      <div className="text-2xl font-extrabold">
        {" "}
        {/* Added flex-grow for responsiveness */}
        <a href="/student/home">
          <h1>EduClinic</h1>
        </a>
      </div>

      {/* Navigation Links */}
      <nav
        className={`md:flex gap-8 p-5 md:relative absolute md:top-0 top-16 bg-white left-0  space-x-4 rounded-r-lg shadow-lg md:shadow-none  ${isMobileMenuOpen ? "block" : "hidden"
          }`}
      >
        {" "}
        {/* Hidden on small screens */}
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className=''
          >
            <p>{item.name}</p>
          </Link>
        ))}
      </nav>

      {/* User Section */}
      <div className="flex items-center gap-4">
        <div className="cursor-pointer">
          <Link href={`/student/profile`}
            className="flex justify-center items-center gap-1">
            <User className="text-zinc-600" size={20} />
            <p className="text-sm text-[#242424] font-normal">Profile</p>
          </Link>
        </div>
        <div
          onClick={LogoutNow}
          className="flex justify-center items-center gap-1 cursor-pointer "
        >
          <LogOut className="text-zinc-500" size={20} />
          <p className="text-sm font-normal text-[#242424] ">Logout</p>
        </div>
      </div>
    </header >
  );
};

export default StudentNav;
