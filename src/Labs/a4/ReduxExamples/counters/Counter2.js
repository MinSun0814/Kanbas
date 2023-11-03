import { useSelector, useDispatch } from "react-redux";
import { increment1, decrement1 } from "./counter1Reducer";

function Counter2 () {
  const { count1 } = useSelector((state) => state.counter1Reducer);
  const dispatch = useDispatch();
  return (
      <div>
        <p>Count: {count1}</p>
        <button onClick={() => dispatch(increment1())}>increment2</button>
        <button onClick={() => dispatch(decrement1())}>decrement2</button>
      </div>
  );
};

export default Counter2;
