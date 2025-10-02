"use client"; // keep if using App Router, remove if using Pages Router

import { useState } from "react";

export default function GithubPage() {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL;
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // form states
  const [repoName, setRepoName] = useState("");
  const [owner, setOwner] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");

  async function callAPI(path, method = "GET", body = null) {
    try {
      setLoading(true);
      setError(null);
      setOutput(null);

      const res = await fetch(`${API_BASE}${path}`, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include", 
        body: body ? JSON.stringify(body) : null,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Request failed");

      setOutput(data);
    } catch (err) {
      console.error("API Error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

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
            onClick={() => callAPI("/profile")}
          >
            Get Profile
          </button>
          <button
            className="px-4 py-2 bg-yellow-600 text-white rounded"
            onClick={() => callAPI("/profile", "PATCH", { bio, location })}
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
            onClick={() => callAPI("/repos")}
          >
            List Repos
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() =>
              callAPI("/repos", "POST", { name: repoName || "new-repo", private: false })
            }
          >
            Create Repo
          </button>
          <button
            className="px-4 py-2 bg-yellow-600 text-white rounded"
            onClick={() =>
              callAPI(`/repos/${owner}/${repoName}`, "PATCH", {
                description: "Updated repo via UI",
                private: true,
              })
            }
          >
            Update Repo
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded"
            onClick={() => callAPI(`/repos/${owner}/${repoName}`, "DELETE")}
          >
            Delete Repo
          </button>
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded"
            onClick={() => callAPI(`/repos/${owner}/${repoName}/branches`)}
          >
            Get Branches
          </button>
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded"
            onClick={() => callAPI(`/repos/${owner}/${repoName}/topics`)}
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
          <pre className="bg-white p-4 rounded shadow overflow-x-auto">
            {JSON.stringify(output, null, 2)}
          </pre>
        )}
      </section>
    </div>
  );
}
