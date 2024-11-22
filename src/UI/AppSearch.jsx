"use client";
import React from "react";
import { Search } from "react-feather";

const AppSearch = ({ search = "", setSearch, inputType = "text" }) => {
  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[15rem] border flex justify-between items-center px-4 py-2 rounded-md">
          <input
            type={inputType}
            placeholder="Search project"
            defaultValue={search || ""}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none"
          />
          <Search className="text-border-regular" />
        </div>
      </div>
    </div>
  );
};

export default AppSearch;
