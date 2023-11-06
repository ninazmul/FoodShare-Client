
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import About from "../Pages/About";
import AddFood from "../Pages/AddFood";
import ManageFood from "../Pages/ManageFood";
import FoodReq from "../Pages/FoodReq";
import AvailableFood from "../Pages/AvailableFood";
import SignIn from "../Pages/LogReg/SignIn";
import SignUp from "../Pages/LogReg/SignUp";
import PrivateRoute from "./PrivateRoute";
import FoodDetails from "../Pages/FoodDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/available",
        element: <AvailableFood></AvailableFood>,
      },
      {
        path: "/available/:id",
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage",
        element: (
          <PrivateRoute>
            <ManageFood></ManageFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/request",
        element: (
          <PrivateRoute>
            <FoodReq></FoodReq>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
