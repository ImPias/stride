import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import PrivateRoute from "./private/PrivateRoute";
import ProductDetails from "../pages/ProductDetails";
import AllProducts from "../pages/AllProducts";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch("http://localhost:3000/shoes")
            },
            {
                path: '/product/:id',
                element: <ProductDetails />,
                loader: ({ params }) => fetch(`http://localhost:3000/shoes/${params.id}`)
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
    {
        path: "dashboard",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "home",
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                )
            },
            {
                path: "all-products",
                element: (
                    <PrivateRoute>
                        <AllProducts />
                    </PrivateRoute>
                )
            },
            {
                path: "add-product",
                element: (
                    <PrivateRoute>
                        <AddProduct />
                    </PrivateRoute>
                )
            },
            {
                path: "all-products/edit/:id",
                element: (
                    <PrivateRoute>
                        <EditProduct />
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`http://localhost:3000/shoes/${params.id}`)
            },
            {
                path: "profile",
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                )
            }
        ]
    }
]);