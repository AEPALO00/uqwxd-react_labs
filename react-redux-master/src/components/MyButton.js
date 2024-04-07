import React from 'react';
import { useDispatch } from 'react-redux'
import {increment, decrement} from '../actions';

// useDispatch dispatches the event to the store 
// and finds out what action is to be taken and 
// uses the appropriate reducer to do the same

const MyButton = () => {
    let dispatch = useDispatch();

    return (
        <>
            <button onClick={() => dispatch(increment(1))}>Increase counter</button>
            <button onClick={() => dispatch(decrement(1))}>Decrease counter</button>
        </>
    )
}

export default MyButton;