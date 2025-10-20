"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TabSlider from "./components/TabSlider";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tab, setTab] = useState("documents");
  const router = useRouter();

  const handleTabClick = (tabName: string) => {
    setTab(tabName);
    router.push(`/dashboard/workspace/id/${tabName}`);
  };

  return (
    <div className="flex flex-col gap-6 p-6 min-h-screen bg-[#0f0f0f]">
      <TabSlider setTab={handleTabClick} tab={tab} />

      <div className="flex-1 w-full">{children}</div>
    </div>
  );
}
