import React from "react";

export function ReactionItem({ reaction, onToggleFavorite, onRemove }) {
  return (
    <li style={{ marginBottom: "8px" }}>
      <span style={{ fontSize: "24px" }}>{reaction.emoji}</span>
      <span style={{ marginLeft: "10px" }}>
        {reaction.favorite ? "❤️ Favorite" : ""}
      </span>
      <button
        onClick={() => onToggleFavorite(reaction.id)}
        style={{ marginLeft: "10px" }}
      >
        Toggle Favorite
      </button>
      <button
        onClick={() => onRemove(reaction.id)}
        style={{ marginLeft: "5px", color: "red" }}
      >
        Remove
      </button>
    </li>
  );
}
