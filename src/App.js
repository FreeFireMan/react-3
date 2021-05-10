import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import User from "./components/user/User";
import Description from "./components/Description/Description";


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
                <Route path={'/users'} render={(props) => <Users {...props}/>}/>
                <Route path={'/posts'} render={() => <Posts/>}/>
                <Route path={'/comments'} render={() => <Comments/>}/>

                <Route exact={true} path={'/users/:id'}
                       render={(props) => {
                           let {match: {param: {id}}} = props
                           return <Description userId={id}/>
                       }}/>
            </Switch>
        </Router>


    );
}

export default App;
