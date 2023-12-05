import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navigation from "./nav";
import Home from "./home";
import UserDetails from "./UserDetails";
import SignIn from "./SignIn";
import Signup from "./Signup";
function Project() {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Navigation />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users/:userId" element={<UserDetails />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default Project;
