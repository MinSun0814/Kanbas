import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams
import './index.css';
import axios from "axios";

function Dashboard() {
  const URL = "http://localhost:4000/api/courses";
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ name: '', number: '', startDate: '', endDate: '' }); // Use newCourse for the new course data
  const [editingCourse, setEditingCourse] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState({});

  // Extract course ID from the URL
  const { courseId } = useParams();

  const fetchCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      // Update state to remove the deleted course
      setCourses(courses.filter((c) => c._id !== id));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const addNewCourse = async () => {
    try {
      const response = await axios.post(URL, newCourse); // Use newCourse here
      setCourses([...courses, response.data]);
      setNewCourse({ name: '', number: '', startDate: '', endDate: '' }); // Reset newCourse
    } catch (error) {
      console.error('Error adding new course:', error);
    }
  };


  const updateCourse = async () => {
    if (editingCourse) {
      try {
        await axios.put(`${URL}/${editingCourse._id}`, editingCourse);
        const updatedCourses = courses.map(c =>
            c._id === editingCourse._id ? { ...c, ...editingCourse } : c
        );
        setCourses(updatedCourses);
        setEditingCourse(null); // Reset editing course
      } catch (error) {
        console.error('Error updating course:', error);
        // Optionally handle errors here
      }
    }
  };

  // Use findCourseById to fetch the selected course
  useEffect(() => {
    findCourseById(courseId);
    fetchCourses(); // Fetch the list of courses as well
  }, [courseId]);

  const findCourseById = async (courseId) => {
    try {
      const response = await axios.get(`${URL}/${courseId}`);
      setSelectedCourse(response.data);
    } catch (error) {
      console.error('Error fetching course by ID:', error);
      // Optionally handle errors here
    }
  };

  const handleInputChange = (e, isEditing = false) => {
    const { name, value } = e.target;
    if (isEditing) {
      setEditingCourse({ ...editingCourse, [name]: value });
    } else {
      setNewCourse({ ...newCourse, [name]: value }); // Use newCourse here
    }
  };

  return (
      <div>
        {/* Form for Adding a New Course */}
        <div>
          <input
              type="text"
              className="form-input"
              name="name"
              placeholder="Name"
              value={newCourse.name} // Use newCourse here
              onChange={(e) => handleInputChange(e)}
          />
          <input
              type="text"
              className="form-input"
              name="number"
              placeholder="Number"
              value={newCourse.number} // Use newCourse here
              onChange={(e) => handleInputChange(e)}
          />
          <input
              type="date"
              className="form-input"
              name="startDate"
              placeholder="Start Date"
              value={newCourse.startDate} // Use newCourse here
              onChange={(e) => handleInputChange(e)}
          />
          <input
              type="date"
              className="form-input"
              name="endDate"
              placeholder="End Date"
              value={newCourse.endDate} // Use newCourse here
              onChange={(e) => handleInputChange(e)}
          />
          <button className="btn btn-secondary" onClick={addNewCourse}>
            Add Course
          </button>
        </div>
        {/* Form for Editing an Existing Course */}
        {editingCourse && (
            <div>
              <input
                  type="text"
                  className="form-input"
                  name="name"
                  placeholder="Name"
                  value={editingCourse.name}
                  onChange={(e) => handleInputChange(e, true)}
              />
              <input
                  type="text"
                  className="form-input"
                  name="number"
                  placeholder="Number"
                  value={editingCourse.number}
                  onChange={(e) => handleInputChange(e, true)}
              />
              <input
                  type="date"
                  className="form-input"
                  name="startDate"
                  placeholder="Start Date"
                  value={editingCourse.startDate}
                  onChange={(e) => handleInputChange(e, true)}
              />
              <input
                  type="date"
                  className="form-input"
                  name="endDate"
                  placeholder="End Date"
                  value={editingCourse.endDate}
                  onChange={(e) => handleInputChange(e, true)}
              />
              <button className="btn btn-secondary" onClick={updateCourse}>
                Update Course
              </button>

            </div>
        )}
        {/* Displaying Courses */}
        <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-xl-4 custom-gap">
          {courses.map((c) => (
              <div key={c._id} className="col mb-4">
                <div className="card fixed-width-card">
                  <img
                      src={c.image || "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3570&q=80"}
                      className="card-img-top"
                      alt={c.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{c.name}</h5>
                    <p className="card-text">Number: {c.number}</p>
                    <p className="card-text">Start Date: {c.startDate}</p>
                    <p className="card-text">End Date: {c.endDate}</p>
                    <Link to={`/Kanbas/Courses/${c._id}`} className="btn btn-primary">
                      View Course
                    </Link>
                    <br />

                    <button className="btn btn-danger" onClick={() => deleteCourse(c._id)}>
                      Delete
                    </button>
                    <button className="btn btn-warning" onClick={() => setEditingCourse(c)}>
                      Edit
                    </button>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
}

export default Dashboard;
