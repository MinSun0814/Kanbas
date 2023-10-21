import logo from './logo.svg';
import './App.css';
import {HashRouter, Link, Navigate,Route, Routes} from "react-router-dom";
import Kanbas from "./Kanbas";
import JavaScript from "./lab3/JavaScript";


function App() {

  return (
    <HashRouter>
      <JavaScript/>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Kanbas"/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
