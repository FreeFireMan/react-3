import {useEffect, useState} from "react";
import Post from "../Post/Post";
import './Posts.css'

export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [text, setText] = useState({})

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts([...value]));
    }, [])

    const search = (id) => {
        let findText = posts.find(value => value.id === id);
        setText(findText)

    }


    return (

        <div className='maine-box'>
            <div className='post-list'>

                {
                    posts.map(value => <Post key={value.id} post={value} search={search}/>)
                }

            </div>
            <div className='text'>
                {
                    text && <div>
                        <h3>{text.id}  {text.title}</h3>
                        <p>{text.body}</p> </div>
                }
            </div>
        </div>
    )
}