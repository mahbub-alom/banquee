"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa";
import Button from "./Button";

const NavBar = () => {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path
      ? "bg-gray-200 text-black transition-all duration-300"
      : "hover:bg-gray-100 transition-all duration-300";

  const navItem = (
    <>
      <li>
        <Link href="/feature" className={`p-2 rounded ${isActive("/feature")}`}>
          Feature
        </Link>
      </li>
      <li>
        <Link href="/compare" className={`p-2 rounded ${isActive("/compare")}`}>
          Compare <FaAngleDown />
        </Link>
      </li>
      <li>
        <Link href="/support" className={`p-2 rounded ${isActive("/support")}`}>
          Support
        </Link>
      </li>
      <li>
        <Link href="/blogs" className={`p-2 rounded ${isActive("/blog")}`}>
          Blog <FaAngleDown />
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white shadow-sm md:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-28 p-2 shadow text-black bg-white"
          >
            {navItem}
          </ul>
        </div>
        <Link href="/" className="text-3xl font-bold text-[#5BB5A2]">
          banquee.
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-black">{navItem}</ul>
      </div>
      <div className="navbar-end gap-5">
        <button className="text-[#5bb5a2] font-bold">Login</button>
        <Button title="Open Account"/>
      </div>
    </div>
  );
};

export default NavBar;
