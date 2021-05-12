import {useEffect, useState} from "react";
import {getUserPosts} from "../services.api/services.api";
import OnePost from "../one.post/OnePost";

export default function UserPosts({match: {params: {id}}}) {

    let [posts, setPosts] = useState([])
    useEffect(()=>{
        getUserPosts(id).then(value => setPosts(value.data))
    },[])

    return (
        <div>
            {
                posts.map(value => <OnePost post={value}/>)
            }
        </div>
    )
}