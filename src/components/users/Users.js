import {useEffect, useState} from "react";
import User from "../user/User";
import Description from "../Description/Description";
import './Users.css'

export default function Users() {

    let [users, setUsers] = useState([])
    let [oneUser, setOneUser] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(value => value.json())
            .then(value => setUsers([...value]));
    }, [])

    const find = (id) => {
        let findUser = users.find(value => value.id === id)
        setOneUser(findUser)

    }

    return (
        <div className='content'>
            <div className='users-list'>
                {
                    users.map(value => <User item={value} find={find}/>)
                }
            </div>

            <div className='description'>
                {
                    oneUser && <Description user={oneUser}/>
                }
            </div>
        </div>
    )
}
