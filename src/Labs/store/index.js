import helloReducer from "../a4/ReduxExamples/HelloRedux/HelloReducer";
import { configureStore } from "@reduxjs/toolkit";
import counter1Reducer from "../a4/ReduxExamples/counters/counter1Reducer";
import addReducer from "../a4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../a4/ReduxExamples/todos/todosReducer";

const store = configureStore({
  reducer: {
    helloReducer,
    counter1Reducer,
    addReducer,
    todosReducer,
  },
});
export default store;