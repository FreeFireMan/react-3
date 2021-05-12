import {useEffect, useState} from "react";
import {getComments} from "../services.api/services.api";
import OneComment from "../one.comment/OneComment";

export default function Comments({match: {params: {id}}}) {

    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComments(id).then(value => setComments(value.data))
    }, [])

    return (
        <div>
            {comments.map(value => <OneComment comment={value}/>)}
        </div>
    )
}