import PostCard from "./PostCard";
import { connectDB } from "@/utils/mongoose";
import Post from "@/models/Post";

const RecentPosts: React.FC = async () => {

  connectDB();
  const fetchedPosts = await Post.find();

  return (
    <div>
      {fetchedPosts.map((element) => (
        <PostCard
          key={element.id}
          image={element.img}
          username={element.user}
          content={element.content}
        />
      ))}
    </div>
  );
};

export default RecentPosts;
