import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Layouts";
import { Error } from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PicOfTheDay from "../Pages/PicOfTheDay/PicOfTheDay";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/picoftheday',
        element: <PicOfTheDay/>
      }
    ]
  }
])

export default router