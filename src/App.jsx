import React, { useState } from "react";
import TodoList from "./Components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="todo-container p-4 bg-white rounded shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4 text-primary">My Todo List</h2>

        {/* Input and Add button */}
        <div className="d-flex mb-3">
          <input
            type="text"
            className="form-control me-2"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
          />
          <button className="btn btn-primary px-4" onClick={addTodo}>
            Add
          </button>
        </div>

        {/* Todo List */}
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
