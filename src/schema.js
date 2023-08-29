"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const User_1 = __importDefault(require("./models/User"));
const Posts_1 = __importDefault(require("./models/Posts"));
const Comments_1 = __importDefault(require("./models/Comments"));
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
    // Define your queries here
    },
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: {
            type: User_1.default,
            args: {
                name: { type: graphql_1.GraphQLString },
            },
            resolve(parent, args) {
                const user = new User({
                    name: args.name,
                });
                return user.save();
            },
        },
        createPost: {
            type: Posts_1.default,
            args: {
                userId: { type: graphql_1.GraphQLString },
                title: { type: graphql_1.GraphQLString },
                image: { type: graphql_1.GraphQLString },
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
            type: Comments_1.default,
            args: {
                postId: { type: graphql_1.GraphQLString },
                text: { type: graphql_1.GraphQLString },
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
exports.default = schema;
// ...
