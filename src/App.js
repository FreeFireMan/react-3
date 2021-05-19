// Зробити компоненту Counter, в якій будуть кнопки +1, -1, +100, -100.
// Де Counter це окрема компонента, на яку ми попадаємо через роути. Функція reducer винесена в окремий файл!

import './App.css';
import {Link, Route} from "react-router-dom";
import Counter from "./components/counter/Counter";

function App() {

    return (
        <div>
            <Link to={'/counter'}>Open counter</Link>

            <Route path={'/counter'} render={() => <Counter/>}/>
        </div>
    );
}

export default App;
