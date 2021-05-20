import './App.css'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";


function App() {

    return (
        <Router>
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

            <Route path={'/posts'} render={() => <Posts/>}/>
            <Route path={'/comments'} render={() => <Comments/>}/>

        </Router>
    );
}

export default App;
