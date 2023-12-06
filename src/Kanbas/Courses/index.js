import React from 'react';
import { useParams, useLocation, Routes, Route, Navigate } from 'react-router-dom';
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { useState, useEffect } from "react";
import Grade from "./Grades";
import axios from "axios";

function Courses({ courses }) {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const [empty, kanbas, coursesPath, id, screen] = pathname.split("/");
  const URL = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
        `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  return (
      <div>
        <h3>Courses {course.name}/{screen}</h3>
        <CourseNavigation/>
        <div
            className="overflow-y-scroll position-fixed bottom-0 end-0"
            style={{
              left: "320px",
              top: "50px",
            }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grade />} />
          </Routes>
        </div>
      </div>
  );
}

export default Courses;
