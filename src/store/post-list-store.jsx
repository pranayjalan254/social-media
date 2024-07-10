import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostListProvider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListProvider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Post 1",
    body: "Content for post 1",
    reactions: 0,
    userId: "user-1",
    tags: ["tag1", "tag2"],
  },
  {
    id: "2",
    title: "Post 2",
    body: "Content for post 2",
    reactions: 15,
    userId: "user-2",
    tags: ["tag3", "tag4"],
  },
];
export default PostListProvider;
