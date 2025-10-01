import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();

    // console.log(user);
    const userStyle = {
        border:'2px solid pink',
        borderRadius: '20px',
        padding:'10px',
        margin:'10px'
    }
    const params = useParams();
    console.log(params)

    const {website, name} =user;
    return (
        <div style={userStyle} >
            {/* <h3>User Details Here</h3> */}
            <h3>Name: {name}</h3>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;