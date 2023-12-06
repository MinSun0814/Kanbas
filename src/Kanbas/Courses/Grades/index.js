import db from "../../Database";
import { useParams } from "react-router-dom";

function Grades() {
  const assignments = db.assignments;
  const enrollments = db.enrollments;

  return (
      <div>
        <h1>Grades</h1>
        <div className="table-responsive">
          <table className="table">
            <thead>
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment) => (
                  <th key={assignment._id}>{assignment.title}</th>
              ))}
            </tr>
            </thead>
            <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              if (!user) return null;
              return (
                  <tr key={enrollment._id}>
                    <td>{user.firstName} {user.lastName}</td>
                    {assignments.map((assignment) => {
                      const grade = db.grades.find(
                          (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                      );
                      return <td key={assignment._id}>{grade?.grade || "N/A"}</td>;
                    })}
                  </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default Grades;
