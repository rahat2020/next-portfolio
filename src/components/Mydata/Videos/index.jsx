"use client";

import { videoData } from "@/data/videoData";
import React, { useState } from "react";
import VideoCard from "./VideoCard";

const VideosCompo = () => {
  const [data] = useState(videoData || []);
  return (
    <div className="py-4">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-8 gap-2">
        {data?.map((item) => (
          <VideoCard key={item?.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default VideosCompo;
