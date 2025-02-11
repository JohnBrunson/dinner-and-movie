import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
// Commenting out James' work temporarily
// import Home from "./pages/home";
import HomeContingent from "./pages/homeContingent";
import Favorites from "./pages/favorites";
import Login from "./components/loginContingent";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./index.css";

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      //errorElement: <Error />,
      children: [
        {
          index: true,
          // element: <Home />,
          element: <HomeContingent />,
        },
        {
          path: '/favorites',
          element: <Favorites />,
        },
        {
          path: '/login', // Temporary login route
          element: <Login />,
        },
      ],
    },
  ]);
  
  // ReactDOM.createRoot(document.getElementById('root')).render(
  //   <RouterProvider router={router} />
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router} />
  );