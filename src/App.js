import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
    return (
        <div>
            <div>
                <Link to={'/'}>Home page</Link>
            </div>
            <div>
                <Link to={'/posts'}>Posts</Link>
            </div>
            <div>
                <Link to={'/comments'}>Comments</Link>
            </div>
            <div>
                <Link to={'/albums'}>Albums</Link>
            </div>
            <div>
                <Link to={'/photos'}>Photos</Link>
            </div>
            <div>
                <Link to={'/todos'}>Todos</Link>
            </div>
            <div>
                <Link to={'/users'}>Users</Link>
            </div>
            <Switch>
                <Route path={'/posts'} render={() => <Posts/>}/>
                <Route path={'/comments'} render={() => <Comments/>}/>
            </Switch>

        </div>
    );
}

export default App;
