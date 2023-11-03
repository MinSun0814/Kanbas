import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Dashboard({ courses, course, setCourse, addNewCourse, updateCourse, deleteCourse }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  return (
      <div>
        <div>
          <input type="text" className="form-input" name="name" placeholder="Name" value={course.name} onChange={handleInputChange} />
          <input type="text" className="form-input" name="number" placeholder="Number" value={course.number} onChange={handleInputChange} />
          <input type="date" className="form-input" name="startDate" placeholder="Start Date" value={course.startDate} onChange={handleInputChange} />
          <input type="date" className="form-input" name="endDate" placeholder="End Date" value={course.endDate} onChange={handleInputChange} />
          <button className="btn btn-secondary" onClick={addNewCourse}>Add Course</button>
          <button className="btn btn-secondary" onClick={updateCourse}>Update Course</button>
        </div>
        <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-xl-4 custom-gap">
          {courses.map((c) => (
              <div key={c._id} className="col mb-4">
                <div className="card fixed-width-card">
                  <img src={c.image || "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3570&q=80"} className="card-img-top" alt={c.name} />
                  <div className="card-body">
                    <h5 className="card-title">{c.name}</h5>
                    <h6 className="card-title">{c.semester}</h6>
                    <p className="card-text">Number: {c.number}</p>
                    <p className="card-text">Start Date: {c.startDate}</p>
                    <p className="card-text">End Date: {c.endDate}</p>
                    <p className="card-text">
                      <Link className="redLink" to={`/Kanbas/Courses/${c._id}`}>This is the link to the course.</Link>
                    </p>
                    <button onClick={() => deleteCourse(c._id)}>Delete</button>
                    <button onClick={() => setCourse(c)}>Edit</button>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
}

export default Dashboard;
