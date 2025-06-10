import React, { useState } from "react";
import TaskList from "./TaskList";

export default function TaskApp() {
  const [filterDone, setFilterDone] = useState(false);
  const allTasks = [
    { id: 1, title: "Play Cricket", done: false },
    { id: 2, title: "Learn RTK", done: true },
    { id: 3, title: "Get up ", done: true },
  ];

  const tasks = filterDone ? allTasks.filter((t) => t.done) : allTasks;

  return (
    <main>
      <h1>My Tasks</h1>
      <label>
        <input
          type="checkbox"
          checked={filterDone}
          onChange={(e) => setFilterDone(e.target.checked)}
        />
        Show done only
      </label>
      <TaskList tasks={tasks} />
    </main>
  );
}
