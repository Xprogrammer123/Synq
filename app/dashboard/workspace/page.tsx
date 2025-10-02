"use client"

import React from "react";
import { Monitor } from "lucide-react";
import { useState } from "react";
import WorkspaceModal from "../components/workspaceModal";


const WorkspacePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="">
      <div className="justify-center flex items-center mt-5 mb-5">
        <img src="/folderplus.png" alt="foldericon" width={200} height={200} className="justify-center flex items-center" />
      </div>
      <div >
        <h1 className="justify-center flex items-center font-bold text-3xl">You're not in a workspace yet.</h1>
        <h1 className="justify-center flex items-center font-bold text-3xl mb-3">Select or create one to get started.</h1>
        <p className="justify-center flex items-center text-sm text-zinc-600 mb-5">No active workspace, Ready to jump into one of the others ?</p>
        <button className="px-5 py-[10px] relative overflow-hidden mx-auto bg-[#6B48FF] rounded-full text-white font-medium hover:from-[#7a5cff] hover:to-[#5a3be6] transition flex items-center justify-center gap-2 mb-28" onClick={() => setIsModalOpen(true)}>
          <Monitor className="w-5 h-5" />
          Create Workspace
          <span className="bg-white w-24 mx-auto -bottom-12 h-12 absolute blur-xl"></span>
        </button>
      </div>
      <WorkspaceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="grid grid-cols-[auto_1fr] items-center gap-3 mb-10">
        <h2 className="text-3xl font-bold">My workspaces </h2>
        <hr className="w-full text-zinc-700" />
      </div>


      <div className="border border-dashed p-5 w-[400px] h-[400px] border-zinc-700 rounded-3xl flex flex-col justify-center border-spacing-4">
        <h2 className=" text-center text-3xl font-bold mb-4 mt-20">Set up a workspace to get things done!</h2>
          <button className="px-5 py-[10px] relative overflow-hidden mx-auto bg-[#6B48FF] rounded-full text-white font-medium hover:from-[#7a5cff] hover:to-[#5a3be6] transition flex items-center justify-center gap-2 mb-28" onClick={() => setIsModalOpen(true)}>
          <Monitor className="w-5 h-5" />
          Create Workspace
          <span className="bg-white w-24 mx-auto -bottom-12 h-12 absolute blur-xl"></span>
        </button>
      </div>
    </div>
  );
};

export default WorkspacePage;




