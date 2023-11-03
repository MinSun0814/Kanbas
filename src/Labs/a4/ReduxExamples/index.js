import React from 'react';
import HelloRedux from "./HelloRedux";
import Counter1 from "./counters/Counter1";
import Counter2 from "./counters/Counter2";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return(
      <div>
        <h2>Redux Examples</h2>
        <HelloRedux />
        <Counter1 />
        <Counter2 />
        <AddRedux />
        <TodoList />
      </div>
  );
};

export default ReduxExamples;