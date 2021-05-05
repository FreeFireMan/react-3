// по ДЗ:
//     отримати данні про пости з jsonplaceholder , та відобразити в компоненті posts.
//     За рендер окремого поста відповідатиме компонент Post . В компоненті поста повинна бути кнопка, при кліку
// на яку поруч зі списком всіх постів з'являється обраний пост і його деталі.

import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

function App() {
    return (
        <div>
            <div>
                <Users/>
            </div>
            <div>
                <Posts/>
            </div>
        </div>
    );
}

export default App;
