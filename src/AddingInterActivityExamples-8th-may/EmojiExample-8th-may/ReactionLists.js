import { ReactionItem } from "./ReactionItem";

export default function ReactionList({ reactions, onToggleFavorite, onRemove }) {
    if (reactions.length === 0) {
      return <p>No reactions yet. Be the first!</p>;
    }
  
    return (
      <ul>
        {reactions.map((reaction) => (
          <ReactionItem
            key={reaction.id}
            reaction={reaction}
            onToggleFavorite={onToggleFavorite}
            onRemove={onRemove}
          />
        ))}
      </ul>
    );
  }