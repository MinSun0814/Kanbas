import { useState } from "react";

function ArrayState() {
  const [modules, setModules] = useState(["module 1", "module 2"]);
  const [newModule, setNewModule] = useState("");
  const [editModuleIndex, setEditModuleIndex] = useState(-1);

  const addModule = () => {
    if (editModuleIndex === -1) {
      // If no module is being edited, add a new module
      const newModules = [...modules, newModule];
      setModules(newModules);
    } else {
      // If a module is being edited, update the module
      const newModules = modules.map((module, index) =>
          index === editModuleIndex ? newModule : module
      );
      setModules(newModules);
      setEditModuleIndex(-1); // Reset edit index
    }
    setNewModule("");  // Optional: clear the input field after adding/updating
  }

  const deleteModule = (index) => {
    setModules(modules.filter((_, i) => i !== index));
  }

  const editModule = (index) => {
    setNewModule(modules[index]);
    setEditModuleIndex(index);
  };

  return (
      <div>
        <h2>Array State</h2>
        <input value={newModule} onChange={e => setNewModule(e.target.value)}/>
        <button onClick={addModule}>{editModuleIndex === -1 ? "Add Module" : "Update Module"}</button>
        <ul className="list-group">
          {modules.map((module, index) =>
              <li className="list-group-item" key={index}>
                <button
                    onClick={() => editModule(index)}
                    className={"btn btn-warning float-end"}>
                  Edit
                </button>
                <button
                    onClick={() => deleteModule(index)}
                    className="btn btn-danger float-end">
                  Delete
                </button>
                {module}
              </li>
          )}
        </ul>
      </div>
  );
}

export default ArrayState;
