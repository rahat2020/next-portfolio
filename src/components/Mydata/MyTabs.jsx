import React from 'react'
import { useDispatch } from 'react-redux';
import Experience from './Experience';
import AppTabs from '@/UI/AppTabs';
import Blogs from './Blogs';
import ProjectsComponent from './projects';

const MyTabs = ({ children }) => {

  const tabData = [
    {
      id: 1,
      path: '/experience',
      label: 'Experience',
      content: <Experience />,
      show: true
    },
    {
      id: 2,
      path: '/projects',
      label: 'Projects',
      content: <ProjectsComponent />,
      show: true
    },
    {
      id: 3,
      path: '/blogs',
      label: 'Blogs',
      content: <Blogs />,
      show: true
    }
  ];

  return (
    <div className='px-4 lg:px-20 py-8'>
      <AppTabs tabs={tabData} id="my-tab" />
      {children}
    </div>
  )
}

export default MyTabs