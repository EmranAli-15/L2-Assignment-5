import { createBrowserRouter, Navigate } from "react-router-dom";
import Prime from "../layout/Prime";
import Login from "../pages/auth/Login";
import Landing from "../pages/landing/Landing";
import Dashboard from "../layout/Dashboard";
import Create from "../pages/dashboard/admin/Create";
import Update from "../pages/dashboard/admin/Update";
import Welcome from "../pages/dashboard/Welcome";
import Register from "../pages/auth/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Prime></Prime>,
        children: [
            {
                path: "/",
                element: <Landing></Landing>
            },


            // auth related routes
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "/dashboard",
                element: <Navigate to="dashboard/admin/welcome" replace />
            },
            {
                path: "dashboard/admin/welcome",
                element: <Welcome></Welcome>
            },
            {
                path: "dashboard/admin/create",
                element: <Create></Create>
            },
            {
                path: "dashboard/admin/update",
                element: <Update></Update>
            },
        ]
    }
]);

export default router;