'use client'
import React from 'react'
import Topbar from './Topbar'
import Header from './Header'
import ProfileCard from './ProfileCard'
import LinkedinProfile from './LinkedinProfile'

const HomeComponents = () => {

    const isWebComponent = [
        {
            id:1,
            title: 'Topbar',
            component: <Topbar />,
            show: false,
        },
        {
            id:2,
            title: 'ProfileCard',
            component:  <ProfileCard />,
            show: true,
        },
        {
            id:3,
            title: 'Header',
            component:<Header />,
            show: true,
        },
        {
            id:4,
            title: 'LinkedinProfile',
            component:<LinkedinProfile />,
            show: true,
        },
    ]

    return (
        <div>
            {
              isWebComponent?.map((compo)=> compo?.show && 
                (<div className="" key={compo?.id}>
                    {compo?.component}
                </div>)
            )}
        </div>
    )
}

export default HomeComponents