import { ChevronLeft, ChevronDown } from "lucide-react";
import React from "react";

const DocumentUtilitiesBar = () => {
  return (
    <div className="flex justify-between items-center py-4 border-b border-white/10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-white/40 text-sm">
        <p>Phantom HQ</p>
        <ChevronLeft className="h-4 w-4" />
        <p className="text-white">Project A</p>
        <ChevronLeft className="h-4 w-4" />
        <p className="text-white/60">Page X</p>
      </div>

      {/* Org Selector */}
      <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-[6px] text-sm text-white/70 cursor-pointer hover:bg-white/10 transition">
        Phantom HQ
        <ChevronDown className="h-[14px] w-[14px]" />
      </div>
    </div>
  );
};

export default DocumentUtilitiesBar;
