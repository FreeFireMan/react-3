import {useDispatch, useSelector} from "react-redux";
import {increment,minusHundred, plusHundred, decrement} from "../../redux/action-creators";

export default function Counter() {
    const counter = useSelector(({counter: {counter}}) => counter)
    const dispatch = useDispatch()

    return (
        <div className='main-box'>
            <div> Counter: {counter}</div>
            <button onClick={()=>dispatch(increment())}>+1</button>
            <button onClick={()=>dispatch(decrement())}>-1</button>
            <button onClick={()=>dispatch(plusHundred())}>+100</button>
            <button onClick={()=>dispatch(minusHundred())}>-100</button>
        </div>
    );
}
