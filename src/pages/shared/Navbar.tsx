import { HiArrowNarrowRight } from "react-icons/hi";

export default function Navbar() {
    return <div>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content bg-base-100 rounded-md z-[1] mt-3 w-[95vw] p-2 shadow space-y-3">
                        <li className="hover:underline hover:text-blue-500 cursor-pointer">Facility</li>
                        <li className="hover:underline hover:text-blue-500 cursor-pointer">Contact Us</li>
                        <li className="hover:underline hover:text-blue-500 cursor-pointer">About Us</li>
                    </ul>
                </div>
                <p className="hover:cursor-pointer text-xl md:text-3xl font-bold">ME<span className="text-blue-500">NE</span>RA</p>
            </div>
            <div className="navbar-start hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-x-10 text-lg font-semibold">
                    <li className="hover:underline hover:text-blue-500 cursor-pointer">Facility</li>
                    <li className="hover:underline hover:text-blue-500 cursor-pointer">Contact Us</li>
                    <li className="hover:underline hover:text-blue-500 cursor-pointer">About Us</li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="mobileAuthBtn md:h-9 md:gap-x-3">
                    <p>Login</p>
                    <HiArrowNarrowRight></HiArrowNarrowRight>
                </button>
            </div>
        </div>
    </div>;
}
