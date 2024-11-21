"use client";

import { useState } from "react";
import { alterredUserAvatar } from "@/utils/appHelpers";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "react-feather";

const VideoInfo = () => {
  const [expanded, setExpanded] = useState(false);

  const description = `Discover the captivating beauty and hidden dangers of Cape Town, South Africa in this eye-opening documentary. Join us as we explore one of the world's most stunning yet perilous cities, uncovering the complex social dynamics, economic disparities, and ongoing challenges that shape daily life in this iconic destination.
  
  From the majestic Table Mountain to the vibrant streets of the city center, we delve deep into the heart of Cape Town, revealing both its allure and its darker undercurrents. Through interviews with locals, law enforcement, and community leaders, we paint a comprehensive picture of a city grappling with its past while striving for a brighter future.
  
  This documentary offers an unflinching look at:
  • The stark contrast between affluent neighborhoods and impoverished townships
  • The ongoing struggle against crime and gang violence
  • Efforts to address social inequality and promote community development
  • The resilience and spirit of Cape Town's diverse population
  
  Whether you're a traveler, a history buff, or simply curious about global urban issues, this documentary provides invaluable insights into one of Africa's most complex and fascinating cities.
  
  Don't forget to like, subscribe, and share your thoughts in the comments below!
  
  #CapeTown #SouthAfrica #Documentary #UrbanExploration #TravelSafety`;
  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold">
        Cape Town, South Africa | Inside the World&apos;s Most Dangerous Cities (Documentary)
      </h1>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center space-x-2">
          <Image
            src={alterredUserAvatar}
            alt="Channel avatar"
            className="w-10 h-10 rounded-full"
            width={160}
            height={90}
          />
          <div>
            <p className="font-semibold">Java Discover | Free Documentaries</p>
            <p className="text-sm text-gray-500">510K subscribers</p>
          </div>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded-full">Subscribe</button>
      </div>
      <div className="flex space-x-4 mt-4">
        <button className="flex items-center space-x-1 bg-gray-100 px-4 py-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
          <span>6.3K</span>
        </button>
        <button className="flex items-center space-x-1 bg-gray-100 px-4 py-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
          </svg>
          <span>Dislike</span>
        </button>
        <button className="flex items-center space-x-1 bg-gray-100 px-4 py-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
          <span>Share</span>
        </button>
      </div>
      <div className="bg-gray-100 rounded-md p-2 mt-4">
        <div className={`mt-2 ${expanded ? "" : "line-clamp-3"}`}>
          <p className="text-sm text-border-dark font-semibold whitespace-pre-line">
            {description}
          </p>
        </div>
        <button
          className="mt-2 flex items-center text-border-dark font-semibold"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              Show less <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              Show more <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
