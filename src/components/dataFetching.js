import React, { useEffect, useState } from 'react';
import callApi from "../utils/apiCaller";




function dataFetching() {
    const [posts, setPost] = useState([])
    
    useEffect(() => {
        
        callApi ('GET', {checkValue},{} ).then (res => {
            setPost(res.data)
        })
    },[])

    return (
        <div>
                {posts.map(post => (
                    <a href="" key={post.endAddress}>{post.duration}</a>
                ))}
            
        </div>
    );
}

export default dataFetching;