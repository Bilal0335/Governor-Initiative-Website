"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/logo.png";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CompulsoryData } from "@/data/main/compulsory";
import { Tracks } from "@/data/main/tracks";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
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
  const [showMenu, setShowMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-30 w-full bg-main backdrop-blur-3xl print:hidden">
        <div className="m-auto flex h-16 w-[95%] items-center justify-between md:h-20 lg:w-[90%] xl:w-[1300px]">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="GIAIC Logo"
              width={90}
              className="mt-14 w-[70px] sm:mt-20 sm:w-[80px] md:w-[90] "
            />
          </Link>
          <h3 className="text_shadow hidden text-[15px] font-extrabold text-[#b9d8f3] lg:block xl-lg:text-xl xl:text-2xl">
            Tuition Free Education Program on Latest Technologies
          </h3>
          <h3 className="text_shadow text-[1.125rem] lg:hidden font-extrabold text-[#b9d8f3]">
            Tuition Free Program
          </h3>
          <div className="hidden items-center gap-5 text-[#FAF9F6] sm:flex lg:gap-10">
            {navLinks.map((item) => (
              <Link href={item.link} key={item.id}>
                <div className="capitalize">{item.title}</div>
              </Link>
            ))}
            <div
              className="relative cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            >
              <div className="flex items-center capitalize">
                Courses <IoIosArrowDown className="pl-2 size-5" />
              </div>
              {showMenu && (
                <div className="my absolute right-2 mt-2 w-48 rounded-lg bg-white text-black shadow-custom">
                  <div className="bg-zinc-50 p-7 h-[300px] sm:h-auto overflow-auto">
                    <h4 className="text-black text-xl font-bold pb-3 text-left">
                      Courses
                    </h4>
                    {CompulsoryData.map((val) => (
                      <Link href={`/compulsory/${val.id}`} key={val.id}>
                        <div className="py-1 px-2 text-sm text-[#27272a] hover:text-main">
                          {val.text}
                        </div>
                      </Link>
                    ))}
                    <h4 className="mt-5 font-bold text-[#27272a] text-lg text-left border-t border-zinc-300 pt-5 pb-3">
                      Advance Courses
                    </h4>
                    {Tracks.map((val) => (
                      <Link
                        href={`/tracks/${val.id}/4`}
                        key={val.id}
                        onClick={() => setShowMenu(false)} // Closing menu on click
                      >
                        <div className="py-1 px-2 text-sm text-[#27272a] hover:text-main">
                          {val.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Mobile Menu */}
          <div className="block sm:hidden">
            <FiMenu
              size={24}
              className="text-white"
              onClick={() => setOpenMenu(!openMenu)}
            />
          </div>
        </div>
      </div>
      <div
        className={`fixed left-0 top-0 z-40 h-full w-full bg-main print:hidden ${
          !openMenu && "hidden"
        }`}
      >
        <div className="absolute right-5 top-5">
          <RxCross1
            className="text-white "
            size={25}
            onClick={() => setOpenMenu(false)}
          />
        </div>
        {/* mobile navigation link */}
        <div className="m-auto mt-20 flex w-[90%] flex-col text-base font-normal text-white">
          {navLinks.map((items) => (
            <Link
              href={items.link}
              onClick={() => setOpenMenu(false)}
              key={items.id}
            >
              <div className="border-b border-[#1468a5] py-5 capitalize">
                {items.title}
              </div>
            </Link>
          ))}
          {/* course link */}
          <div
            className={`py-5 ${!showMenu && "border-b"} border-[#146895] `}
            onClick={() => setShowMenu(!showMenu)}
          >
            <div className="flex items-center justify-between">
              Courses
              <IoIosArrowDown size={16} />
            </div>
            {/* Advacourse cour wla link */}
            <div
              className={`overflow-auto rounded-xl bg-white ${
                showMenu ? "h-auto" : "h-0 overflow-hidden"
              }`}
            >
              <h4
                className="mt-3
               px-2 text-left text-lg font-bold text-zinc-800"
              >
                Core Corses
              </h4>

              {CompulsoryData.map((val, index) => (
                <Link
                  onClick={() => setOpenMenu(false)}
                  key={index}
                  href={`/compulsory/${val.id}`}
                >
                  <div className="py-3 text-zinc-600 sm:text-base pl-2 text-sm hover:text-main">
                    {val.text}
                  </div>
                </Link>
              ))}
              <h4
                className="mt-3
               px-2 text-left text-lg font-bold text-zinc-800 border-t border-zinc-30 pt-5"
              >
                Advanced Corses
              </h4>

              {Tracks.map((val, index) => (
                <Link
                  onClick={() => setOpenMenu(false)}
                  key={index}
                  href={`/tracls/${val.name}`}
                >
                  <div className="py-3 text-zinc-600 sm:text-base pl-2 text-sm hover:text-main">
                    {val.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
