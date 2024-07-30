// src/pages/PostDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../api/apiSlice';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post, error, isLoading } = useGetPostByIdQuery(id || '');

  if (isLoading) return <p>Loading...</p>;

  // Handle different error types
  if (error) {
    // Use a type guard to determine the structure of the error
    const errorMessage = 'data' in error
      ? 'An error occurred'
      : (error as { data?: { message?: string } }).data?.message || 'An error occurred';
    return <p>Error: {errorMessage}</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
};

export default PostDetail;
