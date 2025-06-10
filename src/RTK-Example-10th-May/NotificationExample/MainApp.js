import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { addNotification, removeNotification } from "./notificationSLice";

export default function MainApp() {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications);

  const handleAdd = () => {
    const newNotification = {
      id: Date.now(),
      message: "New Notification!",
      type: "info",
    };
    dispatch(addNotification(newNotification));
  };

  const handleRemove = (id) => {
    dispatch(removeNotification(id));
  };

  return (
    <div>
      <h1>📣 Notifications</h1>
      <button onClick={handleAdd}>Add Notification</button>
      <ul>
        {notifications.map((note) => (
          <li key={note.id}>
            [{note.type.toUpperCase()}] {note.message}
            <button onClick={() => handleRemove(note.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
