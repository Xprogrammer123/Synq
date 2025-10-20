import { Link as LinkIcon, MoreHorizontal } from "lucide-react";
import React from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  updatedAt: string;
  language?: string;
  visibility?: string;
}

const RepoCard = ({ repo }: { repo: Repo }) => {
  const timeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

    const intervals: Record<string, number> = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
    };

    for (const [unit, value] of Object.entries(intervals)) {
      const count = Math.floor(seconds / value);
      if (count >= 1) return `${count} ${unit}${count > 1 ? "s" : ""} ago`;
    }

    return `${seconds} sec${seconds !== 1 ? "s" : ""} ago`;
  };

  return (
    <div className="border relative justify-center items-center overflow-hidden p-7 border-white/10 rounded-3xl bg-white/5 hover:bg-white/10 transition-all duration-200">
      <div className="flex flex-col gap-5">
        {/* Date */}
        <div className="flex justify-start w-full items-center">
          <p className="text-white/40 text-sm">{timeAgo(repo.updatedAt)}</p>
        </div>

        {/* Repo Info */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            {repo.name}
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition"
            >
              <LinkIcon className="h-5 w-5" />
            </a>
          </h1>

          <p className="text-white/80 text-sm line-clamp-2">
            {repo.description || "No description provided."}
          </p>
        </div>

        {/* Actions */}
        <div className="flex mt-5 gap-3">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-[10px] w-full relative overflow-hidden mx-auto bg-[#6B48FF] rounded-full text-white font-medium text-[17px] hover:from-[#7a5cff] hover:to-[#5a3be6] transition flex items-center justify-center cursor-pointer gap-2"
          >
            Open Repo
            <span className="bg-white w-64 mx-auto -bottom-11 h-12 absolute blur-xl"></span>
          </a>

          <button className="px-5 py-[10px] relative overflow-hidden mx-auto bg-white/10 rounded-full text-white font-medium transition cursor-pointer flex items-center justify-center gap-2 hover:bg-white/20">
            <MoreHorizontal className="h-6 w-6" />
            <span className="bg-white/20 w-24 mx-auto -bottom-8 h-12 absolute blur-xl"></span>
          </button>
        </div>
      </div>

      {/* Glow effect */}
      <div className="bg-[#6B48FF]/30 w-96 -left-3 -z-10 h-20 -bottom-16 blur-3xl absolute"></div>
    </div>
  );
};

export default RepoCard;
