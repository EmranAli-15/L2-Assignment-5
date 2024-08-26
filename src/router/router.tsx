import { createBrowserRouter } from "react-router-dom";
import Prime from "../layout/Prime";
import Login from "../pages/auth/Login";
import Landing from "../pages/landing/Landing";

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
            }
        ]
    }
]);

export default router;