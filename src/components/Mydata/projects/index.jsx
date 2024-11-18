'use client'
import React, { useState } from 'react'
import ProjectsCard from './ProjectsCard'
import { projectsData } from '@/data/projectsData'

const ProjectsComponent = () => {
    const [data] = useState(projectsData || [])
    return (
        <div className='py-4'>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-8 gap-2">
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