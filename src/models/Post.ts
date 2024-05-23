import { models, model, Schema, Document } from "mongoose";

interface IPost extends Document {
  user: string;
  content: string;
  img: string;
}

const PostScheama: Schema = new Schema(
  {
    user: { type: String, required: true, trim: true, unique: false },
    content: { type: String, required: true, trim: true, unique: false },
    img: { type: String, required: true, trim: true, unique: false },
  },
  { timestamps: true }
);

export default models.Post || model<IPost>("Post", PostScheama);
