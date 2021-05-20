import {useDispatch, useSelector} from "react-redux";
import {getComment} from "../services/Axios";
import {commentsDetails, setComments} from "../../store/action-creators";
import {useEffect} from "react";
import './Comments.css'

export default function Comments() {

    const comments = useSelector(({comments: {comments}}) => comments)
    const commentDetails = useSelector(({comments: {commentDetails}}) => commentDetails)
    const dispatch = useDispatch()

    const fetchComments = async () => {
        const response = await getComment()
        const payload = response.data
        dispatch(setComments(payload))
    }

    useEffect(() => {
        fetchComments()
    }, [])

    return (
        <div className='comments-box'>
            <div className='comments'>
                {
                    comments.map(value => (
                        <p>
                            {`${value.id}. ${value.name}`}
                            <button onClick={() => dispatch(commentsDetails(value))}>Details</button>
                        </p>))
                }
            </div>

            <div className='single-comment'>
                {commentDetails && (
                    <div>
                        <h3>{`${commentDetails.id}. ${commentDetails.name}`}</h3>
                        <p>{commentDetails.body}</p>
                        <p>{commentDetails.email}</p>
                    </div>)}
            </div>
        </div>
    );
}