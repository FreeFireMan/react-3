import {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import User from "../user/User";


export default function Users(props) {

    let {location: {search}, match: {url}} = props

    const page = new URLSearchParams(search);

    let [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`https://reqres.in/api/users` + search)
            .then(value => value.json())
            .then(value => setUsers(value.data))
    }, [search])

    return (
        <div>
            <div>
                {
                    users.map(value => <User key={value.id} item={value} url={url}/>)
                }
            </div>
            <Link to={`users?page=${+page.get("page")+1}`}>
                <button>next</button>
            </Link>
        </div>
    );
}
