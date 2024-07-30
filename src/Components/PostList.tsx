import React from 'react';
import { useGetPostsQuery } from '../api/apiSlice';
import PostCard from './PostCard';

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostList: React.FC = () => {
  // No arguments are needed for the getPosts query
  const { data: posts, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    // Properly handle the error based on the possible error structure
    const errorMessage = (error as any)?.data?.message || 'An error occurred';
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
