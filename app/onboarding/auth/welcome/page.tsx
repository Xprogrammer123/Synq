"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, User } from "lucide-react";
import Image from "next/image";


export default function Welcome() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/auth/request-link`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (res.ok) {
        router.push(`link-sent?status=success&email=${encodeURIComponent(email)}`);
      } else {
        router.push(`link-sent?status=error&email=${encodeURIComponent(email)}`);
      }
    } catch (err) {
      console.error("Request link error:", err);
      router.push(`link-sent?status=error&email=${encodeURIComponent(email)}`);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-xl rounded-3xl bg-[#151515] p-10 shadow-lg">
        {/* Logo */}
        <div className="flex justify-center">
          <Image src="/Synqicon.png" alt="Synq Logo" width={50} height={50} />
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-3xl font-bold text-white"
          style={{ fontFamily: "SF Pro Display, sans-serif" }}>
          Welcome to <span className="font-extrabold">Synq.</span>
        </h2>
        <p className="mt-2 text-center text-gray-400"
          style={{ fontFamily: "DM Sans, sans-serif" }}>
          Unify your workflow. Stay focused. Synq everything.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-700"
              size={20}
            />
            <input
              type="text"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-xl border border-violet-300 bg-violet-800/10 py-4 pl-10 pr-4 text-md text-gray-700 focus:border-violet-400 focus:bg-violet-200 focus:outline-none placeholder:text-gray-400"
            />
          </div>
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-700"
              size={20}
            />
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-violet-300 bg-violet-800/10 py-4 pl-10 pr-4 text-md text-gray-700 focus:border-violet-400 focus:bg-violet-200 focus:outline-none placeholder:text-gray-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#6B48FF] py-4 text-sm font-semibold text-white hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Get Started"}
          </button>
        </form>
      </div>
    </div>
  );
}
