'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Calendar, ChevronRight, Clock, GitHub, Globe, Star, Tag, Users } from 'react-feather'

const SingleProject = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const project = {
    title: "Medicare",
    description: "TechNova is an innovative task management application that leverages artificial intelligence to help users organize, prioritize, and complete their tasks more efficiently. The AI suggests optimal task orders, estimates completion times, and provides intelligent reminders based on user behavior and task urgency.",
    longDescription: "TechNova goes beyond traditional task managers by incorporating machine learning algorithms that adapt to each user's unique working style. It features natural language processing for quick task entry, automated categorization, and smart scheduling that takes into account your calendar and energy levels. The application also includes a pomodoro timer with AI-optimized work/break intervals, real-time collaboration features, and insightful productivity analytics to help users continuously improve their time management skills.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7azzXC86UaubPeMjqsIjGQY30kVb5Jq9iyg&s",
    technologies: ["React", "Next.js", "TensorFlow.js", "Node.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://medicareee.vercel.app/",
    repoLink: "https://github.com/rahat2020",
    status: "In Development",
    timeline: "Started: Oct 2024 | Expected Completion: Feb 2025",
    teamSize: 3,
    keyFeatures: [
      "AI-powered task prioritization",
      "Natural language task entry",
      "Smart scheduling with calendar integration",
      "Collaborative task management",
      "Productivity analytics dashboard"
    ],
    starCount: 5
  }

  return (
    <div className="max-w-4xl mt-8 mx-auto p-8 bg-gradient-to-br bg-white rounded-xl shadow-2xl">
      <div className="mb-8 overflow-hidden rounded-xl shadow-lg relative group">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-sm">{project.description}</p>
        </div>
      </div>
      
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{project.title}</h1>
      
      <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1 text-blue-500" />
          <span>{project.status}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1 text-blue-500" />
          <span>{project.timeline}</span>
        </div>
        <div className="flex items-center">
          <Users className="h-4 w-4 mr-1 text-blue-500" />
          <span>Team Size: {project.teamSize}</span>
        </div>
        <div className="flex items-center">
          <Star className="h-4 w-4 mr-1 text-blue-500" />
          <span>{project.starCount} Stars</span>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        {isExpanded ? project.longDescription : project.description}
      </p>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center mb-6"
      >
        {isExpanded ? 'Show Less' : 'Read More'}
        <ChevronRight className={`ml-1 h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
      </button>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {project.keyFeatures.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="h-6 w-6 flex items-center justify-center bg-blue-500 text-white rounded-full mr-2 flex-shrink-0">
                {index + 1}
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-4 py-2 bg-white text-blue-600 rounded-full text-sm font-medium flex items-center shadow-md hover:shadow-lg transition-shadow duration-300">
              <Tag className="h-4 w-4 mr-2" />
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          <Globe className="h-5 w-5 mr-2" />
          View Live Project
        </a>
        <a
          href={project.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          <GitHub className="h-5 w-5 mr-2" />
          View Repository
        </a>
      </div>
    </div>
  )
}

export default SingleProject;