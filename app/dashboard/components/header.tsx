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
      <CommandDialog items={COMMAND_ITEMS} />
      <div className="header-wrapper p-5 border-b border-gray-800">
        <header className="flex items-center gap-6 ">
          <div className="flex items-center gap-10 min-w-[240px]">
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <Image src="/Synqicon.png" alt="" width={30} height={20}/>
              </div>
            </div>

            <Dropdown
              trigger={<button className="rounded-full px-8 py-4 bg-[#151515] text-sm">Developer <span className="ml-1">▾</span></button>}
            >
              <div className="text-sm text-gray-200 bg-[#151515] rounded-xl">
                <div className="px-3 py-2 hover:bg-[#151515] rounded">Switch Workspace</div>
                <div className="px-3 py-2 hover:bg-[#151515] rounded">Invite members</div>
                <div className="px-3 py-2 hover:bg-[#151515] rounded">Workspace settings</div>
              </div>
            </Dropdown>
          </div>

          {/* center: big search */}
          <div className="flex-1">
            <div className="relative mx-auto max-w-2xl">
              <SearchIcon className="absolute left-4 top-3 text-gray-400" />
              <input
                className=" bg-[#151515] w-full rounded-full px-14 py-4 search-pill text-sm placeholder:text-zinc-700 focus:outline-none"
                placeholder="Search (docs, tasks, meetings...)"
                onKeyDown={(e) => {}}
              />
              <div className="absolute right-4 top-3 text-xs text-gray-400 px-2 py-1 rounded">Ctrl • K</div>
            </div>
          </div>

          {/* right: icons */}
          <div className="flex items-center gap-4 min-w-[240px] justify-end">
            <Dropdown
              trigger={
                <div className="relative">
                  <button className="p-2 rounded-full bg-[#151515] hover:bg-gray-700">
                    <Bell />
                  </button>
                  {notifications > 0 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center text-xs text-white border-2 border-[#0b0b0c]">
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
                  <Image src="/Synqicon.png" alt="" width={30} height={20}/>
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
