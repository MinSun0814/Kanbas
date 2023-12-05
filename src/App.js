import Labs from "./Labs";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import StateManagement from "./Lectures/StateManagement";
import Assignments from "./Kanbas/Courses/Assignments";
import AssignmentEditor from "./Kanbas/Courses/Assignments/AssignmentEditor";
import Project from "./project";
import UserDetails from "./project/UserDetails";
import SignIn from "./project/SignIn";
import Signup from "./project/Signup";
function App() {
  const screen = "Labs";
  return (
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="labs/a5" />} />
            <Route path="/Hello" element={<HelloWorld />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
            <Route path="/Lectures" element={<StateManagement />} />
            <Route path="/Kanbas/Courses/Assignments/Editor/:id" component={AssignmentEditor} />
            <Route path="/Kanbas/Courses/Assignments/Editor" component={AssignmentEditor} />
            <Route path="/Kanbas/Courses/Assignments" component={Assignments} />
            <Route path="/project/*" element={<Project />} />
            <Route path="users/:userId" element={<UserDetails />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </HashRouter>
  );
}

export default App;
