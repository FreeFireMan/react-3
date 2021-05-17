import {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import User from "../user/User";


export default function Users(props) {

    let {location: {search}, match: {url}} = props

    let [users, setUsers] = useState([])

    const page = new URLSearchParams(search);

    useEffect(() => {
        fetch(`https://reqres.in/api/users` + search)
            .then(value => value.json())
            .then(value => setUsers(value.data))
    }, [search])





    return (
        <div>
            <div>
                {
                    users.map(value => <User item={value} url={url}/>)
                }
            </div>
            <Link to={`users?page=${+page.get("page")-1}`}>
                <button>last</button>
            </Link>
            <Link to={`users?page=${+page.get("page")+1}`}>
                <button>next</button>
            </Link>


        </div>
    );
}