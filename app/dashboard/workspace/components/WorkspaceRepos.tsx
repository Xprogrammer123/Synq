"use client";
import React, { useEffect, useState } from "react";
import RepoCard from "./RepoCard";
import apiFetch from "@/utils/api";


const WorkspaceRepos = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await apiFetch("/api/github/repos");
        console.log("Fetched data:", res);

        if (res.repositories) {
          setRepos(res.repositories);
        } else {
          setRepos([]);
        }
      } catch (err: any) {
        console.error("Error fetching repos:", err);
        setError("Failed to fetch repositories.");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();

}, []); // runs once on mount



  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-400">
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
    <div className="grid grid-cols-3 gap-5 mt-8">
      {/* Empty State */}
      {repos.length === 0 && (
        <div className="border items-center justify-center flex flex-col gap-5 p-10 border-white/20 rounded-2xl border-dashed">
          <h1 className="text-[1.5rem] text-center font-semibold">
            Create a new repo to get started with code
          </h1>
          <button className="px-7 py-3 relative overflow-hidden mx-auto bg-[#6B48FF] rounded-full text-white font-medium text-[17px] hover:from-[#7a5cff] hover:to-[#5a3be6] transition flex items-center justify-center cursor-pointer gap-2">
            Create New Repo
            <span className="bg-white w-64 mx-auto -bottom-11 h-12 absolute blur-xl"></span>
          </button>
        </div>
      )}

      {/* Repo List */}
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default WorkspaceRepos;
