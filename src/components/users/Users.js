import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import User from "../user/User";


export default function Users(props) {

   let {location: {search}, match:{url}} = props



    let [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`https://reqres.in/api/users`+search)
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
            <Link to={`${url}?page=1`}><button>page 1</button></Link>
            <Link to={`${url}?page=2`}><button>page 2</button></Link>
        </div>
    );
}