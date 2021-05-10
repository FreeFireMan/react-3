import {useEffect, useState} from "react";
import Comment from "../Comment/Comment";


export  default function Comments() {

    let [comments, setComments] = useState([]);
    let [oneComment, setOneComment] = useState({})

    useEffect(()=>{ fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(value => setComments(value) )
    },[])

    const showComment = (id) => {
        let findComment = comments.find(value => value.id === id);
        setOneComment(findComment)

    }

    return (
        <div>
            <div>
                {
                    comments.map(item => <Comment key={item.id} item={item} showComment={showComment}/>)
                }
            </div>
            <div>
                {
                    oneComment && <div>
                        <h3>{oneComment.id} - {oneComment.name}</h3>
                        <p>{oneComment.email}</p>
                        <p>{oneComment.body}</p>
                    </div>
                }

            </div>
        </div>
    )
}