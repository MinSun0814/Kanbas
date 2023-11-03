import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {increment1,decrement1} from "./counter1Reducer";

function Counter1 () {
  const {count1} = useSelector((state) => state.counter1Reducer);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Count: {count1}</p>
      <button onClick={() => dispatch(increment1())}>increment1</button>
      <button onClick={() => dispatch(decrement1())}>decrement1</button>
    </div>
  );
};

export default Counter1;