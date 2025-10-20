"use client";
import React, { useEffect, useState } from "react";
import RepoCard from "./RepoCard";
import apiFetch from "@/utils/api";
import CodeUtilityBar from "./CodeUtilityBar";

const WorkspaceRepos = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await apiFetch("/api/github/repos");
        console.log("Fetched data:", res);

        if (res.repositories) {
          setRepos(res.repositories);
          setFilteredRepos(res.repositories);
        } else {
          setRepos([]);
          setFilteredRepos([]);
        }
      } catch (err: any) {
        console.error("Error fetching repos:", err);
        setError("Failed to fetch repositories.");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Handle Search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = repos.filter((repo) =>
      repo.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRepos(filtered);
  };

  // Placeholder for future filters (e.g., language)
  const handleFilter = (filterType: string) => {
    if (filterType === "recent") {
      const sorted = [...repos].sort(
        (a, b) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );
      setFilteredRepos(sorted);
    } else {
      setFilteredRepos(repos);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col gap-5 items-center justify-center h-64 text-gray-400">
        <div className="loader"></div>
        Loading repositories...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64 text-red-400">
        {error}
      </div>
    );
  }

  return (
    <div className="flex mt-5 flex-col w-full gap-5">
      <CodeUtilityBar
        repoCount={filteredRepos.length}
        onSearch={handleSearch}
        onFilter={handleFilter}
        searchValue={searchQuery}
      />

      <div className="grid grid-cols-3 gap-5 mt-8">
        {/* Empty State */}
        <div className="border items-center justify-center flex flex-col gap-5 p-10 border-white/20 rounded-2xl border-dashed">
          <h1 className="text-[1.5rem] text-center font-semibold">
            Create a new repo to get started with code
          </h1>
          <button className="px-7 py-3 relative overflow-hidden mx-auto bg-[#6B48FF] rounded-full text-white font-medium text-[17px] hover:from-[#7a5cff] hover:to-[#5a3be6] transition flex items-center justify-center cursor-pointer gap-2">
            Create New Repo
            <span className="bg-white w-64 mx-auto -bottom-11 h-12 absolute blur-xl"></span>
          </button>
        </div>
        {/* Repo List */}
        {filteredRepos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default WorkspaceRepos;
