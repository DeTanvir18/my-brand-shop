import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/shared/ErrorPage/ErrorPage";
import MyCart from "../pages/MyCart/MyCart";
import AddACar from "../pages/AddACar/AddACar";
import CarsByBrand from "../pages/Home/CarsByBrand/CarsByBrand";
import CarDetails from "../pages/Home/CarDetails/CarDetails";
import UpdateCar from "../pages/UpdateCar/UpdateCar";
import PrivateRoute from "./PrivateRoute";
import PrivateRouteCart from "./PrivateRouteCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/brands/:name",
        element: <CarsByBrand></CarsByBrand>,
        loader: ({ params }) => fetch(`https://brand-shop-server-apknkjf7e-detanvir.vercel.app/brands/${params.name}`)
      },
      {
        path: '/cardetails/:id',
        element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-apknkjf7e-detanvir.vercel.app/cars/${params.id}`)
      },
      {
        path: "updatecar/:id",
        element: <PrivateRoute><UpdateCar></UpdateCar></PrivateRoute>,
        loader: ({ params }) => fetch(`https://brand-shop-server-apknkjf7e-detanvir.vercel.app/cars/${params.id}`)
      },
      {
        path: "/addcar",
        element: <PrivateRoute><AddACar></AddACar></PrivateRoute>
      },
      {
        path: "/mycart/:email",
        element: <PrivateRouteCart><MyCart></MyCart></PrivateRouteCart>,
        loader: ({ params }) => fetch(`https://brand-shop-server-apknkjf7e-detanvir.vercel.app/cart/${params.email}`)
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  },
]);

export default router;
