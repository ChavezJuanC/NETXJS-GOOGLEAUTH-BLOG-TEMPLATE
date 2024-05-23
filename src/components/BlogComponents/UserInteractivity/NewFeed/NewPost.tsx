"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const NewPost = () => {
  const router = useRouter();
  const [postContent, setPostContent] = useState<string>("");
  //new post//
  const { data: session } = useSession();
  const userName = session?.user?.name;
  const ImagePath = session?.user?.image;

  const handleSubmitPost = async () => {
    const Post = {
      user: userName,
      img: ImagePath,
      content: postContent,
    };

    const postBody = JSON.stringify(Post);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: postBody,
        headers: {
          ContentType: "application/json",
        },
      });

      if (res.ok) {
        setPostContent("");
        router.refresh();
      } else {
        console.error("Error Posting");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className='w-postFull mx-auto'>
        <div className='flex'>
          <img
            src={ImagePath || ""}
            alt='IMG'
            className='border-2 border-black rounded-full h-14 w-14 mr-4'
          />
          <textarea
            value={postContent}
            onChange={(event) => setPostContent(event.target.value)}
            rows={4}
            className='w-postFull bg-white border-2 border-slate-950 text-md overflow-auto resize-none rounded p-1'
            placeholder="Let's blog it!"
          ></textarea>
        </div>
        <div className='text-right w-postFull mx-auto'>
          <button
            className=' rounded-md text-sm border-2 bg-slate-950 text-white m-1 px-2 py-0.5 font-semibold
          hover:shadow-lg shadow-black active:-translate-y-0.5 transition-transform'
            onClick={handleSubmitPost}
          >
            POST
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
