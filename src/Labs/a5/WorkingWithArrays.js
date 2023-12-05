import axios from "axios";
import React, { useState, useEffect } from "react";
function WorkingWithArrays() {
  const API = "https://kanbas-node-server-a55r.onrender.com/a5/todos";
  const [todo, setTodo] = useState([]);
  const [id, setId] = useState("");
  const [todoId, setTodoId] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoCompleted, setTodoCompleted] = useState(false);
  const [title, setTitle] = useState("go to work");
  const [editing, setEditing] = useState({ id: null, title: "" });
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState("");
  const [newTodoDue, setNewTodoDue] = useState("");
  const [newTodoCompleted, setNewTodoCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);


  const fetchTodo = async () => {
    try {
      const response = await axios.get(API);
      setTodo(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };



  const createTodo = async () => {
    try {
      const response = await axios.get(`${API}/create`);
      setTodo(prevTodos => [...prevTodos, response.data]);
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  const removeTodo = async (id) => {
    try {
      await axios.get(`${API}/${id}/delete`);
      setTodo(prevTodos => prevTodos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
setErrorMessage("Unable to delete todo")
    }
  };

  const updateTitle = async (id, newTitle) => {
    try {
      await axios.get(`${API}/${id}/title/${newTitle}`);
      setTodo(prevTodos => prevTodos.map(todo =>
          todo.id === id ? { ...todo, title: newTitle } : todo
      ));
    } catch (error) {
      console.error('Error updating title:', error);
      setErrorMessage("Unable to update title")
    }
  };

  const postTodo = async () => {
    try {
      const newTodo = {
        title: newTodoTitle,
        description: newTodoDescription,
        due: newTodoDue,
        completed: newTodoCompleted,
      };
      const response = await axios.post(API, newTodo);
      setTodo([...todo, response.data]);
      // Optionally, reset form fields here
      setNewTodoTitle("");
      setNewTodoDescription("");
      setNewTodoDue("");
      setNewTodoCompleted(false);
    } catch (error) {
      console.error('Error posting todo:', error);
      setErrorMessage("Unable to post todo")
    }
  };



  useEffect(() => {
    fetchTodo();
  }, []);


  return (
      <div>
        <h2>Working with Arrays</h2>
        <h4>Todos from server</h4>
        <div>
          <h4>Create New Todo</h4>
          <input
              className="form-control mb-2"
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
              placeholder="Title"
          />
          <textarea
              className="form-control mb-2"
              value={newTodoDescription}
              onChange={(e) => setNewTodoDescription(e.target.value)}
              placeholder="Description"
          />
          <input
              className="form-control mb-2"
              type="date"
              value={newTodoDue}
              onChange={(e) => setNewTodoDue(e.target.value)}
          />
          <label>
            <input
                type="checkbox"
                checked={newTodoCompleted}
                onChange={(e) => setNewTodoCompleted(e.target.checked)}
            />
            Completed
          </label>
          <button className="btn btn-primary" onClick={postTodo}>
            Add Todo
          </button>
        </div>

        {errorMessage && (
            <div className="alert alert-danger mb-2 mt-2">
              {errorMessage}
            </div>
        )}
        {editing.id !== null && (
            <div>
              <input
                  className="form-control"
                  type="text"
                  value={editing.title}
                  onChange={(e) => setEditing({ ...editing, title: e.target.value })}
              />
              <button
                  className="btn btn-secondary"
                  onClick={() => {
                    updateTitle(editing.id, editing.title);
                    setEditing({ id: null, title: "" });
                  }}
              >
                Save
              </button>
            </div>
        )}

        <ul className="list-group">
          {todo.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.title}
                <div>
                  <button
                      className="btn btn-danger"
                      onClick={() => removeTodo(item.id)}
                  >
                    Delete
                  </button>
                  <button
                      className="btn btn-warning"
                      onClick={() => setEditing({ id: item.id, title: item.title })}
                  >
                    Edit
                  </button>
                </div>
              </li>
          ))}
        </ul>
        <h4>Creating new Items in an Array</h4>
        <button className="btn btn-primary me-2" onClick={createTodo}> Create Todo</button>

        <h4>Retrieving Arrays</h4>
        <a href={API} className="btn btn-primary me-2">
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
        <input
            className="form-control"
            value={id}
            onChange={(e) => setId(e.target.value)}
        />
        <a href={`${API}/${id}`} // Use id state here
           className="btn btn-primary me-2">
          Get Todo by ID
        </a>

        <input
            value={todo.id}
            onChange={(e) => setTodo({
              ...todo, id: e.target.value })}
            className="form-control mb-2"
            type="number"
        />
        <input
            value={todo.title}
            onChange={(e) => setTodo({
              ...todo, title: e.target.value })}
            className="form-control mb-2"
            type="text"
        />
        <h4>3.3.7 Extra Credit: Edit Todo Description & Completion Status</h4>
        <input
            className="form-control"
            type="text"
            value={todoId}
            placeholder="Todo ID"
            onChange={(e) => setTodoId(e.target.value)}
        />
        <input
            className="form-control"
            type="text"
            value={todoDescription}
            placeholder="Todo Description"
            onChange={(e) => setTodoDescription(e.target.value)}
        />
        <input
            type="checkbox"
            checked={todoCompleted}
            onChange={(e) => setTodoCompleted(e.target.checked)}
        />
        <a
            className="btn btn-primary"
            href={`https://kanbas-node-server-a55r.onrender.com/a5/todos/${todoId}/description/${todoDescription}`}
        >
          Update Description
        </a>
        <a
            className="btn btn-secondary"
            href={`https://kanbas-node-server-a55r.onrender.com/a5/todos/${todoId}/completed/${todoCompleted}`}
        >
          Update Completed
        </a>
      </div>
  );
}

export default WorkingWithArrays;