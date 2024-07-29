// src/components/PostList.tsx
import React from 'react';
import { useGetPostsQuery } from '../api/apiSlice';
import PostCard from './PostCard';

const PostList: React.FC = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
