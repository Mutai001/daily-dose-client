// src/components/PostList.tsx
import React from 'react';
import { useGetPostsQuery } from '../api/apiSlice';
import PostCard from './PostCard';

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostList: React.FC = () => {
  // Correctly provide any required arguments to useGetPostsQuery if needed
  const { data: posts, error, isLoading } = useGetPostsQuery({});

  if (isLoading) return <p>Loading...</p>;

  // Handle different error types
  if (error) {
    // Check if error has a response object and a data property
    const errorMessage = (error as { status: number; data: any })?.data?.message || 'An error occurred';
    return <p>Error: {errorMessage}</p>;
  }

  return (
    <div>
      {posts?.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
