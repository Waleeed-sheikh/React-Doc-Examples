import React from "react";
import Task from "./Task";

export default function TaskList({ tasks }) {
  if (!tasks.length) {
    return <p>No tasks yet 🎉</p>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} title={task.title} done={task.done} />
      ))}
    </div>
  );
}
