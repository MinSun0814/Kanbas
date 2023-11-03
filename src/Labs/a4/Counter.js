import {useState} from "react";

function Counter () {
  let [count,setCount] = useState(0);
  const increment = () => {
    setCount(count+1)
  };
  const decrement = () => {
    setCount(count-1)
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default Counter;