import {useEffect, useState} from "react";
import {getPosts} from "../services.api/services.api";
import Post from "../post/Post";

export default function Posts({match: {url}}) {

    let [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then(value => setPosts(value.data))
    }, [])

    return (
        <div>
            {
                posts.map(value => <Post post={value} url={url}/>)
            }
        </div>
    )
}