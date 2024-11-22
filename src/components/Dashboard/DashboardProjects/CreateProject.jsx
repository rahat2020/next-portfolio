"use client";
import AppDropdown from "@/UI/AppDropdown";
import AppModal from "@/UI/AppModal";
import { useState } from "react";
import { Calendar } from "react-feather";
import { toast, Toaster } from "react-hot-toast";

const teamSize = [
  {
    id: 1,
    label: "1",
    show: true
  },
  {
    id: 2,
    label: "2",
    show: true
  },
  {
    id: 3,
    label: "3",
    show: true
  },
  {
    id: 4,
    label: "4",
    show: true
  },
  {
    id: 4,
    label: "5",
    show: true
  }
];

const CreateProject = ({ setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    projectType: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCallback = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      projectType: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Project created successfully!");
    setFormData({});
  };
  return (
    <div>
      <AppModal
        isOpen={true}
        onClose={setIsModalOpen}
        customClasses="w-[48rem] bg-white rounded-md"
        title="Create New Project"
      >
        <div className="w-full mx-auto border-gray-300 rounded-md p-6">
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Project Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter project name"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                  Start Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-2 pl-10 focus:ring-2 focus:ring-blue-500"
                  />
                  <Calendar
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                  End Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-2 pl-10 focus:ring-2 focus:ring-blue-500"
                  />
                  <Calendar
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2 flex ">
              <div className="flex-col w-full justify-start items-center">
                <label
                  htmlFor="projectType"
                  className="block text-start text-sm font-medium text-gray-700"
                >
                  Team Size
                </label>
                <AppDropdown
                  buttonLabel="0"
                  menuItems={teamSize}
                  callback={(params) => handleCallback(params)}
                />
              </div>
              <div className="flex-col w-full justify-start items-center">
                <label
                  htmlFor="projectType"
                  className="block text-start text-sm font-medium text-gray-700"
                >
                  Team Size
                </label>
                <AppDropdown
                  buttonLabel="0"
                  menuItems={teamSize}
                  callback={(params) => handleCallback(params)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                placeholder="Describe your project"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Features
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                placeholder="Describe your project"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
            >
              Create Project
            </button>
          </form>
          <Toaster />
        </div>
      </AppModal>
    </div>
  );
};

export default CreateProject;
