import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementAction, incrementAction } from './actionCreater/Action'

const CounterInput = ({ count, setCount }) => {
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={()=>dispatch(incrementAction())}>Increment +</button>
            <button onClick={()=>dispatch(decrementAction())}>Decrement -</button>
        </div>
    )
}

export default CounterInput
