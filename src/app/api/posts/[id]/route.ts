import Post from "@/models/Post";
import { connectDB } from "@/utils/mongoose";
import { NextRequest } from "next/server";

//create DELETE by id route
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    connectDB();
    const deletedPost = await Post.findByIdAndDelete(params.id);
    if (!deletedPost) {
      return Response.json({ message: "No matching id found" });
    }
    return Response.json({
      message: `Deleting post with id ${params.id}`,
      deletedPost,
    });
  } catch (err) {
    return Response.json({
      message: err,
    });
  }
}
