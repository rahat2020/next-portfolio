"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "react-feather";

const AppDropdown = ({
  buttonLabel = "Options",
  customStyles = "flex items-center justify-center bg-gray-100",
  customButtonStyles = "w-32",
  menuItems = [],
  callback = () => {}
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={customStyles}>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className={`flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${customButtonStyles}`}
        >
          <span>{buttonLabel}</span>
          <ChevronDown
            className={`ml-2 h-5 w-5 text-gray-400 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical">
              {menuItems?.map((item, index) => {
                const { label, icon: Icon } = item || {};
                return (
                  item?.show && (
                    <button
                      key={index}
                      onClick={() => callback(item)}
                      className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      {Icon && <Icon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />}
                      <span className="text-border-dark font-semibold text-14">{label}</span>
                    </button>
                  )
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppDropdown;
