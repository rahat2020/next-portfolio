'use client'
import React, { useEffect, useState } from 'react'
import ProjectsCard from './ProjectsCard'
import { projectsData } from '@/data/projectsData'

const ProjectsComponent = () => {
    const [data, setData] = useState(projectsData || [])
    console.log("🚀 ~ ProjectsComponent ~ data:", data)

    return (
        <div className='py-4'>
            <div className="grid grid-cols-3 px-8 gap-2">
                {
                    data?.map((item) => (
                        <ProjectsCard
                            key={item?.id}
                            data={item}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default ProjectsComponent