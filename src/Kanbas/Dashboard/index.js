import db from '../Database';
import { Link } from 'react-router-dom';
import './index.css';

function Dashboard() {
  const courses = db.courses;

  return (
      <div>
        <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-xl-4 custom-gap">
          {courses.map((course) => (
              <div key={course._id} className="col mb-4">
                <div className="card fixed-width-card">
                  <img src={course.image || "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3570&q=80"} className="card-img-top" alt={course.name}></img>
                  <div className="card-body">
                    <h5 className="card-title">{course.name}</h5>
                    <h6 className="card-title">{course.semester}</h6>
                    <p className="card-text">
                      <Link to={`/Kanbas/Courses/${course._id}`}>This is the link to the course.</Link>
                    </p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
}

export default Dashboard;
