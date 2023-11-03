import {useState} from "react";

function BooleanState() {
  const [done, setState] = useState(false);
  const handleClick = () => {
    setState(!done);
  };
  return (
      <div>
        <h2>Boolean State</h2>
        <button onClick={handleClick}>Click me</button>
        <p>{done ? "Done" : "Not Done"}</p>
        <input type="checkbox" checked={done} onChange={handleClick}/>
      </div>
  );
}

export default BooleanState;
