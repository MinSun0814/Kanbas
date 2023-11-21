import React, { useState } from "react";
function EncodingParametersInURLs() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [newScore, setNewScore] = useState(assignment.score);
  const [newCompleted, setNewCompleted] = useState(assignment.completed);


  // Other state variables
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);

  return (
      <div>
        <h2>Encoding Parameters In URLs</h2>
        <h4>3.2.4 Extra Credit: Update Score</h4>
        <input
            className="form-control"
            type="number"
            value={newScore}
            onChange={(e) => setNewScore(e.target.value)}
        />
        <a
            className="btn btn-primary"
            href={`https://kanbas-node-server-a55r.onrender.com/a5/assignment/score/${newScore}`}
        >
          Update Score
        </a>

        <h4>3.2.4 Extra Credit: Update Completion Status</h4>
        <input
            type="checkbox"
            checked={newCompleted}
            onChange={(e) => setNewCompleted(e.target.checked)}
        />
        <a
            className="btn btn-primary"
            href={`https://kanbas-node-server-a55r.onrender.com/a5/assignment/completed/${newCompleted}`}
        >
          Update Completed Status
        </a>

        <input className="form-control" type="text" value={assignment.title}
                onChange={(e) => setAssignment({...assignment, title: e.target.value})}/>
        <a className="btn btn-primary" href={`https://kanbas-node-server-a55r.onrender.com/a5/assignment/title/${assignment.title}`}>Update Title</a>

        <h4>Assignment</h4>
        <a className="btn btn-primary" href="https://kanbas-node-server-a55r.onrender.com/a5/assignment">Get Assignment</a>

        <h4>Assignment Title</h4>
        <a className="btn btn-primary" href="https://kanbas-node-server-a55r.onrender.com/a5/assignment/title">Get Title</a>

        <h4>Calculator</h4>
        <input
            onChange={(e) => setA(e.target.value)}
            className="form-control" type="number" value={a}/>
        <input
            onChange={(e) => setB(e.target.value)}
            className="form-control" type="number" value={b}/>

        <h4>Query Parameters</h4>
        <a
            href={`https://kanbas-node-server-a55r.onrender.com/a5/calculator?a=${a}&b=${b}&operation=add`}
            className="btn btn-primary">
          Add {a} + {b}
        </a>
        <a
            href={`https://kanbas-node-server-a55r.onrender.com/a5/calculator?a=${a}&b=${b}&operation=subtract`}
            className="btn btn-danger">
          Subtract {a} - {b}
        </a>

        <h4>Path Parameters</h4>
        <a
            href={`https://kanbas-node-server-a55r.onrender.com/a5/add/${a}/${b}`}
            className="btn btn-primary">
          Add {a} + {b}
        </a>
        <a
            href={`https://kanbas-node-server-a55r.onrender.com/a5/subtract/${a}/${b}`}
            className="btn btn-danger">
          Subtract {a} - {b}
        </a>

      </div>
  );
}
export default EncodingParametersInURLs;