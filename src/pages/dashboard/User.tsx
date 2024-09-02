import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { userLoggedOut } from "../../redux/features/auth/authSlice";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useGetUserBookingsQuery } from "../../redux/features/bookings/bookingsApi";

export default function User({ open, setOpen }: { open: boolean, setOpen: (arg: boolean) => void }) {
    const [totalBooked, setTotalBooked] = useState(0);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { data: facilities, isLoading, isError } = useGetUserBookingsQuery(undefined);

    useEffect(() => {
        if(facilities && !isLoading && !isError){
            setTotalBooked(facilities.data.length);
        }
    },[isLoading, isError, facilities])

    const handleLogout = () => {
        dispatch(userLoggedOut());
        navigate("/");
    };

    return (
        <div>

            <aside id="default-sidebar" className={`${!open && `-translate-x-full`} fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0`} aria-label="Sidebar">

                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li className="flex justify-end">
                            <button onClick={() => setOpen(!open)} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                        </li>
                        <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FaHome className="text-gray-500" size={24}></FaHome>
                            <span className="ms-3">Back Home</span>
                        </Link>
                        <Link to="/dashboard/user/myBookings">
                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">My Bookings</span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">{totalBooked}</span>
                            </div>
                        </Link>
                        <div onClick={handleLogout} className="flex cursor-pointer items-center text-gray-500 p-2 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FaSignOutAlt size={24}></FaSignOutAlt>
                            <span className="flex-1 ms-3 whitespace-nowrap text-gray-900">Sing Out</span>
                        </div>
                    </ul>
                </div>

            </aside>

        </div>
    );
};
