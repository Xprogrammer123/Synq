"use client";

import {
  Activity,
  Bookmark,
  MoreHorizontal,
  User,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const WorkSpaceCard = () => {
  const router = useRouter();

  const handleEnterWorkspace = () => {
    router.push("/dashboard/workspace/id/documents");
  };

  return (
    <div className="border p-7 border-white/7 rounded-3xl bg-white/2 flex gap-5 flex-col">
      {/* Header */}
      <div className="flex justify-between w-full items-center">
        <p className="text-zinc-500">Created by Aurora</p>
        <p className="flex justify-end text-white/90 gap-2 font-medium">
          <User className="w-5 h-5 text-white/65" /> Member
        </p>
      </div>

      {/* Main content */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Phantom HQ</h1>
          <p className="text-white/20">Updated Yesterday</p>
        </div>

        <div className="border border-white/7 bg-white/5 flex rounded-full items-center gap-3 w-full p-3 px-5 font-medium text-[17px]">
          <Activity className="h-5 w-5 text-white/40" /> New doc uploaded: Project
          Brief.pdf
        </div>

        <div className="flex gap-3">
          <div className="border border-white/7 bg-white/5 flex rounded-full items-center gap-3 w-full p-3 px-4 font-medium text-[17px]">
            <Bookmark fill="#FFFFFF40" className="h-5 w-5 text-white/0" />
            #UI Redesign
          </div>

          <div className="border border-white/7 pr-5 text-white/30 bg-white/5 flex rounded-full items-center gap-3 w-full p-1 font-medium text-[17px]">
            <div className="flex -space-x-[22px]">
              {[1, 2, 3, 4].map((_, i) => (
                <Image
                  key={i}
                  className="rounded-full object-cover border-4 border-[#1A1A1A]"
                  src="/img.png"
                  alt="user"
                  width={46}
                  height={46}
                />
              ))}
            </div>
            +5
          </div>
        </div>

        {/* Buttons */}
        <div className="flex mt-3 gap-3">
          <button
            onClick={handleEnterWorkspace}
            className="px-5 py-[10px] w-full relative overflow-hidden mx-auto bg-[#6B48FF] rounded-full text-white font-medium text-[17px] hover:from-[#7a5cff] hover:to-[#5a3be6] transition flex items-center justify-center cursor-pointer gap-2"
          >
            Enter Workspace
            <span className="bg-white w-64 mx-auto -bottom-11 h-12 absolute blur-xl"></span>
          </button>

          <button className="px-5 py-[10px] relative overflow-hidden mx-auto bg-white/2 rounded-full text-white font-medium transition cursor-pointer flex items-center justify-center gap-2">
            <MoreHorizontal className="h-7 w-7" />
            <span className="bg-white/20 w-24 mx-auto -bottom-8 h-12 absolute blur-xl"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkSpaceCard;
