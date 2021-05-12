// #routing #route #api
// Беремо цю апі -https://sampleapis.com/api-list/futurama.
// Головна сторінка - 2 роути на персонажів та інвентар.
//     При кліку на відповідний роут - перехід на сторінку зі
// списком персонажів/інвентаря (коротка інформація)
// При кліку на конкрентний елемент - перехід на сторінку  цього елементу з детальною інформацією.
//     З урахуванням того, що апі не надає можливості отримати поодинокі об'єкит, ' +
// 'продумайте,як ви будете діставати їх на окремій сторінці з деталями.

import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Characters from "./components/characters/Characters";
import Description from "./components/descriptionCharacter/Description";

function App() {
    return (
        <Router>
            <div>
                <Link to={'/'}>Home</Link>
            </div>
            <div>
                <Link to={'/characters'}>Characters</Link>
            </div>
            <div>
                <Link to={'/Inventory'}>Inventory</Link>
            </div>

            <Switch>
                <Route exact={true} path={'/characters'} render={(props) => <Characters {...props}/>}/>
                <Route exact={true} path={'/characters/:id'}
                       render={(props) =>  <Description {...props}/>}/>


            </Switch>


        </Router>


    );
}

export default App;
