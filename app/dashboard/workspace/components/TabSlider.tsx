import React from "react";

const TabSlider = ({
  tab,
  setTab,
}: {
  tab: string;
  setTab: (s: string) => void;
}) => {
  return (
    <div className="p-1 text-white/40 bg-white/5 flex w-full rounded-full">
      <button
        onClick={() => setTab("documents")}
        className={`py-3 px-4 rounded-full transition-all duration-300 w-full font-medium text-[15px] ${
          tab === "documents" && "text-white bg-base"
        }`}
      >
        Documents
      </button>

      <button
        onClick={() => setTab("code")}
        className={`py-3 px-4 rounded-full transition-all duration-300 w-full font-medium text-[15px] ${
          tab === "code" && "text-white bg-base"
        }`}
      >
        Code
      </button>

      <button
        onClick={() => setTab("chat")}
        className={`py-3 px-4 rounded-full transition-all duration-300 w-full font-medium text-[15px] ${
          tab === "chat" && "text-white bg-base"
        }`}
      >
        Chat
      </button>

      <button
        onClick={() => setTab("files")}
        className={`py-3 px-4 rounded-full transition-all duration-300 w-full font-medium text-[15px] ${
          tab === "files" && "text-white bg-base"
        }`}
      >
        Files
      </button>

      <button
        onClick={() => setTab("mail")}
        className={`py-3 px-4 rounded-full transition-all duration-300 w-full font-medium text-[15px] ${
          tab === "mail" && "text-white bg-base"
        }`}
      >
        Mail
      </button>
    </div>
  );
};

export default TabSlider;
