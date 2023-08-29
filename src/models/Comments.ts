import mongoose, { Document, Model, Schema } from 'mongoose';

const commentSchema = new Schema({
  postId: String,
  text: String,
});

export interface IComment extends Document {
  postId: string;
  text: string;
}

const Comment: Model<IComment> = mongoose.model('Comment', commentSchema);

export default Comment;
