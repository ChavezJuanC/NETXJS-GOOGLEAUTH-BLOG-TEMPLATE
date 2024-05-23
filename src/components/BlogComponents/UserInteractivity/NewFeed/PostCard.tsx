import React from "react";

interface PostCardProps {
  image: string;
  username: string;
  content: string;
}

const PostCard: React.FC<PostCardProps> = ({ image, username, content }) => {
  return (
    <div className='w-postFull text-left shadow-lg pb-4 border-2 bg-white mx-auto mt-4'>
      <div className='flex justify-start place-items-center font-bold'>
        <div className='border-2 border-black rounded-full h-14 w-14 m-2'>
          <img src={image} alt="IMG" className="rounded-full"/>
        </div>
        {username}
      </div>
      <div className="w-11/12 text-left rounded-md mx-auto mt-1 max-h-44 overflow-auto text-base">{content}</div>
    </div>
  );
};

export default PostCard;
