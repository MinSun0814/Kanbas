import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AssignmentEditor = () => {
  const [assignmentName, setAssignmentName] = useState('');
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState(0);
  const [assignmentGroup, setAssignmentGroup] = useState('Assignments');
  const [displayGrade, setDisplayGrade] = useState('Percentage');
  const [submissionType, setSubmissionType] = useState('Online');
  const [submissionAttempts, setSubmissionAttempts] = useState('1');
  const [plagiarismReview, setPlagiarismReview] = useState('None');
  const [isTextEntry, setIsTextEntry] = useState(false);
  const [isGroupAssignment, setIsGroupAssignment] = useState(false);
  const [isPeerReview, setIsPeerReview] = useState(false);
  const [assignTo, setAssignTo] = useState('Everyone');
  const [dueDate, setDueDate] = useState('');
  const [availableFrom, setAvailableFrom] = useState('');
  const [untilDate, setUntilDate] = useState('');

  const handleSubmit = () => {
    console.log('Assignment saved');
  };

  return (
      <div>
        <div className="row mb-3">
          <label>Assignment Name</label>
          <input
              type="text"
              className="form-control"
              value={assignmentName}
              onChange={(e) => setAssignmentName(e.target.value)}
          />
          <div className="col-md-4">
            <label>Due</label>
            <input
                type="date"
                className="form-control"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label>Available from</label>
            <input
                type="date"
                className="form-control"
                value={availableFrom}
                onChange={(e) => setAvailableFrom(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <label>Until</label>
            <input
                type="date"
                className="form-control"
                value={untilDate}
                onChange={(e) => setUntilDate(e.target.value)}
            />
          </div>
        </div>

        <div className="float-end">
          <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => window.location.href="/Kanbas/Courses/Assignments/screen.html"}
          >
            Cancel
          </button>
          <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
  );
};

ReactDOM.render(<AssignmentEditor />, document.getElementById('root'));
export default AssignmentEditor;