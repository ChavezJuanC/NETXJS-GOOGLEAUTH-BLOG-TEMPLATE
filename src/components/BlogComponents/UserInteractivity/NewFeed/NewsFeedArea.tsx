import React from "react";
import NewPost from "./NewPost";
import RecentPosts from "./RecentPosts";

const NewsFeedArea = () => {
  return (
    <div className="mb-10">
      <div className='text-center mx-auto pt-10'>
        <NewPost />
      </div>
      <hr className='w-1/2 mx-auto' />
      <div className="text-center">
        <RecentPosts />
      </div>
    </div>
  );
};

export default NewsFeedArea;
