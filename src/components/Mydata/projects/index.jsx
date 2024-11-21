"use client";
import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import { projectsData } from "@/data/projectsData";

const ProjectsComponent = () => {
  const [data] = useState(projectsData || []);
  return (
    <div className="py-4">
      <div className="flex justify-start flex-wrap px-4 lg:px-8 gap-8">
        {data?.map((item) => (
          <ProjectsCard key={item?.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsComponent;
