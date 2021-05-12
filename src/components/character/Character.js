import {Link} from "react-router-dom";

export default function Character({item, name, url}) {

// console.log(item)
    return (
        <div>
            {item.id || item[0].id } --
            {name && `${name.first} ${name.middle} ${name.last}`|| 'name'} --

            <Link to={`${url}/${item.id}`}>description</Link>
        </div>
    )
}