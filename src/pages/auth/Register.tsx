import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../redux/features/auth/authApi";

export default function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const [error, setError] = useState("");
    const [registerUser, { isLoading, isError, isSuccess }] = useRegisterUserMutation();

    useEffect(() => {
        if (isError) {
            setError("There was an error!");
        };
        if (isSuccess) {
            navigate("/");
        }
    }, [])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setError("");

        const data = {
            name, email, phone, address, password
        };

        if (password !== confirmPass) {
            return setError("Password not matched");
        } else {
            registerUser(data)
        }
    };

    return (
        <div>
            <div className="bg-gray-50 font-[sans-serif]">
                <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                    <div className="max-w-md w-full">

                        <div className="p-8 rounded-2xl bg-white shadow">
                            <h2 className="text-gray-800 text-center text-2xl font-bold">Register</h2>
                            {
                                error && <h2 className="text-red-700 text-center text-xl font-semibold">{error}</h2>
                            }
                            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">User Name</label>
                                    <div className="relative flex items-center">
                                        <input
                                            type="text"
                                            required
                                            className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                                            placeholder="Enter user name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Email</label>
                                    <div className="relative flex items-center">
                                        <input
                                            type="email"
                                            required
                                            className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Phone</label>
                                    <div className="relative flex items-center">
                                        <input
                                            type="number"
                                            required
                                            className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                                            placeholder="Enter phone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Address</label>
                                    <div className="relative flex items-center">
                                        <input
                                            type="text"
                                            required
                                            className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                                            placeholder="Enter address"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                    <div className="relative flex items-center">
                                        <input
                                            type="password"
                                            required
                                            className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                                            placeholder="Enter password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                                    <div className="relative flex items-center">
                                        <input
                                            type="password"
                                            required
                                            className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                                            placeholder="Confirm password"
                                            value={confirmPass}
                                            onChange={(e) => setConfirmPass(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                        <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <a className="text-blue-600 hover:underline font-semibold">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>

                                <div className="!mt-8">
                                    <button disabled={isLoading} type="submit" className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                                        Register
                                    </button>
                                </div>
                                <p className="text-gray-800 text-sm !mt-8 text-center">already have an account? <Link to="/login" className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Sign In here</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
