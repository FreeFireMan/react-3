import {useEffect, useState} from "react";
import Comment from "../Comment/Comment";
import './Comments.css'

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
        <div className="wrapper">
            <div className='com-list'>
                {
                    comments.map(item => <Comment key={item.id} item={item} showComment={showComment}/>)
                }
            </div>
            <div className='one-comment'>
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