import { ChevronDown, ChevronLeft, Filter, Search } from "lucide-react";
import React, { useState } from "react";

interface UtilityBarProps {
  repoCount: number;
  onSearch: (query: string) => void;
  onFilter: (filterType: string) => void;
  searchValue: string;
}

const UtilityBar = ({
  repoCount,
  onSearch,
  onFilter,
  searchValue,
}: UtilityBarProps) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="flex gap-2 items-center flex-wrap">
      <div className="flex gap-3 mr-4 items-center">
        <p className="text-white/40 text-sm">Phantom HQ</p>
        <ChevronLeft className="h-5 w-5 text-white/40" />
        <p className="text-white text-sm">Select a repo to work with</p>
      </div>

      {/* Search */}
      <div className="rounded-full items-center flex gap-2 bg-white/5 border border-white/7 py-[10px] px-4">
        <Search className="w-[18px] h-[18px]" />
        <input
          type="text"
          placeholder="Search repos by name"
          className="outline-0 placeholder:text-white/20 text-white bg-transparent"
          value={searchValue}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div
        className="rounded-full items-center flex gap-2 bg-white/5 border border-white/7 py-[10px] px-4 text-white cursor-pointer relative"
        onClick={() => setShowFilters(!showFilters)}
      >
        <Filter className="h-[18px] w-[18px]" />
        Filters
        {showFilters && (
          <div className="absolute top-full mt-2 left-0 bg-[#1a1a1a] border border-white/10 rounded-lg p-2 w-40 shadow-lg">
            <button
              onClick={() => onFilter("recent")}
              className="w-full text-left px-3 py-2 hover:bg-white/10 rounded-md text-sm"
            >
              Recently Updated
            </button>
            <button
              onClick={() => onFilter("reset")}
              className="w-full text-left px-3 py-2 hover:bg-white/10 rounded-md text-sm"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Repo Count */}
      <div className="rounded-full items-center flex gap-2 bg-white/5 border border-white/7 py-[10px] px-4 text-white/40">
        <span className="text-white">{repoCount}</span> repos found
      </div>

      {/* Org Selector */}
      <div className="rounded-full items-center flex gap-2 bg-white/5 border border-white/7 py-[10px] px-4 text-white cursor-pointer">
        Phantom HQ
        <ChevronDown className="h-[18px] w-[18px]" />
      </div>
    </div>
  );
};

export default UtilityBar;
