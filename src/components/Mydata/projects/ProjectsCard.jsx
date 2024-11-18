'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, GitHub, MessageSquare, ThumbsDown, ThumbsUp } from 'react-feather'
import { getClassName, truncateText } from '@/utils/appHelpers'
import Link from 'next/link'

const ProjectsCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { title, description, imageUrl, technologies, githubUrl, liveUrl, createdAt, author, id } = data || {};

  return (
    <div
      className="w-[22rem] mt-4 rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/single-project/${id}`}>
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
          <p className="font-bold text-black text-20">{title}</p>
          <div className="flex gap-2 justify-start items-center">
            <span className='w-2 h-2 bg-yellow-400 rounded-full'></span>
            <span className='text-gray-700 text-10 font-semibold'>{author} -</span>
            <span className='text-gray-700 text-10 font-semibold'>{createdAt}</span>
          </div>
          <p className="text-gray-700 text-base">{truncateText(description, 80)}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {technologies?.map((tech, index) => (
            <span key={index} className={`inline-block ${getClassName(tech)} rounded-full px-3 py-1 text-10 font-semibold mr-2 mb-2`}>
              {tech}
            </span>
          ))}
        </div>
      </Link>
      <div className="px-6 py-4 flex justify-between">
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300"
        >
          <GitHub className="w-5 h-5 mr-2" />
          <span>GitHub</span>
        </Link>
        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-green-500 hover:text-green-600 transition-colors duration-300"
        >
          <ExternalLink className="w-5 h-5 mr-2" />
          <span>Live Demo</span>
        </Link>
      </div>
      <div className="flex justify-between px-6 pb-4">
        <span className='cursor-pointer w-8 h-8 rounded-full bg-red-300 hover:bg-red-400 p-2 flex justify-center items-center'>
          <ThumbsDown className="w-4 h-4 text-white" />
        </span>
        <span className='cursor-pointer w-8 h-8 rounded-full bg-yellow-300 hover:bg-yellow-400 p-2 flex justify-center items-center'>
          <MessageSquare className="w-4 h-4 text-white" />
        </span>
        <span className='cursor-pointer w-8 h-8 rounded-full bg-green-300 hover:bg-green-400 p-2 flex justify-center items-center'>
          <ThumbsUp className="w-4 h-4 text-white" />
        </span>
      </div>
    </div>
  )
}

export default ProjectsCard;