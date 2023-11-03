import logo from "./logo.svg";
// import './App.css';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import StateManagement from "./Lectures/StateManagement";
import Assignments from "./Kanbas/Courses/Assignments";
import AssignmentEditor from "./Kanbas/Courses/Assignments/AssignmentEditor";

function App() {
  const screen = "Labs";
  return (
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="labs/a4" />} />
            <Route path="/Hello" element={<HelloWorld />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
            <Route path="/Lectures" element={<StateManagement />} />
            <Route path="/Kanbas/Courses/Assignments/Editor/:id" component={AssignmentEditor} />
            <Route path="/Kanbas/Courses/Assignments/Editor" component={AssignmentEditor} />
            <Route path="/Kanbas/Courses/Assignments" component={Assignments} />
          </Routes>
          {/* {screen === "Hello" && <HelloWorld />}
        {screen === "Labs" && <Labs />}
        {screen === "Kanbas" && <Kanbas />} */}
        </div>
      </HashRouter>
  );
}

export default App;
