"use client";

import { useState } from "react";
import { Plus, Trash2, Users, User } from "lucide-react";
import Image from "next/image"
export default function WorkspaceSetup() {
  const [emails, setEmails] = useState(["samanthasmith@gmail.com"]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl p-10 relative">
        <div className="flex justify-center mb-5">
          <Image src="/synqicon.png" alt="Synq Logo" width={50} height={50} />
        </div>


        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-black"
         style={{ fontFamily: "SF Pro Display, sans-serif" }}>Set up your workspace</h1>
        <p className="text-gray-500 text-center mt-2 mb-8">
          Give your team a home inside Synq. <br /> Don’t worry, you can change
          this later.
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Team/User Name */}
          <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-100 px-4 py-3">
            <Users className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Enter team/user name"
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Invite Section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="font-medium text-gray-900">
                Invite Team Members (optional)
              </label>
              <button
                type="button"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Invite input */}
            <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 mb-3">
              <User className="w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Enter member email"
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Added email chips */}
            {emails.map((email, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 mb-2"
              >
                <span className="text-gray-800">{email}</span>
                <button
                  type="button"
                  onClick={() =>
                    setEmails(emails.filter((_, index) => index !== i))
                  }
                  className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-200"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Create Workspace button */}
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
