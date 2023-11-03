import React from "react";

function Status() {
  return (
      <div className="float-end">
        <h2>Course Status</h2>
        <button type="button" className="btn btn-secondary btn-sm">Unpublished</button>
        <button type="button" className="btn btn-secondary btn-sm">Published</button><br /><br />
        <ul className="list-group">
          <li className="list-group-item">Import Existing Content</li>
          <li className="list-group-item">Import from Commons</li>
          <li className="list-group-item">Choose Home Page</li>
          <li className="list-group-item">View Course Stream</li>
          <li className="list-group-item">New Announcements</li>
          <li className="list-group-item">New Analytics</li>
          <li className="list-group-item">View Course Notifications</li>
        </ul><br />
        <h2>Coming Up</h2>
        <ul className="list-group">
          <li className="list-group-item">Lecture 1</li>
          <li className="list-group-item">Lecture 2</li>
          <li className="list-group-item">Lecture 3</li>
        </ul>
      </div>
  );
}

export default Status;
