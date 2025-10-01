// components/layout/Sidebar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { LayoutGrid, LayoutList, Layers, Zap, Folder, FileText, BarChart2, Settings, Menu, ChevronLeft, Archive, Monitor, Cpu,Unplug, ChartPie } from "lucide-react";
import { cn } from "@/lib/utils";

type Nav = { href: string; label: string; icon: React.ReactNode; };

const NAV: Nav[] = [
  { href: "/", label: "Home", icon: <LayoutGrid className="w-5 h-5" /> },
  { href: "/dashboard/projects", label: "Projects", icon: <Archive  className="w-5 h-5" /> },
  { href: "/dashboard/workspace", label: "Workspace", icon: <Monitor className="w-5 h-5" /> },
  { href: "/dashboard/workflows", label: "Workflows / Automations", icon: <Cpu className="w-5 h-5" /> },
  { href: "/dashboard/apps", label: "Apps", icon: <Unplug className="w-5 h-5" /> },
  { href: "/dashboard/documents", label: "Documents", icon: <Folder className="w-5 h-5" /> },
  { href: "/dashboard/analytics", label: "Analytics", icon: <ChartPie className="w-5 h-5" /> },
  { href: "/dashboard/settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("/");

  return (
    <aside className={cn("h-screen flex flex-col text-gray-200 border-r pr-2 border-white/5 py-4", collapsed ? "w-18" : "w-auto")}>

      <nav className="flex-1 overflow-y-auto space-y-1">
         <div className="mb-4">
        <button
          onClick={() => setCollapsed(v=>!v)}
          className={cn("flex items-center gap-3 px-3 py-2 border border-white/5 rounded-xl hover:bg-[#151515] ml-2 text-sm w-56", collapsed ? "justify-center" : "")}
        >
          {!collapsed && <span className="text-2xl text-white mr-2">«</span>}
          <span className="text-sm">{collapsed ? " " : "Collapse"}</span>
        </button>
      </div>

        {NAV.map((n) => {
          const isActive = active === n.href;
          return (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setActive(n.href)}
              className={cn("flex items-center gap-3 px-3 py-3 rounded-lg border border-white/0 hover:bg-[#151515] hover:text-[#6B48FF] ml-2 text-sm", isActive ? "text-[#6B48FF] bg-[#151515] border-white/5" : "text-zinc-600" , collapsed ? "justify-center" : "")}
            >
              <div className={cn("w-6 h-6 flex items-center justify-center")}>
                {n.icon}
              </div>

              {!collapsed && (
                <div className={cn("flex items-center justify-between w-full", isActive ? "sidebar-active" : "")}>
                  <div className=" font-sm">{n.label}</div>
                </div>
              )}
            </Link>
          );
        })}
      </nav>

    </aside>
  );
}
