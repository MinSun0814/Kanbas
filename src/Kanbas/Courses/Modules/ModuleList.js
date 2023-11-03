import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
      <div>
        <div className="module-control">
          <button
              className="btn btn-primary"
              onClick={() =>
                  dispatch(
                      addModule({
                        ...module,
                        course: courseId,
                        _id: new Date().getTime().toString(),
                      })
                  )
              }
          >
            Add
          </button>
          <button
              className="btn btn-secondary"
              onClick={() => dispatch(updateModule(module))}
          >
            Update
          </button>
          <br/>
          <input
              className="module-input"
              value={module.name}
              onChange={(e) =>
                  dispatch(setModule({ ...module, name: e.target.value }))
              }
          />
          <textarea
              className="module-textarea"
              value={module.description}
              onChange={(e) =>
                  dispatch(setModule({ ...module, description: e.target.value }))
              }
          />
        </div>
        <ul className="list-group">
          {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
              <li key={index} className="list-group-item module-item">
                <h3>{module.name}</h3>
                <p>{module.description}</p>
                <button
                    className="btn btn-warning"
                    onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteModule(module._id))}
                >
                  Delete
                </button>
              </li>
          ))}
        </ul>
      </div>
  );
}

export default ModuleList;
