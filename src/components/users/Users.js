import {useEffect, useState} from "react";
import User from "../user/User";


export default function Users(props) {

    let {location: {search}, match: {url}} = props

    let [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`https://reqres.in/api/users` + search)
            .then(value => value.json())
            .then(value => setUsers(value.data))
    }, [search])


    const decrement = () => {
        let arraySearch = search.split('')
        arraySearch[arraySearch.length - 1] = Number(arraySearch[arraySearch.length - 1]) - 1
        search = arraySearch.join('')
        console.log(search)
        return search
    }

    const increment = () => {
        let arraySearch = search.split('')
        arraySearch[arraySearch.length - 1] = Number(arraySearch[arraySearch.length - 1]) + 1
        search = arraySearch.join('')
        console.log(search)
        return search
    }


    return (
        <div>
            <div>
                {
                    users.map(value => <User item={value} url={url}/>)
                }
            </div>
            <button onClick={decrement}>last</button>
            <button onClick={increment}>next</button>

        </div>
    );
}