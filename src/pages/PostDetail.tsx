// src/pages/PostDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../api/apiSlice';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post, error, isLoading } = useGetPostByIdQuery(id || '');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
};

export default PostDetail;
