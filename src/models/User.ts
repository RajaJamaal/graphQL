import mongoose, { Document, Model } from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
});

export interface IUser extends Document {
  name: string;
}

const User: Model<IUser> = mongoose.model('User', userSchema);

export default User;
