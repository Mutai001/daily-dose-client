// src/pages/Home.tsx
import PostList from '../Components/PostList';
import Sidebar from '../Components/Sidebar';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4 flex">
      <Sidebar />
      <main className="flex-1">
        <PostList />
      </main>
    </div>
  );
};

export default Home;
