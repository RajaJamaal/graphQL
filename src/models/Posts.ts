import mongoose, { Document, Model, Schema } from 'mongoose';

const postSchema = new Schema({
  userId: String,
  title: String,
  image: String,
});

export interface IPost extends Document {
  userId: string;
  title: string;
  image: string;
}

const Post: Model<IPost> = mongoose.model('Post', postSchema);

export default Post;
