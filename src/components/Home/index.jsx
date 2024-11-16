'use client'
import React from 'react'
import Topbar from './Topbar'
import Header from './Header'
import ProfileCard from './ProfileCard'
import LinkedinProfile from './LinkedinProfile'
import MyTabs from '../Mydata/MyTabs'

const HomeComponents = () => {

    const isWebComponent = [
        {
            id: 1,
            title: 'Topbar',
            component: <Topbar />,
            show: false,
        },
        {
            id: 2,
            title: 'ProfileCard',
            component: <ProfileCard />,
            show: true,
        },
        {
            id: 3,
            title: 'Header',
            component: <Header />,
            show: false,
        },
        {
            id: 4,
            title: 'LinkedinProfile',
            component: <LinkedinProfile />,
            show: false,
        },
        {
            id: 5,
            title: 'Mytabs',
            component: <MyTabs />,
            show: true,
        },
    ]

    return (
        <div>
            {
                isWebComponent?.map((compo) => compo?.show &&
                    (<div key={compo?.id}>
                        {compo?.component}
                    </div>)
                )}
        </div>
    )
}

export default HomeComponents