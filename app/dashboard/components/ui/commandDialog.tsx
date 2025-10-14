// components/ui/CommandDialog.tsx
"use client";

import { useEffect, useRef, useState } from "react";


export default function CommandDialog() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        setTimeout(() => inputRef.current?.focus(), 30);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => setActive(0), [q, open]);

  return (
    <>
      {open && (
        <div className="h-screen w-screen z-30 backdrop-blur-lg absolute transition-all flex flex-col items-center justify-center duration-500 bg-white/2">
          <div className="bg-[#0A0A0A] border rounded-t-[24px] rounded-2xl p-3 w-[30rem] border-white/7">
          <div className="bg-white/5 border-white/7 border rounded-full p-3 w-full flex items-center justify-between">
            <input type="text" className="outline-0 w-full placeholder:text-white/15" placeholder="Search (docs, tasks, meetings...)" />
          </div>
          </div>
        </div>
      )}
    </>
  );
}
