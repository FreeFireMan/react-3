import {Link} from "react-router-dom";

export default function List({list, url}) {
    return (
        <div>
            {list.id} -- {list.title} --
            <Link to={`${url}/${list.id}`}>details</Link>
        </div>
    )
}