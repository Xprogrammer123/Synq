"use client"

import React from "react";
import { Monitor, User } from "lucide-react";
import { useState } from "react";
import WorkspaceModal from "../components/workspaceModal";
import WorkSpaceCard from "./components/WorkSpaceCard";


const WorkspacePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="overflow-y-auto pb-24 scroll h-full">

      <WorkspaceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="grid grid-cols-[auto_1fr] items-center gap-3 mt-3 mb-10">
        <h1 className="text-3xl font-bold">My workspaces </h1>
        <hr className="w-full text-zinc-700" />
      </div>

      <div className="grid grid-cols-3 gap-5">

        <div className="border box border-dashed p-5 border-white/20 rounded-3xl flex flex-col justify-center border-spacing-4">
          <div className="justify-center flex items-center mb-5">
            <img src="/folderplus.png" alt="foldericon" width={120} height={120} className="justify-center flex items-center" />
          </div>
          <h1 className="text-center text-[27px] max-w-[16rem] mx-auto font-bold mb-4">Set up a workspace to get things done!</h1>
          <button className="px-7 py-[14px] cursor-pointer relative overflow-hidden mx-auto bg-[#6B48FF] rounded-full text-white font-medium hover:from-[#7a5cff] hover:to-[#5a3be6]      transition flex items-center justify-center gap-2 " onClick={() => setIsModalOpen(true)}>
            <Monitor className="w-5 h-5" />
            Create Workspace
            <span className="bg-white w-48 mx-auto -bottom-10 h-12 absolute blur-xl"></span>
          </button>
        </div>
          <WorkSpaceCard />
          <WorkSpaceCard />
          <WorkSpaceCard />
          <WorkSpaceCard />
          <WorkSpaceCard />
          <WorkSpaceCard />
      </div>
    </div>
  );
};

export default WorkspacePage;




