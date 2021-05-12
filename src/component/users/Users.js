import {useEffect, useState} from "react";
import {getUsers} from "../services.api/services.api";
import User from "../user/User";

export default function Users({match:{url}}) {

    let [users, setUsers] = useState([])

    useEffect(()=>{
        getUsers().then(value => setUsers(value.data))

    },[])

    return (
        <div>
            {
                users.map(value => <User key={value.id} user={value} url={url}/>)
            }
        </div>
    )
}