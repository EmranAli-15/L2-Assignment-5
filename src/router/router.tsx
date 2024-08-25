import { createBrowserRouter } from "react-router-dom";
import Prime from "../layout/Prime";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Prime></Prime>,
        children: [
            {
                path: "/",
                element: <App></App>
            }
        ]
    },
]);

export default router;