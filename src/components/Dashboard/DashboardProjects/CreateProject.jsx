"use client";
import AppButton from "@/UI/AppButton";
import AppDropdown from "@/UI/AppDropdown";
import AppModal from "@/UI/AppModal";
import { Loader } from "@/UI/customSVG/loader";
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
const projectStatus = [
  {
    id: 1,
    label: "In Progress",
    show: true
  },
  {
    id: 2,
    label: "Completed",
    show: true
  },
  {
    id: 3,
    label: "On Hold",
    show: true
  },
  {
    id: 4,
    label: "Cancelled",
    show: true
  }
];

const CreateProject = ({ setIsModalOpen }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    features: "",
    teamSize: "",
    startDate: "",
    endDate: "",
    projectType: "",
    status: "In Progress"
  });
  console.log("formData", formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    console.log("files", files);
  };

  const handleCallback = (value, type) => {
    if (type === "teamSize") {
      setFormData((prevData) => ({
        ...prevData,
        teamSize: value?.label
      }));
    } else if (type === "status") {
      setFormData((prevData) => ({
        ...prevData,
        status: value?.label
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Project created successfully!");
      setIsModalOpen((prev) => ({ ...prev, createProject: false }));
      setFormData({});
    }, 3000);
  };

  const disableBtn =
    !formData?.title ||
    !formData?.startDate ||
    !formData?.endDate ||
    !formData?.teamSize ||
    !formData?.status ||
    isLoading;
  console.log("disableBtn", disableBtn);

  const LoaderTitle = () => {
    return (
      <div className="flex justify-center items-center">
        <Loader title="Saving..." />
      </div>
    );
  };
  return (
    <div>
      <AppModal
        isOpen={true}
        onClose={setIsModalOpen}
        customClasses="w-[48rem] min-h-[20rem] max-h-[90vh] bg-white rounded-md"
        title="Create New Project"
      >
        <div className="w-full mx-auto border-gray-300 rounded-md p-2">
          <div className="">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Project Name
              <span className="text-red ms-1 text-14">*</span>
            </label>
            <input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter project name"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex w-full justify-between items-center space-x-2 py-2">
            <div className="w-[25%]">
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                Start Date <span className="text-red ms-1 text-14">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-1.5 pl-10 focus:ring-2 focus:ring-blue-500"
                />
                <Calendar
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
            </div>
            <div className=" w-[25%]">
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                End Date <span className="text-red ms-1 text-14">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-1.5 pl-10 focus:ring-2 focus:ring-blue-500"
                />
                <Calendar
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
              </div>
            </div>
            <div className="w-[25%]">
              <label
                htmlFor="teamSize"
                className="block text-start text-sm font-medium text-gray-700"
              >
                Team Size <span className="text-red ms-1 text-14">*</span>
              </label>
              <AppDropdown
                buttonLabel={formData.teamSize || "0"}
                menuItems={teamSize}
                customStyles="w-full"
                customButtonStyles="w-40"
                callback={(params) => handleCallback(params, "teamSize")}
              />
            </div>
            <div className="flex-col w-[25%] justify-start items-center">
              <label
                htmlFor="Status"
                className="block text-start text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <AppDropdown
                buttonLabel={formData.status || "Status"}
                menuItems={projectStatus}
                customStyles="w-full"
                customButtonStyles="w-40"
                callback={(params) => handleCallback(params, "status")}
              />
            </div>
          </div>

          <div className="py-2">
            <label htmlFor="files" className="block text-sm font-medium text-gray-700">
              Images
            </label>
            <input
              id="files"
              type="file"
              multiple
              value={formData.files}
              onChange={handleFileChange}
              placeholder="Upload images"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="py-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description <span className="text-red ms-1 text-14">*</span>
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
          <div className="py-2">
            <label htmlFor="features" className="block text-sm font-medium text-gray-700">
              Features <span className="text-red ms-1 text-14">*</span>
            </label>
            <textarea
              id="features"
              name="features"
              value={formData.features}
              onChange={handleChange}
              rows="3"
              placeholder="Describe your project features"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between items-center py-4">
            <AppButton
              text="Cancel"
              customStyles="flex justify-start items-center bg-gray-100 border border-gray-300 text-dark py-2 px-6 rounded-md"
              withoutHrefBtn
              callback={(prev) => setIsModalOpen({ ...prev, createProject: false })}
              customBtnStyles="text-center"
            />
            <AppButton
              text={isLoading ? <LoaderTitle /> : "Save"}
              withoutHrefBtn
              customStyles={`${disableBtn && "cursor-not-allowed opacity-50"} flex justify-end items-center bg-brand text-white py-2 px-8 rounded-md`}
              callback={handleSubmit}
              disable={disableBtn}
            />
          </div>

          <Toaster position="top-right" />
        </div>
      </AppModal>
    </div>
  );
};

export default CreateProject;
