// #routing #route #api
// Беремо цю апі - https://reqres.in/
// з неї використовувати тільки get запити на list users та single user.
//     На головній сторінці є роут який одразу відображає  користувачів.
//     (Зауважте, що апі не віддає всіх користувачів,а має queryParametr/serach з назвою page ,
//     який характеризує пагінацію, та віддає по 10 об'єктів за один запит).
// Внизу є 2 кнопки при натисканні на які ви ідете до наступної/попередньої сторінки (змінюючи page параметр).
// при клыку на користувача відбувається перехід на сторінку з детальною інформацією користувача

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import Details from "./components/details/Details";

function App() {

    return (
        <Router>
            <Link to={{pathname: '/users', search:'?page=1'}}>Show users</Link>
            <Switch>
                <Route  exact={true} path={'/users'}
                       render={(props) => <Users {...props}/>}/>
                <Route exact={true} path={'/users/:id'}
                       render={(props)=><Details {...props}/>}/>
            </Switch>
        </Router>
    );
}

export default App;
