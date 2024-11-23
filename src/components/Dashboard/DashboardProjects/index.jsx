"use client";
import AppButton from "@/UI/AppButton";
import AppSearch from "@/UI/AppSearch";
import AppTable from "@/UI/AppTable";
import React, { useState } from "react";
import { FilePlus } from "react-feather";
import CreateProject from "./CreateProject";

const sampleData = [
  { id: 1, name: "John Doe", age: 30, city: "New York" },
  { id: 2, name: "Jane Smith", age: 25, city: "Los Angeles" },
  { id: 3, name: "Bob Johnson", age: 35, city: "Chicago" },
  { id: 4, name: "Alice Brown", age: 28, city: "Houston" },
  { id: 5, name: "Charlie Davis", age: 42, city: "Phoenix" },
  { id: 6, name: "Eva Wilson", age: 31, city: "Philadelphia" },
  { id: 7, name: "Frank Miller", age: 39, city: "San Antonio" },
  { id: 8, name: "Grace Taylor", age: 27, city: "San Diego" },
  { id: 9, name: "Henry Anderson", age: 33, city: "Dallas" },
  { id: 10, name: "Ivy Martinez", age: 29, city: "San Jose" },
  { id: 11, name: "Jack Robinson", age: 36, city: "Austin" },
  { id: 12, name: "Kelly White", age: 32, city: "Jacksonville" }
];

const columns = [
  { key: "id", label: "ID" },
  { key: "projectImage", label: "Image" },
  { key: "name", label: "Name" },
  { key: "status", label: "Status" },
  { key: "city", label: "City" }
];

const DashboardProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState({
    createProject: false,
    editProject: false
  });

  const handleCallback = () => {
    setIsModalOpen((prev) => ({ ...prev, createProject: true }));
  };
  return (
    <div className="container mx-auto p-4 bg-white rounded-md">
      <div className="flex justify-between items-center pb-4">
        <p className="text-20 font-bold text-border-dark uppercase">All Projects</p>
        <div className="flex justify-between items-center gap-4">
          <AppButton
            text="Create project"
            icon={FilePlus}
            callback={() => handleCallback()}
            customStyles={"hover:bg-blue-500 bg-brand text-white px-2 justify-start"}
          />
          <AppSearch />
        </div>
      </div>
      <AppTable data={sampleData} columns={columns} itemsPerPage={5} />

      {isModalOpen?.createProject && <CreateProject setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default DashboardProjects;
