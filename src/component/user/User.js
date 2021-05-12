import {Link} from "react-router-dom";

export default function User({user, url}) {
    return (
        <div>
            {user.id} - {user.name} -
            <Link to={`${url}/${user.id}`}>
                <button>open posts</button>
            </Link>
        </div>
    )
}