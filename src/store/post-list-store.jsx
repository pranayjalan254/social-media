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
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Post 1",
    body: "Content for post 1",
    reactions: "10+",
    userId: "user-1",
    tags: ["tag1", "tag2"],
  },
  {
    id: "2",
    title: "Post 2",
    body: "Content for post 2",
    reactions: "8",
    userId: "user-2",
    tags: ["tag3", "tag4"],
  },
];
export default PostListProvider;
