import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import HelloWorld from "./HelloWorld";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import TernaryOperator from "./TernaryOperator";
import IfElse from "./IfElse";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import ES5Functions from "./ES5Functions";
import FunctionParenthesisAndParameters
  from "./FunctionParenthesisAndParameters";
import WorkingWithArrays from "./WorkingWithArrays";
import AddingAndRemovingDataToFromArrays
  from "./AddingAndRemovingDataToFromArrays";
import JsonStringify from "./JsonStringify";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import FunctionDestructing from "./FunctionDestructing";
import Classes from "./Classes";
import "./index.css";

function Assignment3() {
  return (
    <div>
      <HelloWorld />
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <TodoList />
      <ES5Functions />
      <ArrowFunctions />
      <ImpliedReturn />
      <FunctionParenthesisAndParameters />
      <WorkingWithArrays />
      <AddingAndRemovingDataToFromArrays />
      <JsonStringify />
      <TemplateLiterals />
      <House />
      <Spread/>
      <FunctionDestructing />
      <PathParameters />
      <Classes />
      <hr />
      <ul className="list-group">
        <TodoItem
          todo={{
            title: "Buy milk",
            done: true,
            status: "COMPLETE",
          }}
        />
        <TodoItem
          todo={{
            title: "Pick up kids",
            done: false,
            status: "IN_PROGRESS",
          }}
        />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
      <TodoItem />
      <JavaScript />
    </div>
  );
}

export default Assignment3;
