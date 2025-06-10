import React from "react";

export default function Task({ title, done }) {
  return (
    <div>
      <span>{title}</span>
      {done && <span> ✅</span>}
    </div>
  );
}
