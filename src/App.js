// #route #routing
// Головна сторінка має лінки на сторінки з юзерами та постами з jsonplaceholer.
//     При кліку на лінку юзерс відбувається перехід на сторінку зі всіма юзерами.
//     В кожного юзера є кнопка-лінка, при кліку на яку відображаються всі тільки його пости.
//     Та сама ситуація з постами, тільки при кліку на окремий пост відображається коментарі цього поста

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./component/users/Users";
import UserPosts from "./component/user.posts/UserPosts";
import Posts from "./component/posts/Posts";
import Comments from "./component/comments/Comments";


function App() {
    return (
        <Router>
            <div>
                <Link to={'/'}>Home</Link>
            </div>
            <div>
                <Link to={'/users'}>Users</Link>
            </div>
            <div>
                <Link to={'/posts'}>Posts</Link>
            </div>

            <Switch>
                <Route exact={true} path={'/'}/>
                <Route exact={true} path={'/users'}
                       render={(props) => <Users {...props}/>}/>
                <Route path={'/users/:id'}
                       render={(props) => <UserPosts {...props}/>}/>
                <Route exact={true} path={'/posts'}
                       render={(props) => <Posts {...props}/>}/>
                <Route path={'/posts/:id'}
                       render={(props) => <Comments {...props}/>}/>

            </Switch>
        </Router>
    );
};

export default App;
