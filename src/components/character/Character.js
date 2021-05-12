import {Link} from "react-router-dom";

export default function Character({item, name, url}) {

   // console.log(item.id)
    return (
        <div>
            {item.id || 'id'} --
            {name && `${name.first} ${name.middle} ${name.last}` || 'no name'} --
            <Link to={`${url}/${item.id}`}>description</Link>
        </div>
    )
}