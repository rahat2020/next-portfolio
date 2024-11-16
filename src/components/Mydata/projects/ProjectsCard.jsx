'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, GitHub } from 'react-feather'
import { getClassName } from '@/utils/appHelpers'

const ProjectsCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { title, description, imageUrl, technologies, githubUrl, liveUrl } = data || {};
  console.log("🚀 ~ ProjectsCard ~ data:", data)

  return (
    <div
      className="w-[22rem] mt-4 rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-300 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-black">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {technologies?.map((tech, index) => (
          <span key={index} className={`inline-block ${getClassName(tech)} rounded-full px-3 py-1 text-10 font-semibold mr-2 mb-2`}>
            {tech}
          </span>
        ))}
      </div>
      <div className="px-6 py-4 flex justify-between">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300"
        >
          <GitHub className="w-5 h-5 mr-2" />
          <span>GitHub</span>
        </a>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-green-500 hover:text-green-600 transition-colors duration-300"
        >
          <ExternalLink className="w-5 h-5 mr-2" />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  )
}

export default ProjectsCard;