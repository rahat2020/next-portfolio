"use client";

import { videoData } from "@/data/videoData";
import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import RelatedVideos from "./RelatedVideos";

const VideosCompo = () => {
  const [data] = useState(videoData || []);
  return (
    <div className="py-4">
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-2/3">
            <VideoPlayer />
          </div>
          <div className="lg:w-1/3">
            {data?.map((item) => (
              <RelatedVideos key={item?.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosCompo;
