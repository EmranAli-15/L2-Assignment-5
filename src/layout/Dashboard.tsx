import { Link, Navigate, Outlet } from "react-router-dom";
import Admin from "../pages/dashboard/Admin";
import User from "../pages/dashboard/User";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { useAppSelector } from "../redux/hooks";

export default function Dashboard() {
    const [open, setOpen] = useState(false);

    const { user } = useAppSelector(state => state.auth) || {};
    const { role } = user || {};

    return (
        <div className="relative">
            <div>
                <div className="flex items-center justify-between">
                    <button onClick={() => setOpen(true)} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                    </button>
                    <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FaHome className="text-gray-500" size={24}></FaHome>
                    </Link>
                </div>
                <div>
                    {
                        role === "admin" ? <Admin open={open} setOpen={setOpen}></Admin> : role === "user" ? <User open={open} setOpen={setOpen}></User> : <h1>Loading...</h1>
                    }
                </div>
            </div>

            <div className="md:absolute left-64 md:w-[calc(100vw_-_18rem)] h-screen px-2 md:px-10" onClick={() => setOpen(false)}>
                <Outlet></Outlet>
            </div>
        </div>
    );
};
