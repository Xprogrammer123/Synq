"use client";

import React, { useState } from "react";
import CodeSlider from "./components/CodeSlider";
import EmptyWorkspace from "./components/EmptyWorkspace";
import WorkspaceRepos from "./components/WorkspaceRepos";

const Page = () => {
  const [codeTab, setCodeTab] = useState("repos");
  const [repos, setRepos] = useState<any[]>([]);
  const [filterType, setFilterType] = useState("");

  return (
    <div className="overflow-y-auto flex gap-7 pb-24 scroll h-full">
      <div className="w-full h-full flex flex-col gap-6">
        {/* Tabs */}
        <div className="w-full flex flex-col>
          <CodeSlider setTab={setCodeTab} tab={codeTab} />
        </div>

        {/* Main Content */}
        <div className="w-full h-full">
          {repos.length === 0 ? (
            <EmptyWorkspace />
          ) : filterType === "recent" ? (
            <p className="text-white/60 text-sm mt-4">
              Showing recently updated repositories...
            </p>
          ) : (
            <WorkspaceRepos />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
