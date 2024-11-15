"use client";
import React, { useState } from "react";
type NavLink = {
  title: string;
  link: string;
  id: string;
};

const navLinks: NavLink[] = [
  { title: "home", link: "/", id: "1" },
  { title: "apply", link: "/apply", id: "2" },
  { title: "job", link: "/jobs", id: "3" },
  { title: "result", link: "/result", id: "4" }
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return(
    <>
    <h1>kdkkd
      
    </h1>
    </>
  );
};

export default Header;
