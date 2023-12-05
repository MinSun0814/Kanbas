import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navigation() {
  return(
  <div className="list-group">
    <Link to="/project/" className="list-group-item">Home</Link>
    <Link to="/signin" className="list-group-item">Sign In</Link>
    <Link to="/signup" className="list-group-item">Sign Up</Link>
  </div>
  )
};
export default Navigation;