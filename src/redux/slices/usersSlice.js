import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        user: {
            username: "",
            password: "",
            fullName: "",
            email: "",
            savedPosts: [],
        },
        error: null,
        currentUser: {
            username: "",
            password: "",
            fullName: "",
            email: "",
            savedPosts: [],
        },
        successMessage: null,
    },

    reducers:{
        createUser: (state, action) => {
      const newUser = action.payload;

      const existingUser = state.users.find(
        (user) => user.username === newUser.username
      );

      if (existingUser) {
        state.error = "*Username already exists*";
        state.successMessage = null;
      } else {
        state.users.push(newUser);
        state.user = {
          username: "",
          password: "",
          fullName: "",
          email: "",
        };
        state.error = null;
        state.successMessage = "User registered successfully";
      }
    },
    loginUser: (state, action) => {
      const { username, password } = action.payload;
      const loginUser = state.users.find(
        (user) => user.username === username && user.password === password
      );

      if (loginUser) {
        state.currentUser = loginUser;
        state.error = null;
      } else {
        state.error = "*Invalid username or password*";
      }
    },
    toggleSavePost: (state, action) => {
        const { postId, currentUsername } = action.payload;
        const updatedCurrentUser = {
            ...state.currentUser,
            savedPosts: state.currentUser.savedPosts.includes(postId)
                ? state.currentUser.savedPosts.filter((id) => id !== postId)
                : [...state.currentUser.savedPosts, postId],
            };
        const updatedUsers = state.users.map((user) =>
            user.username === currentUsername
            ? {
                ...user,
                savedPosts: user.savedPosts.includes(postId)
                    ? user.savedPosts.filter((id) => id !== postId)
                    : [...user.savedPosts, postId],
                }
            : user
            );
        return {
            ...state,
            users: updatedUsers,
            currentUser: updatedCurrentUser,
            };
        },
        logOut: (state) => {
        state.currentUser = {
            username: "",
            password: "",
            fullName: "",
            email: "",
            savedPosts: [],
            };
        },
    }
})

export const { createUser, loginUser, toggleSavePost, logOut } = userSlice.actions;
export default userSlice.reducer;