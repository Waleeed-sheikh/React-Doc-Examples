export default function BookItem({ book, onVote, onToggleFavorite, onDelete }) {
  return (
    <li style={{ marginBottom: "12px" }}>
      <strong>{book.title}</strong> ({book.genre}) — Votes: {book.votes}
      {book.favorite && (
        <span style={{ color: "red", marginLeft: "10px" }}>❤️ Favorite</span>
      )}
      <div style={{ marginTop: "4px" }}>
        <button onClick={() => onVote(book.id, 1)}>⬆️ Upvote</button>
        <button
          onClick={() => onVote(book.id, -1)}
          style={{ marginLeft: "4px" }}
        >
          ⬇️ Downvote
        </button>
        <button
          onClick={() => onToggleFavorite(book.id)}
          style={{ marginLeft: "8px" }}
        >
          {book.favorite ? "Unfavorite" : "Favorite"}
        </button>
        <button
          onClick={() => onDelete(book.id)}
          style={{ marginLeft: "8px", color: "crimson" }}
        >
          Remove
        </button>
      </div>
    </li>
  );
}
