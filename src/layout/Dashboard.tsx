import { Outlet } from "react-router-dom";
import Admin from "../pages/dashboard/Admin";
import User from "../pages/dashboard/User";
import { useState } from "react";

export default function Dashboard() {

    const admin = true;

    const [open, setOpen] = useState(false);

    return (
        <div>
            <div>
                <button onClick={() => setOpen(true)} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
            </div>
            <div>
                {
                    admin ? <Admin open={open} setOpen={setOpen}></Admin> : <User open={open} setOpen={setOpen}></User>
                }
            </div>
            <div className="w-screen h-screen" onClick={() => setOpen(false)}>
                <Outlet></Outlet>
            </div>
        </div>
    );
}
