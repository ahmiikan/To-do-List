import React from "react";

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center mb-2 shadow-sm rounded">
      <span
        onClick={() => toggleComplete(todo.id)}
        className={`task-text ${todo.completed ? "completed" : ""}`}
      >
        {todo.text}
      </span>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
