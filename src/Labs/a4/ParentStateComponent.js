import React, { useState } from "react";
import ChildStateComponent from "./ChildStateComponent";
function ParentStateComponent() {
  const [counter, setCounter] = useState(123);
  return (
      <div>
        <h2>Parent: Counter {counter}</h2>
        <ChildStateComponent
            counter={counter}
            setCounter={setCounter} />
      </div>
  );
}
export default ParentStateComponent;