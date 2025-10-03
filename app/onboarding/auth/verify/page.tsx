"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const VerifyPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setLoading(false);
      setErrorMsg("❌ Token not found. Please request a new link.");
      return;
    }

    const verifyToken = async () => {
      try {
        const res = await fetch(
          `${API_URL}/auth/verify-token?token=${encodeURIComponent(token)}`,
          {
            method: "GET",
            credentials: "include", // ✅ important so cookies get saved
          }
        );

        const data = await res.json();

        if (!res.ok) {
          // Handle specific error messages
          if (data?.error?.includes("expired")) {
            setErrorMsg("⏰ This link has expired. Please request a new one.");
          } else if (data?.error?.includes("Invalid")) {
            setErrorMsg("⚠️ Invalid token. Please request a new link.");
          } else {
            setErrorMsg(data?.error || "Something went wrong.");
          }
        } else {
          // ✅ Success → redirect to dashboard or show success screen
          router.push("/dashboard"); 
        }
      } catch (err) {
        console.error("Verification error:", err);
        setErrorMsg("🚨 Network error. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [searchParams, API_URL, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        {loading && (
          <>
            <div className="loader"></div>
            <p className="text-white/70">We’re verifying your token...</p>
          </>
        )}

        {!loading && errorMsg && (
          <div className="flex flex-col gap-3 items-center">
            <p className="text-red-400 font-medium">{errorMsg}</p>
            <button
              onClick={() => router.push("/")}
              className="mt-2 rounded-xl bg-[#6B48FF] px-4 py-2 text-white transition"
            >
              Request New Link
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyPage;
