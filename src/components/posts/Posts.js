import {useEffect} from "react";
import {getPosts} from '../services/Axios';
import {useDispatch, useSelector} from "react-redux";
import {postDescription, setPosts} from "../../store/action-creators";
import "./Posts.css";
import Description from "../description/Description";

export default function Posts() {
    const {posts, description} = useSelector(({posts: {posts, description}}) => ({posts, description}))
    const dispatch = useDispatch();

    const fetchPosts = async () => {
        const {data} = await getPosts();
        dispatch(setPosts(data));
    }

    useEffect(() => {
        fetchPosts();
    }, []);


    return (
        <div className="posts-box">
            <div className='list'>{
                posts.map(value => <p>
                    {`${value.id}. ${value.title}`}
                    <button onClick={() => dispatch(postDescription(value))}>open</button>
                </p>)

            }</div>
            <div className='post'>
                {
                    description && <Description post={description}/>
                }
            </div>
        </div>

    );
};
