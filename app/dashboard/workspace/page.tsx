"use client"

import React from "react";
import { Monitor, User } from "lucide-react";
import { useState } from "react";
import WorkspaceModal from "../components/workspaceModal";


const WorkspacePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="">

      <WorkspaceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="grid grid-cols-[auto_1fr] items-center gap-3 mb-10">
        <h2 className="text-3xl font-bold">My workspaces </h2>
        <hr className="w-full text-zinc-700" />
      </div>

      <div className="grid grid-cols-3 gap-3">

        <div className="border border-dashed p-5 w-[450px] h-[450px] border-zinc-700 rounded-3xl flex flex-col justify-center border-spacing-4">
          <div className="justify-center flex items-center mb-5">
            <img src="/folderplus.png" alt="foldericon" width={120} height={120} className="justify-center flex items-center" />
          </div>
          <h2 className=" text-center text-3xl font-bold mb-4">Set up a workspace to get things done!</h2>
          <button className="px-5 py-[10px] relative overflow-hidden mx-auto bg-[#6B48FF] rounded-full text-white font-medium hover:from-[#7a5cff] hover:to-[#5a3be6]      transition flex items-center justify-center gap-2 " onClick={() => setIsModalOpen(true)}>
            <Monitor className="w-5 h-5" />
            Create Workspace
            <span className="bg-white w-24 mx-auto -bottom-12 h-12 absolute blur-xl"></span>
          </button>
        </div>

        <div className="border p-7 w-[450px] h-[450px] border-zinc-900 rounded-3xl bg-[#151515] inline-block">


          <p className="text-zinc-500">Created by Aurora </p>
           <p className="flex justify-end -mt-5 text-white gap-2 font-semibold mb-8"><User className="w-5 h-5" /> Member</p>
          <h2 className="text-4xl font-bold mb-3">Phantom HQ</h2>

          <p className="text-zinc-700 font-lg mb-5">Updated Yesterday </p>
          <div className="border border-zinc-900 bg-zinc-700 rounded-full w-full px-4 py-4 font-semibold text-lg">
            <User className="inline-block text-xl" /> New doc uploaded: Project Brief.pdf
          </div>

            <button className="px-5 py-[10px] relative overflow-hidden mx-auto bg-[#6B48FF] rounded-full text-white font-medium hover:from-[#7a5cff] hover:to-[#5a3be6]      transition flex items-center justify-center gap-2 " onClick={() => setIsModalOpen(true)}>
           
            Enter Workspace
            <span className="bg-white w-24 mx-auto -bottom-12 h-12 absolute blur-xl"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkspacePage;




