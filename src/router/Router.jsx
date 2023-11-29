import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../components/pages/home/Home";
import Error from "../error/Error";
import SignUp from "../components/pages/account/signUp/SignUp";
import Login from "../components/pages/account/login/Login";
import Product from "../components/pages/product/Product";
import Dashboard from "../components/shared/dashboard/Dashboard";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product",
        element: (
          <PrivateRouter>
            <Product></Product>
          </PrivateRouter>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/logIn",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
