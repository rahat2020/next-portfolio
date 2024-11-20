"use client";

import useScreenSize from "@/hooks/useScreenSize";
import { getPlayerDimensions } from "@/utils/appHelpers";
import { useState, useRef, useEffect } from "react";
import { ThumbsDown, ThumbsUp } from "react-feather";
import ReactPlayer from "react-player";

const VideoCard = ({ data }) => {
  const { title, description, likes, dislikes, src } = data || {};
  const [progress, setProgress] = useState(0);
  const [userAction, setUserAction] = useState(null);
  const videoRef = useRef(null);
  const screenSize = useScreenSize();
  const { width, height } = getPlayerDimensions(screenSize);

  const handleLike = () => {
    console.log("log");
    setUserAction();
  };
  const handleDislike = () => {
    console.log("log");
    setUserAction();
  };
  const handleProgress = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleProgress);
    }
    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", handleProgress);
      }
    };
  }, []);

  return (
    <div className="w-[22rem] mt-4 mx-auto overflow-hidden rounded-xl shadow-lg bg-white transition-all duration-300 hover:shadow-xl">
      <div className="relative group">
        <ReactPlayer url={src} controls light width={width} height={height} />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-600">
          <div className="h-full bg-blue-500" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <button
              className={`flex items-center space-x-1 ${
                userAction === "like" ? "text-blue-500" : "text-gray-500 dark:text-gray-400"
              } hover:text-blue-500 transition-colors duration-300`}
              onClick={handleLike}
              aria-label="Like"
            >
              <ThumbsUp className="w-5 h-5" />
              <span>{likes}</span>
            </button>
            <button
              className={`flex items-center space-x-1 ${
                userAction === "dislike" ? "text-red-500" : "text-gray-500 dark:text-gray-400"
              } hover:text-red-500 transition-colors duration-300`}
              onClick={handleDislike}
              aria-label="Dislike"
            >
              <ThumbsDown className="w-5 h-5" />
              <span>{dislikes}</span>
            </button>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {Math.floor(progress)}% watched
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 transition-colors duration-300">
          #nature
        </span>
        <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 transition-colors duration-300">
          #travel
        </span>
      </div>
    </div>
  );
};
export default VideoCard;
