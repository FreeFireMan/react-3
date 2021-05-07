// по ДЗ:
//     отримати данні про пости з jsonplaceholder , та відобразити в компоненті posts.
//     За рендер окремого поста відповідатиме компонент Post . В компоненті поста повинна бути кнопка, при кліку
// на яку поруч зі списком всіх постів з'являється обраний пост і його деталі.

import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
    return (
        <Router>
            <div>
                <Link to={'users'}>open users</Link>
            </div>
            <div>
                <Link to={'posts'}>open posts</Link>
            </div>
            <div>
                <Link to={'comments'}>open comments</Link>
            </div>

            <Switch>
                <Route path={'/users'} render={()=><Users/>}/>
                <Route path={'/posts'} render={()=><Posts/>}/>
                <Route path={'/comments'} render={()=><Comments/>}/>
            </Switch>
        </Router>


    );
}

export default App;
