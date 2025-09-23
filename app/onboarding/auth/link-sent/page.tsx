"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { XCircle, Mail, ArrowLeft } from "lucide-react";
import Image from "next/image";

function LinkSentContent() {
  const searchParams = useSearchParams();

  const status = searchParams.get("status");
  const email = searchParams.get("email") || "";

  // Detect email provider
  const getMailProviderUrl = (email: string) => {
    if (!email.includes("@")) return "https://mail.google.com";
    const domain = email.split("@")[1].toLowerCase();

    if (domain.includes("gmail")) return "https://mail.google.com";
    if (domain.includes("yahoo")) return "https://mail.yahoo.com";
    if (
      domain.includes("outlook") ||
      domain.includes("hotmail") ||
      domain.includes("live")
    )
      return "https://outlook.live.com";

    return `https://${domain}`;
  };

  const mailUrl = getMailProviderUrl(email);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 shadow-lg relative">
        {status === "success" ? (
          <>
            <div className="flex justify-center mb-5">
              <Image
                src="/Synqicon.png"
                alt="Synq Logo"
                width={50}
                height={50}
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/success.png"
                alt="Success"
                width={100}
                height={100}
              />
            </div>
            <h2
              className="mt-4 text-4xl font-bold text-black text-center"
              style={{ fontFamily: "SF Pro Display, sans-serif" }}
            >
              Magic Link sent!
            </h2>
            <p
              className="text-gray-600 mt-2 text-center mb-8"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Kindly check your email for the magic link verification
            </p>
            <a
              href={mailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-4 text-sm font-semibold text-white hover:bg-gray-800 transition mb-3"
            >
              <Mail size={18} />
              Go to Mail
            </a>
          </>
        ) : (
          <>
            <div className="flex justify-center mb-5">
              <Image
                src="/Synqicon.png"
                alt="Synq Logo"
                width={50}
                height={50}
              />
            </div>
            <XCircle className="mx-auto h-30 w-30 text-red-500" />
            <h2 className="mt-4 text-2xl font-bold text-red-700 text-center">
              Something went wrong
            </h2>
            <p className="text-gray-600 mt-2 mb-8 text-center">
              Please try again or check your email address.
            </p>
            <a
              href="/onboarding/auth/welcome"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-4 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
              <ArrowLeft size={18} />
              Go Back
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default function MagicLinkSentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LinkSentContent />
    </Suspense>
  );
}
