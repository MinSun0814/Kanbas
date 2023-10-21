import ArrowFunctions from "./ArrowFunctions";
import React from "react";
import BooleanVariables from "./BooleanVariables";
import ES5Functions from "./ES5Functions";
import IfElse from "./IfElse";
import JsonStringify from "./JsonStringify";
import MapFunction from "./MapFunction";
import TernaryOperator from "./TernaryOperator";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import WorkingWithArrays from "./WorkingWithArrays";

function JavaScript() {
  console.log("Hello world");
  return(
      <div>
      <ArrowFunctions/>
      <BooleanVariables/>
      <ES5Functions/>
      <IfElse/>
        <JsonStringify/>
        <MapFunction/>
        <TernaryOperator/>
        <VariablesAndConstants/>
        <VariableTypes/>
        <WorkingWithArrays/>
      </div>
  );
}
export default JavaScript;

