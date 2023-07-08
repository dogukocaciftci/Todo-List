import logo from "./logo.svg";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTask(task) {
    const newTodo = {
      id: Date.now(),
      task: task,
    };

    setTodos([...todos, newTodo]);
  }

  function deleteTask(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TO DO LIST</h1>
      </header>
      <Task addTask={addTask} />
      <Items todos={todos} deleteTask={deleteTask} />
    </div>
  );
}

function Task({ addTask }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!task) return;
    addTask(task);
    setTask("");
    console.log(task);
  }

  return (
    <form className="Task-form" onSubmit={handleSubmit}>
      <input
        className="Task-input"
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      ></input>
      <button className="Task-button" type="submit">
        Add
      </button>
    </form>
  );
}

function Items({ todos, deleteTask }) {
  return (
    <ul className="Items-list">
      {todos.map((todo) => (
        <li key={todo.id} className="Items-item">
          <span>{todo.task}</span>
          <button className="Items-button" onClick={() => deleteTask(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
