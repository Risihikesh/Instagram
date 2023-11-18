import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import SignUp from './components/auth/signUp';
import Login from './components/auth/login';
import Home from './components/home/home';
import CommentSection from './components/home/commentSection';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children:[
      {
        path: '/',
        element: <SignUp />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/comments',
        element: <CommentSection />
      },
      {
        path: '/home/:postId',
        element: <CommentSection />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);