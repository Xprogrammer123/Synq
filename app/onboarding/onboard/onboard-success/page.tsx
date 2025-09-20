"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
export default function MagicLinkSent() {


   const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 shadow-lg relative">
        {/* Success state */}
        <div className="flex justify-center mb-5">
          <Image src="/synqicon.png" alt="Synq Logo" width={50} height={50} />
        </div>
        <div className="flex justify-center">
          <Image src="/success.png" alt="Success" width={100} height={100} />
        </div>
        <h2
          className="mt-4 text-4xl font-bold text-black text-center"
          style={{ fontFamily: "SF Pro Display, sans-serif" }}
        >
          You're all Synq'd up
        </h2>
        <p
          className="text-gray-700 mt-2 text-center mb-8 "
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Here's a preview of your synced data.<br />
          You're ready to work smarter.
        </p>
        <a
          href="/mail"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-4 text-md font-semibold text-white hover:bg-gray-800 transition mb-3"
        >

          Go to Dashboard
        </a>
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1 text-gray-600 hover:text-black"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
