"use client";

import { useState, useRef } from "react";
import { ArrowRight, Trash2, Users, User, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WorkspaceSetup() {
  const [emails, setEmails] = useState<string[]>([]);
  const [inputEmail, setInputEmail] = useState("");
  const [teamName, setTeamName] = useState("");
  const [visibleCount, setVisibleCount] = useState(2);
  const [errors, setErrors] = useState<{ teamName?: string }>({});
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const addEmail = () => {
    if (inputEmail.trim() && !emails.includes(inputEmail)) {
      setEmails([...emails, inputEmail.trim()]);
      setInputEmail("");
    }
  };

  const removeEmail = (index: number) => {
    setEmails(emails.filter((_, i) => i !== index));
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

    const newErrors: { teamName?: string } = {};

    if (!teamName.trim()) {
      newErrors.teamName = "Team/User name is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      router.push("/add-profile");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl p-10 relative">
        <div className="flex justify-center mb-5">
          <Image src="/synqicon.png" alt="Synq Logo" width={50} height={50} />
        </div>

        <h1
          className="text-3xl font-bold text-center text-black"
          style={{ fontFamily: "SF Pro Display, sans-serif" }}
        >
          Set up your workspace
        </h1>
        <p className="text-gray-500 text-center mt-2 mb-8">
          Give your team a home inside Synq. <br /> Don’t worry, you can change
          this later.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Team name */}
          <div>
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-100 px-4 py-3">
              <Users className="w-5 h-5 text-black" />
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Enter team/user name - Phantom Builders/John Doe"
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500"
              />
            </div>
            {errors.teamName && (
              <p className="text-red-500 text-sm mt-1">{errors.teamName}</p>
            )}
          </div>

          {/* Invite Members */}
          <div>
            <label className="font-medium text-gray-900 mb-2 block">
              Invite Team Members (optional)
            </label>

            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-100 px-2 py-1 mb-3">
              <User className="w-5 h-5 text-black ml-2" />
              <input
                type="email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                placeholder="Enter member email"
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500 px-2"
              />
              <button
                type="button"
                onClick={addEmail}
                className="flex items-center justify-center bg-black text-white p-2 rounded-lg hover:bg-gray-900"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Emails list */}
            {emails.length > 0 && (
              <div className="relative">
                <div
                  ref={listRef}
                  className="max-h-[240px] overflow-hidden no-scrollbar transition-all duration-300"
                >
                  {emails.slice(0, visibleCount).map((email, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 mb-2"
                    >
                      <span className="text-gray-800">{email}</span>
                      <button
                        type="button"
                        onClick={() => removeEmail(i)}
                        className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-200"
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
                      className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-black"
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
                      className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-black"
                    >
                      See less <ChevronUp className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-black text-white text-lg font-medium hover:bg-gray-900 shadow-md"
          >
            Create Workspace
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            <span className="w-3 h-3 rounded-full bg-black"></span>
            <span className="w-3 h-3 rounded-full bg-gray-200"></span>
            <span className="w-3 h-3 rounded-full bg-gray-200"></span>
            <span className="w-3 h-3 rounded-full bg-gray-200"></span>
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
