import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import UserType from './models/User';
import PostType from './models/Posts';
import CommentType from './models/Comments';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // Define your queries here
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
      },
      resolve(parent, args) {
        const user = new User({
          name: args.name,
        });
        return user.save();
      },
    },
    createPost: {
      type: PostType,
      args: {
        userId: { type: GraphQLString },
        title: { type: GraphQLString },
        image: { type: GraphQLString },
      },
      resolve(parent, args) {
        const post = new Post({
          userId: args.userId,
          title: args.title,
          image: args.image,
        });
        return post.save();
      },
    },
    createComment: {
      type: CommentType,
      args: {
        postId: { type: GraphQLString },
        text: { type: GraphQLString },
      },
      resolve(parent, args) {
        const comment = new Comment({
          postId: args.postId,
          text: args.text,
        });
        return comment.save();
      },
    },
  },
});

export default schema;

// ...
