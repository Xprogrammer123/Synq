"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TabSlider from "../components/TabSlider";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tab, setTab] = useState("documents");
  const router = useRouter();

  const handleTabClick = (tabName: string) => {
    setTab(tabName);
    router.push(`/dashboard/workspace/id/${tabName}`); // 👈 dynamic navigation
  };

  return (
    <div className="flex gap-7 min-h-screen">
      {/* Main Content */}
      <div className="flex flex-col gap-6 w-full">
        <TabSlider setTab={handleTabClick} tab={tab} />
        <div className="w-full">{children}</div>
      </div>

      {/* Sidebar / Right Section */}
      <div className="w-[28%] h-screen"></div>
    </div>
  );
}
