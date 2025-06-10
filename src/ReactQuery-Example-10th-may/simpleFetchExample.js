import React from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const fetchPosts = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=15"
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

function Posts() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReacQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: "1rem" }}>
        <h1>React Query Example: Posts</h1>
        <Posts />
      </div>
    </QueryClientProvider>
  );
}

export default ReacQuery;
