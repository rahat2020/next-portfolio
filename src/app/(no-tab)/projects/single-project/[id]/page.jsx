import React from 'react';
import SingleProject from '@/components/Mydata/SingleProject/SingleProject';
import ProfileCard from '@/components/Home/ProfileCard';

const SingleProjectPage = ({ params }) => {
    return (
        <>
            <ProfileCard /><SingleProject projectID={params?.id} />
        </>
    )
}

export default SingleProjectPage