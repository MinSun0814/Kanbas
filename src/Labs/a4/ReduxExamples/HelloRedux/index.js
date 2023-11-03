import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "./HelloReducer";
function HelloRedux () {
  // const [message] = React.useState("Hello world");
  const message = useSelector((state) => state.helloReducer.message);
  const dispatch = useDispatch();
  return  (
      <div>
        <h2>Hello Redux</h2>
        <button onClick={() => dispatch(setMessage("Hello Redux"))}>Hello</button>
        <h2>{message}</h2>
      </div>
  );
}

export default HelloRedux;