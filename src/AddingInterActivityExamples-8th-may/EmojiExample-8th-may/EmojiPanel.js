import { useState } from "react";
import ReactionList from "./ReactionLists";

export default function EmojiFeedbackPanel() {
  const [selectedEmoji, setSelectedEmoji] = useState("🙂");
  const [reactions, setReactions] = useState([]);

  function handleSubmit() {
    const newReaction = {
      id: Date.now(),
      emoji: selectedEmoji,
      favorite: false,
    };
    setReactions([...reactions, newReaction]);
  }

  function handleToggleFavorite(id) {
    setReactions((reactions) =>
      reactions.map((r) => (r.id === id ? { ...r, favorite: !r.favorite } : r))
    );
  }

  function handleRemove(id) {
    setReactions((reactions) => reactions.filter((r) => r.id !== id));
  }

  return (
    <div >
      <h2>How are you feeling today?</h2>
      <select
        value={selectedEmoji}
        onChange={(e) => setSelectedEmoji(e.target.value)}
      >
        <option value="🙂">🙂 Happy</option>
        <option value="😐">😐 Neutral</option>
        <option value="😠">😠 Angry</option>
      </select>
      <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
        Submit Reaction
      </button>

      <hr />
      <h3>All Reactions:</h3>
      <ReactionList
        reactions={reactions}
        onToggleFavorite={handleToggleFavorite}
        onRemove={handleRemove}
      />
    </div>
  );
}
