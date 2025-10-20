import React from 'react'

const CodeSlider = ({ tab, setTab }: { tab: string; setTab: (s: string) => void }) => {
  return (
    <div className='p-1 text-white/40 bg-white/5 flex w-full rounded-full'>
        <button
        onClick={() => setTab("repos")}
        className={`py-3 px-4 rounded-full transition-all duration-300 w-full font-medium text-[15px] ${tab === "repos" && "text-white bg-base"}`}>
            Repos
        </button>
        <button
        onClick={() => setTab("issues")}
        className={`py-3 px-4 rounded-full transition-all duration-300 w-full font-medium text-[15px] ${tab === "issues" && "text-white bg-base"}`}>
            Issues
        </button>
        <button
        onClick={() => setTab("topics")}
        className={`py-3 px-4 rounded-full transition-all duration-300 w-full font-medium text-[15px] ${tab === "topics" && "text-white bg-base"}`}>
            Topics
        </button>
        <button
        onClick={() => setTab("pull")}
        className={`py-3 px-4 rounded-full transition-all duration-300 w-full font-medium text-[15px] ${tab === "pull" && "text-white bg-base"}`}>
            Pull Requests
        </button>
        <button
        onClick={() => setTab("commits")}
        className={`py-3 px-4 rounded-full transition-all duration-300 w-full font-medium text-[15px] ${tab === "commits" && "text-white bg-base"}`}>
            Commits
        </button>
        <button
        onClick={() => setTab("profile")}
        className={`py-3 px-4 rounded-full transition-all duration-300 w-full font-medium text-[15px] ${tab === "profile" && "text-white bg-base"}`}>
            Profile
        </button>
    </div>
  )
}

export default CodeSlider