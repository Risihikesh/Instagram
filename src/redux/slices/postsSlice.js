import { createSlice } from "@reduxjs/toolkit";
import posts from "../../utils/posts.json"

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: posts,
    },

    reducers: {
        createPost: (state, action) => {
            const newPost = { postId: `${state.posts.length + 1}`, ...action.payload };
            return {
              ...state,
              posts: [newPost, ...state.posts],
            };
          },
        addComment: (state, action) => {
            const { postId, comment, currentUsername } = action.payload;
            const updatedPosts = state.posts.map((post) =>
              post.postId === postId
                ? { ...post, comments: [{username: currentUsername, text: comment}, ...post.comments || []]  }
                : post
            );
            return {
              ...state,
              posts: updatedPosts,
            };
        },
        toggleLike: (state, action) => {
            const { postId, currentUsername } = action.payload;
            const updatedPosts = state.posts.map((post) =>
              post.postId === postId
                ? {
                    ...post,
                    likes: post.likes.includes(currentUsername)
                      ? post.likes.filter((username) => username !== currentUsername)
                      : [...post.likes, currentUsername],
                  }
                : post
            );
            return {
              ...state,
              posts: updatedPosts,
            };
        }
    },
});

export const { createPost, addComment, toggleLike } = postsSlice.actions;

export default postsSlice.reducer;
