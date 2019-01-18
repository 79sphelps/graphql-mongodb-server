import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/";
//import Post from "./Post/";
//import Comment from "./Comment/";

//const resolvers = [User, Post, Comment];
const resolvers = [User];

export default mergeResolvers(resolvers);
