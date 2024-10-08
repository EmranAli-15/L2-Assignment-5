import { createBrowserRouter, Navigate } from "react-router-dom";
import Prime from "../layout/Prime";
import Login from "../pages/auth/Login";
import Landing from "../pages/landing/Landing";
import Dashboard from "../layout/Dashboard";
import Create from "../pages/dashboard/admin/Create";
import Update from "../pages/dashboard/admin/Update";
import Welcome from "../pages/dashboard/Welcome";
import Register from "../pages/auth/Register";
import AdminSecure from "./PrivetRoute";
import UpdateFacility from "../pages/dashboard/admin/UpdateFacility";
import FacilityListing from "../pages/facilityListing/FacilityListing";
import Bookings from "../pages/booking/Bookings";
import UserPrivet from "./UserPrivate";
import MyBookings from "../pages/dashboard/user/MyBookings";
import AllBookings from "../pages/dashboard/admin/AllBookings";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Prime></Prime>,
        children: [
            {
                path: "/",
                element: <Landing></Landing>
            },
            {
                path: "/facilityListing",
                element: <FacilityListing></FacilityListing>
            },
            {
                path: "/bookings/:id",
                element: <Bookings></Bookings>
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
                element: <AdminSecure><Create></Create></AdminSecure>
            },
            {
                path: "dashboard/admin/update",
                element: <AdminSecure><Update></Update></AdminSecure>
            },
            {
                path: "/dashboard/admin/updateFacility/:id",
                element: <AdminSecure><UpdateFacility></UpdateFacility></AdminSecure>
            },
            {
                path: "/dashboard/admin/allBookings",
                element: <AdminSecure><AllBookings></AllBookings></AdminSecure>
            },


            // user protection
            {
                path: "/dashboard/user/myBookings",
                element: <UserPrivet><MyBookings></MyBookings></UserPrivet>
            },
        ]
    }
]);

export default router;