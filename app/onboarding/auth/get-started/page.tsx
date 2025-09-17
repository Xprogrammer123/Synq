"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import Image from "next/image";



export default function GetStarted() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email submitted:", email);
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("Signed in as:", user.displayName, user.email);
        } catch (error) {
            console.error("Google sign-in error:", error);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="w-full max-w-2xl rounded-4xl bg-white p-10">
                <span className="flex items-center justify-center">
                    <Image
                        src="/synq.png"
                        alt="Google"
                        width={140}
                        height={140}

                    />
                </span>
                {/* Welcome Text */}
                <h2 className="mt-6 text-center text-3xl font-semibold text-black">
                    Welcome to <span className="font-bold text-4xl">Synq.</span>
                </h2>
                <p className="mt-2 text-center text-lg text-black">
                    Unify your workflow. Stay focused. Synq everything.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="relative">
                        <Mail
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            size={22}
                        />
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full rounded-xl border border-gray-300 bg-gray-100 text-gray-700 py-4 pl-12 pr-4 text-base outline-none focus:border-black focus:bg-white"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-black py-4 text-lg text-white font-semibold hover:bg-gray-800 transition"
                    >
                        Get Started
                    </button>
                </form>

                {/* Divider */}
                <div className="my-8 flex items-center">
                    <div className="h-px flex-1 bg-gray-300"></div>
                    <span className="mx-3 text-gray-500 text-base">OR</span>
                    <div className="h-px flex-1 bg-gray-300"></div>
                </div>

                {/* Google Button */}
                <button
                    onClick={handleGoogleSignIn}
                    className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-gray-100 py-4 text-lg text-black font-medium hover:bg-gray-200 transition"
                >
                    <Image
                        src="https://www.svgrepo.com/show/355037/google.svg" // 👉 put google logo in /public/google-logo.png
                        alt="Google"
                        width={24}
                        height={24}
                    />
                    Continue with Google
                </button>

                {/* Dots Pagination */}
                <div className="mt-8 flex justify-center gap-3">git 
                    <span className="h-3 w-3 rounded-full bg-black"></span>
                    <span className="h-3 w-3 rounded-full bg-gray-300"></span>
                    <span className="h-3 w-3 rounded-full bg-gray-300"></span>
                    <span className="h-3 w-3 rounded-full bg-gray-300"></span>
                    <span className="h-3 w-3 rounded-full bg-gray-300"></span>
                </div>
            </div>
        </div>
    );
}
