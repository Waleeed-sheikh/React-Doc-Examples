import React from "react";
import { useReducer, useState } from "react";
export default function TaskAppReducer() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [input, setInput] = useState("");

  function addTask() {
    if (input.trim()) {
      dispatch({ type: "ADD", payload: input });
      setInput("");
    }
  }

  function deleteTask(id) {
    dispatch({ type: "Delete", payload: id });
  }

  return (
    <div>
      <h1>Task App with Reducer</h1>
      <input
        type="text"
        placeholder="Write a plan"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch({ type: "Toggle", payload: task.id })}
            />
            {task.text} {task.completed && "✅"}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "Delete":
      return state.filter((task) => task.id != action.payload);
    case "Toggle":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    default:
      return state;
  }
};
