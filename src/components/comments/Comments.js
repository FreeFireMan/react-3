import {useEffect, useState} from "react";
import Comment from "../Comment/Comment";


export default function Comments() {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))
    }, [])


    return (
        <div>
            {
                comments.map(item => <Comment key={item.id} item={item} />)
            }
        </div>

    )
}