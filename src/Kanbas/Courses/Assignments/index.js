import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
      assignment => assignment.course === courseId
  );

  return (
      <div>
        <h2>Assignments for course {courseId}</h2>

        <Link to={`/Kanbas/Courses/${courseId}/Assignments/new`} className="btn btn-primary mb-3">
          Create New Assignment
        </Link>

        <div>
          {courseAssignments.map((assignment) => (
              <Link
                  key={assignment._id}
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  className="list-group-item assignment-item"
              >
                {assignment.title}
              </Link>
          ))}
        </div>
      </div>
  );
}

export default Assignments;
