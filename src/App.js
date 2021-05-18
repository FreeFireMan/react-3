// Зробити компоненту Counter, в якій будуть кнопки +1, -1, +100, -100.
// Де Counter це окрема компонента, на яку ми попадаємо через роути. Функція reducer винесена в окремий файл!

import './App.css'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Counter from "./components/counter/Counter";

function App() {

    return (
        <Router>
            <Link to={'/counter'}>Open counter</Link>

            <Route path={'/counter'} render={()=><Counter/>}/>
        </Router>
    );
}

export default App;
