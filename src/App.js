import UserList from "./users/users.list";
import {useState} from "react";

let usersList = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// Всім, привіт, додатково до дз зробіть по counter кнопки - increment, decrement,
// reset(тобто коли натискаєте на кнопко то counter = 0),
// а також кнопки increment + 100, decrement - 100


function App() {

    let [users, setUsers] = useState(usersList);

    const deleteUser = () => {
        users.pop();
        setUsers([...users])
    }

    let [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(++counter)
    }

    const reset = () => {
        setCounter(0)
    }

    const decrement = () => {
        setCounter(--counter)
    }

    return (
        <div>
            <div>
                <p>
                    Counter is {counter}
                </p>
                <button onClick={increment}>increment</button>
                <button onClick={reset}>reset</button>
                <button onClick={decrement}>decrement</button>
            </div>
            <div>{
                users.map((value) =>
                    <UserList
                        name={value.name}
                        age={value.age}
                        status={value.status}
                    />)
            }
                <button onClick={deleteUser}>delete</button>
            </div>

        </div>
    );
}

export default App;
