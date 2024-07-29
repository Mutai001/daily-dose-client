// src/components/PostCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="p-4 border-b">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.body.substring(0, 100)}...</p>
      <Link to={`/posts/${post.id}`} className="text-blue-500">
        Read more
      </Link>
    </div>
  );
};

export default PostCard;
