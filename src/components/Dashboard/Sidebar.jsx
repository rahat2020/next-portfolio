"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { File, Home, Menu, Settings, Users, Video } from "react-feather";

const navItems = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Projects", href: "/dash-project", icon: File },
  { name: "Videos", href: "/dash-videos", icon: Video },
  { name: "Users", href: "/users", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings }
];

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="fixed top-4 left-4 z-40 md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="h-6 w-6" />
      </button>
      <div
        className={`fixed top-0 left-0 z-30 h-full w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 bg-gray-900">
            <h1 className="text-2xl font-bold">Rahat</h1>
          </div>
          <nav className="flex-1 px-4 py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-2 rounded-lg ${
                      pathname === item.href
                        ? "bg-gray-700 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
