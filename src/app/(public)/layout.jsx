"use client";
import React from "react";
import MyTabs from "@/components/Mydata/MyTabs";
import ProfileCard from "@/components/Home/ProfileCard";

const Layout = ({ children }) => {
  return (
    <div className="">
      <ProfileCard />
      <MyTabs>{children}</MyTabs>
    </div>
  );
};

export default Layout;
