import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/features/auth/authApi";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [loginUser, { isLoading, isError, isSuccess }] = useLoginUserMutation();

    useEffect(() => {
        if (isError) {
            setError("Email or password not matched!");
        };
        if (isSuccess) {
            setError("");
            navigate("/");
        };
    }, [isError, isSuccess]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        setError("");
        const data = { email, password };

        loginUser(data);

    };

    return (
        <div>
            <div className="bg-gray-50 font-[sans-serif]">
                <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                    <div className="max-w-md w-full">

                        <div className="p-8 rounded-2xl bg-white shadow">
                            <h2 className="text-gray-800 text-center text-2xl font-bold">Sign in</h2>
                            {
                                error && <h2 className="text-red-700 text-center text-xl font-semibold">{error}</h2>
                            }
                            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">User Email</label>
                                    <div className="relative flex items-center">
                                        <input
                                            type="email"
                                            required
                                            className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                                            placeholder="Enter user email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Email</label>
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
                                        Sign in
                                    </button>
                                </div>
                                <p className="text-gray-800 text-sm !mt-8 text-center">Don't have an account? <Link to="/register" className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Register here</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
