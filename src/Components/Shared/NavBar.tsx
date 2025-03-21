"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa";
import { Button } from "../ui/button";
import {MoonIcon, SunIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const NavBar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const navigation = [
    {
      name: "Feature",
      href: "/feature",
      icon: "",
    },
    {
      name: "Compare",
      href: "/compare",
      icon: <FaAngleDown />,
    },
    {
      name: "Support",
      href: "/support",
      icon: "",
    },
    {
      name: "Blogs",
      href: "/blogs",
      icon: <FaAngleDown />,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white dark:bg-gray-900 dark:border-gray-700 shadow-md transition-all backdrop-blur">
      <div className="navbar max-w-custom mx-auto px-4">
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
              className="menu menu-sm dropdown-content rounded-lg mt-3 w-36 p-2 shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            >
              {navigation?.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      `block px-4 py-2 rouned transition`,
                      pathname === item.href
                        ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 "
                    )}
                  >
                    {item.name} {item.icon ? item.icon : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/" className="text-2xl font-bold text-[#5BB5A2]">
            banquee.
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-gray-900 dark:text-gray-100">
            {navigation?.map((item) => (
              <li
                key={item.name}
                className={cn(
                  `flex items-center rounded transition`,
                  pathname === item.href
                    ? "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                )}
              >
                <Link href={item.href}>
                  {item.name} {item.icon ? item.icon : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-5 flex">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative cursor-pointer"
          >
            <SunIcon className="h-5 w-5 text-gray-900 dark:hidden transition-all" />
            <MoonIcon className="h-5 w-5 text-white hidden dark:block transition-all" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
          <button className="text-[#5bb5a2] font-bold">Login</button>
          <Button>Open Account</Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
