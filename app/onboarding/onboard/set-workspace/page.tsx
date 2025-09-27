"use client";

import { useState, useRef } from "react";
import { ArrowRight, Trash2, Users, User, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WorkspaceSetup() {
  const router = useRouter();
  const [emails, setEmails] = useState<string[]>([]);
  const [inputEmail, setInputEmail] = useState("");
  const [visibleCount, setVisibleCount] = useState(2);
  const [emailError, setEmailError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const addEmail = () => {
    const trimmed = inputEmail.trim();
    if (trimmed && !emails.includes(trimmed)) {
      setEmails((prev) => [...prev, trimmed]);
      setInputEmail("");
      setEmailError(null);
    }
  };

  const removeEmail = (index: number) => {
    setEmails((prev) => prev.filter((_, i) => i !== index));
  };

  const showMore = () => {
    const newCount = Math.min(visibleCount + 1, emails.length);
    setVisibleCount(newCount);

    setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollTo({
          top: listRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const showLess = () => {
    setVisibleCount(2);
    if (listRef.current) {
      listRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError(null);

    // If there are already emails, just route
    if (emails.length > 0) {
      router.push("/onboarding/onboard/add-profile");
      return;
    }

   
    const typed = inputEmail.trim();
    if (typed) {
      setEmails((prev) => [...prev, typed]);
      setInputEmail("");
      router.push("/onboarding/onboard/select-role");
      return;
    }

    // Otherwise show inline error and do not route
    setEmailError("Please add at least one email to continue.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="w-full max-w-lg rounded-3xl bg-[#151515] shadow-2xl p-10 relative">
        <div className="flex justify-center mb-5">
          <Image src="/Synqicon.png" alt="Synq Logo" width={50} height={50} />
        </div>

        <h1
          className="text-3xl font-bold text-center text-white text-primary">
          Set up your workspace
        </h1>
        <p className="text-gray-500 text-center mt-2 mb-8">
          Give your team a home inside Synq. <br /> Don&apos;t worry, you can change
          this later.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Workspace name input */}
          <div className="flex items-center gap-2 rounded-xl bg-zinc-500/10 px-4 py-4">
            <Users className="w-5 h-5 text-white" />
            <input
              type="text"
              placeholder="Enter team/user name"
              className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-300"
            />
          </div>

          {/* Invite section */}
          <div>
            <label className="font-medium text-white mb-2 block">
              Invite Team Members (optional)
            </label>

            {/* Input with add button inside */}
            <div className="flex items-center gap-2 rounded-xl bg-zinc-500/10 px-2 py-2 mb-1">
              <User className="w-5 h-5 text-white ml-2" />
              <input
                type="email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                placeholder="Enter member email"
                className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-300 px-2"
              />
              <button
                type="button"
                onClick={addEmail}
                className="flex items-center justify-center bg-black text-violet-600 p-2 rounded-lg hover:bg-violet-500 hover:text-white "
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

           
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}

           
            {emails.length > 0 && (
              <div className="relative mt-3">
                <div
                  ref={listRef}
                  className="max-h-[240px] overflow-hidden no-scrollbar transition-all duration-300"
                >
                  {emails.slice(0, visibleCount).map((email, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-xl border border-violet-700 bg-violet-800/10 px-4 py-2 mb-2"
                    >
                      <span className="text-white font-semibold">{email}</span>
                      <button
                        type="button"
                        onClick={() => removeEmail(i)}
                        className="w-8 h-8 flex items-center justify-center rounded-md text-red-800 hover:text-white hover:bg-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {emails.length > visibleCount && (
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent flex items-end justify-center">
                    <button
                      type="button"
                      onClick={showMore}
                      className="flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-white"
                    >
                      See more <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {visibleCount >= emails.length && emails.length > 3 && (
                  <div className="flex justify-center mt-2">
                    <button
                      type="button"
                      onClick={showLess}
                      className="flex items-center gap-1 text-sm font-medium text-gray-400 hover:text-white"
                    >
                      See less <ChevronUp className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#6B48FF] text-white text-lg font-medium hover:bg-gray-900 shadow-md mb-6"
          >
            Create Workspace
          </button>

          <div className="flex justify-center gap-2 mt-6">
            <span className="w-3 h-3 rounded-full bg-[#6B48FF]"></span>
            <span className="w-3 h-3 rounded-full bg-gray-600"></span>
            <span className="w-3 h-3 rounded-full bg-gray-600"></span>
            <span className="w-3 h-3 rounded-full bg-gray-600"></span>
          </div>
        </form>
      </div>
    </div>
  );
}

<style jsx global>{`
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`}</style>
