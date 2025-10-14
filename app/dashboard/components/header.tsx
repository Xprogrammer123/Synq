// components/layout/Header.tsx
"use client";

import Image from "next/image";
import { Bell, ChevronDown, Search as SearchIcon } from "lucide-react";
import Dropdown from "../components/ui/dropdown";
import CommandDialog from "../components/ui/commandDialog";
import { useState } from "react";

const COMMAND_ITEMS = [
  { id: "1", title: "Open Projects", subtitle: "All projects", href: "/projects" },
  { id: "2", title: "New Document", subtitle: "Create a new doc", href: "/documents/new" },
  { id: "3", title: "Workflows", subtitle: "Open automations", href: "/workflows" },
];

export default function Header() {
  const [notifications] = useState(7);

  return (
    <>
      <div className="header-wrapper p-5 border-b border-white/5">
        <header className="flex items-center gap-6 ">
          <div className="flex items-center gap-10 ">
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <Image src="/Synqicon.png" alt="" width={30} height={20} />
              </div>
            </div>

            <Dropdown
              trigger={
                <button className="flex items-center gap-2 rounded-full px-6 py-3 bg-[#151515] text-sm text-white hover:bg-[#1E1E1E] transition">
                  Developer
                  <ChevronDown className="w-4 h-4" />
                </button>
              }
            >
              <div className="text-sm text-gray-200 bg-[#151515] border border-white/5 rounded-xl shadow-lg overflow-hidden">
                <div className="px-4 py-2 hover:bg-[#1E1E1E] cursor-pointer">Switch Workspace</div>
                <div className="px-4 py-2 hover:bg-[#1E1E1E] cursor-pointer">Invite Members</div>
                <div className="px-4 py-2 hover:bg-[#1E1E1E] cursor-pointer">Workspace Settings</div>
              </div>
            </Dropdown>

          </div>

          {/* center: big search */}
          <div className="flex-1 items-center">
            <div className="mx-auto bg-white/5 border border-white/5 p-4 px-3 rounded-full flex items-center max-w-2xl">
             <div className="flex w-full items-center">
             <SearchIcon className="text-white" size={20} />
              <input
                className=" w-full  rounded-full px-3 text-sm placeholder:text-zinc-700 focus:outline-none"
                placeholder="Search (docs, tasks, meetings...)"
                onKeyDown={(e) => { }}
              />
             </div>
              <div className="text-xs w-16 flex items-center justify-center text-center text-gray-400">Ctrl • K</div>
            </div>
          </div>

          {/* right: icons */}
          <div className="flex items-center gap-4">
            <Dropdown
              trigger={
                <div className="relative">
                  <button className="p-2">
                    <Bell />
                  </button>
                  {notifications > 0 && (
                    <div className="absolute -top-1 -right-1 py-1 px-2 rounded-full bg-[#6B48FF] flex items-center justify-center text-xs text-white border-2 border-[#0b0b0c]">
                      {notifications}
                    </div>
                  )}
                </div>
              }
              align="right"
            >
              <div className="text-sm text-gray-200 bg-[#151515] rounded-xl max-w-64">
                <div className="px-3 py-2 font-medium">Notifications</div>
                <div className="divide-y divide-gray-800">
                  <div className="px-3 py-2 hover:bg-[#151515] rounded">New message in #design-ux</div>
                  <div className="px-3 py-2 hover:bg-[#151515] rounded">Automation failed — Check logs</div>
                  <div className="px-3 py-2 hover:bg-[#151515] rounded">Build succeeded</div>
                </div>
              </div>
            </Dropdown>

            <Dropdown
              trigger={
                <div className="flex items-center gap-3 p-3 rounded-full bg-[#151515] hover:bg-[#151515]">
                  <Image src="/Synqicon.png" alt="" width={24} height={24} />
                  <div className="hidden sm:block text-sm">Judah Oyedele</div>
                  <ChevronDown />
                </div>
              }
              align="right"
            >
              <div className="text-sm text-gray-200 bg-[#151515] rouned-xl">
                <div className="px-3 py-2 hover:bg-[#151515] rounded">Profile</div>
                <div className="px-3 py-2 hover:bg-[#151515] rounded">Settings</div>
                <div className="px-3 py-2 hover:bg-[#151515] rounded">Sign out</div>

              </div>
            </Dropdown>
          </div>
        </header>
      </div>
    </>
  );
}
