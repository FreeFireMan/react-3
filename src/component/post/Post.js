import {Link} from "react-router-dom";

export default function Post({post, url}) {

    return (
        <div>
            {`${post.id}. ${post.title}`}
            <Link to={`${url}/${post.id}`}>
                <button>open comments</button>
            </Link>
        </div>
    )
}