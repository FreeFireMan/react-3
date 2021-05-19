import {INCREMENT, DECREMENT, PLUS_HUNDRED, MINUS_HUNDRED} from "../action-types";

export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});
export const plusHundred = () => ({type: PLUS_HUNDRED});
export const minusHundred = () => ({type: MINUS_HUNDRED});
