import {useEffect, useState} from "react";
import User from "../user/User";


export default function Users({match: {url}}) {

    let [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(value => value.json())
            .then(value => setUsers([...value]));
    }, [])


    return (

        <div>
            {
                users.map(value => <User item={value} url={url}/>)
            }
        </div>

    )
}
