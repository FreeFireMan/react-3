import {useDispatch, useSelector} from "react-redux";

export default function Counter() {
    const counter = useSelector(({counter: {counter}}) => counter)
    const dispatch = useDispatch()

    return (
        <div className='main-box'>
            <div> Counter: {counter}</div>
            <button onClick={()=>dispatch({type: 'INCREMENT'})}>+1</button>
            <button onClick={()=>dispatch({type: 'DECREMENT'})}>-1</button>
            <button onClick={()=>dispatch({type: 'PLUS_HUNDRED'})}>+100</button>
            <button onClick={()=>dispatch({type: 'MINUS_HUNDRED'})}>-100</button>
        </div>
    );
}
