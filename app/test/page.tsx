"use client"; // keep if using App Router, remove if using Pages Router

import apiFetch from "@/utils/api";
import { useState } from "react";

export default function GithubPage() {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL;
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // form states
  const [repoName, setRepoName] = useState("");
  const [owner, setOwner] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  const fetchRepos = async () => {
    try {
      const data = await apiFetch("/api/github/repos");
      setOutput(JSON.stringify(data, null, 2));
    } catch (err: any) {
      setOutput("❌ " + err.message);
    }
  };



  return (
    <div className="min-h-screen p-8 space-y-6">
      <h1 className="text-2xl font-bold">GitHub API Playground</h1>

      {/* OAuth */}
      <section>
        <h2 className="font-semibold mb-2">OAuth</h2>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => (window.location.href = `${API_BASE}/api/github/connect`)}
        >
          Connect to GitHub
        </button>
      </section>

      {/* Profile */}
      <section>
        <h2 className="font-semibold mb-2">Profile</h2>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="New bio"
            className="p-2 border rounded w-1/3"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <input
            type="text"
            placeholder="New location"
            className="p-2 border rounded w-1/3"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Get Profile
          </button>
          <button
            className="px-4 py-2 bg-yellow-600 text-white rounded"
          >
            Update Profile
          </button>
        </div>
      </section>

      {/* Repos */}
      <section>
        <h2 className="font-semibold mb-2">Repositories</h2>
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Repo name"
            className="p-2 border rounded w-1/3"
            value={repoName}
            onChange={(e) => setRepoName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Owner username"
            className="p-2 border rounded w-1/3"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            className="px-4 py-2 bg-green-600 text-white rounded"
            onClick={fetchRepos}
          >
            List Repos
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            
          >
            Create Repo
          </button>
          <button
            className="px-4 py-2 bg-yellow-600 text-white rounded"
            
          >
            Update Repo
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Delete Repo
          </button>
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded"
          >
            Get Branches
          </button>
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            Get Topics
          </button>
        </div>
      </section>

      {/* Output */}
      <section>
        <h2 className="font-semibold mb-2">Output</h2>
        {loading && <p className="text-blue-600">Loading...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}
        {output && (
          <pre className="mt-6 p-4 text-white bg-gray-900 rounded text-sm overflow-auto max-h-[500px]">
          {output}
        </pre>
        )}
      </section>
    </div>
  );
}
