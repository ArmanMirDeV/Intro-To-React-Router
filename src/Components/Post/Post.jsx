import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate()
    const handleNavigate = () =>{
        navigate(`/posts/${id}`)
    }

    return (
        <div style={{border: '2px solid red', margin:'10px'}} > 
            <h3>{title}</h3>
            <Link to={`/posts/${id}`} ><button style={{margin:'10px'}} >Show Details</button></Link>

            <button onClick={handleNavigate} >Details Of: {id}</button>
        </div>
    );
};

export default Post;