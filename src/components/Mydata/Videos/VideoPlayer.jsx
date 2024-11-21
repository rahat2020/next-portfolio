"use client";
import useScreenSize from "@/hooks/useScreenSize";
import { getPlayerDimensions } from "@/utils/appHelpers";
import ReactPlayer from "react-player";
import VideoInfo from "./VideoInfo";

const VideoPlayer = () => {
  const screenSize = useScreenSize();
  const { width, height } = getPlayerDimensions(screenSize);
  return (
    <div className="">
      <div className="relative">
        <div className="rounded-md">
          <ReactPlayer
            url="https://youtu.be/HS9eHQ8zY-0?si=QiSF11vYbshgklV6"
            controls
            light
            className="rounded-md"
            width={width}
            height={height}
          />
        </div>
      </div>
      <VideoInfo />
    </div>
  );
};

export default VideoPlayer;
