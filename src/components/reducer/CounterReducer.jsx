//reducer is simple function with switch cases

import { increment, decrement } from '../actionCreator/Action'

const initailState = {
    count: 0
}

const CounterReducer = (state = initailState, action) => {
    switch (action.type) {
        case increment:
            return {
                ...state,
                count: state.count + 1
            }
        
        case decrement:
            return {
                ...state,
                count: state.count - 1
            }
        
        default:
            return state
    }
}

export default CounterReducer
