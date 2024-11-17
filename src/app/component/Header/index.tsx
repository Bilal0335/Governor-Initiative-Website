"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/logo.png";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CompulsoryData } from "@/data/main/compulsory";
type NavLink = {
  title: string;
  link: string;
  id: string;
};

const navLinks: NavLink[] = [
  { title: "home", link: "/", id: "1" },
  { title: "apply", link: "/apply", id: "2" },
  { title: "jobs", link: "/jobs", id: "3" },
  { title: "result", link: "/result", id: "4" }
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="sticky top-0 z-30 w-full bg-main backdrop-blur-3xl print:hidden">
      <div className="m-auto flex h-16 w-[95%] items-center justify-between md:h-20 lg:w-[90%]  xl:w-[1300px]">
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="GIAIC Logo"
            width={90}
            className="mt-14 w-[70px] sm:mt-20 sm:w-[80px] md:w-[90]"
          />
        </Link>
        <h3 className="text_shadow hidden  text-[15px] font-extrabold text-[#b9d8f3] lg:block xl-lg:text-xl xl:text-2xl">
          Tuition Free Education Program on Latest Technologies
        </h3>
        <h3 className="text_shadow  text-[1.125rem] lg:hidden font-extrabold text-[#b9d8f3]">
          Tuition Free Program{" "}
        </h3>
        <div className="hidden items-center gap-5 text-[#FAF9F6] sm:flex lg:gap-10">
          {navLinks.map((item) => (
            <Link href={item.link} key={item.id}>
              <div className="capitalize">{item.title}</div>
            </Link>
          ))}
          <div
            className="relative cursor-pointer "
            onClick={() => setShowMenu(!showMenu)}
          >
            <div className="flex items-center capitalize">
              Courses <IoIosArrowDown className="pl-2 size-5" />
            </div>
            {showMenu && (
              <div className="my absolute right-2 mt-2 w-48 rounded-lg bg-white text-black">
                <div className="box_shadow bg-zinc-50 p-7 h-[300px] sm:h-auto overflow-auto">
                  <h4 className="text-black text-xl font-bold pb-3 text-left">Courses</h4>
                  {
                    CompulsoryData.map((val)=>(
                      <Link href={`/compulsory/${val.id}`} key={val.id}>
                        <div className="py-1 px-2 text-sm text-black hover:text-main">{val.text}</div>
                      </Link>
                    ))
                  }
                  <h4>Advance Courses</h4>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
