import { useState } from "react";
import BookList from "./BookList";

export default function BookVotingShelf() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("Fiction");

  function handleAddBook() {
    if (title.trim() === "") return;

    const newBook = {
      id: Date.now(),
      title: title.trim(),
      genre,
      votes: 0,
      favorite: false,
    };

    setBooks([...books, newBook]);
    setTitle("");
    setGenre("Fiction");
  }

  function handleVote(id, delta) {
    setBooks((books) =>
      books.map((book) =>
        book.id === id ? { ...book, votes: book.votes + delta } : book
      )
    );
  }

  function handleToggleFavorite(id) {
    setBooks((books) =>
      books.map((book) =>
        book.id === id ? { ...book, favorite: !book.favorite } : book
      )
    );
  }

  function handleDelete(id) {
    setBooks((books) => books.filter((book) => book.id !== id));
  }

  return (
    <div>
      <h2>📚 Book Voting Shelf</h2>

      <div style={{ marginBottom: "16px" }}>
        <input
          type="text"
          placeholder="Enter book title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: "8px" }}
        />
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option>Fiction</option>
          <option>Non-fiction</option>
          <option>Mystery</option>
          <option>Fantasy</option>
          <option>History</option>
        </select>
        <button onClick={handleAddBook} style={{ marginLeft: "10px" }}>
          Add Book
        </button>
      </div>

      <BookList
        books={books}
        onVote={handleVote}
        onToggleFavorite={handleToggleFavorite}
        onDelete={handleDelete}
      />
    </div>
  );
}
