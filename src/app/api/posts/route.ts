import { connectDB } from "@/utils/mongoose";
import { NextRequest } from "next/server";
import Post from "@/models/Post";

//create GET all route
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const Posts = await Post.find();
    return Response.json(Posts);
  } catch (error) {
    return Response.json({ message: error }, { status: 400 });
  }
}

//create POST route
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const data = await request.json();
    const newPost = new Post(data);
    const postedData = await newPost.save();
    return Response.json({
      message: "New Post",
      post: postedData,
    });
  } catch (err) {
    return Response.json({ message: err });
  }
}
