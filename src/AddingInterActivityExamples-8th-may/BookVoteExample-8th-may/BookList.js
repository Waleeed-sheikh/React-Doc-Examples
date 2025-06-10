import BookItem from "./BookItem";
  
  export default function BookList({ books, onVote, onToggleFavorite, onDelete }) {
    if (books.length === 0) return <p>No books added yet.</p>;
  
    return (
      <ul>
        {books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            onVote={onVote}
            onToggleFavorite={onToggleFavorite}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  }