// components/ui/CommandDialog.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type Item = { id: string; title: string; subtitle?: string; href?: string; };

export default function CommandDialog({ items = [] as Item[] } : { items?: Item[] }) {
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

  const filtered = items.filter(it => it.title.toLowerCase().includes(q.toLowerCase()) || (it.subtitle || "").toLowerCase().includes(q.toLowerCase()));

  function go(item: Item | undefined) {
    if (!item) return;
    if (item.href) window.location.href = item.href;
    setOpen(false);
  }

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-60 flex items-start justify-center p-6 pt-28">
          <div className="w-full max-w-2xl panel border border-gray-800 rounded-2xl">
            <div className="p-4">
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") { e.preventDefault(); setActive(a => Math.min(a+1, filtered.length - 1)); }
                  if (e.key === "ArrowUp") { e.preventDefault(); setActive(a => Math.max(a-1, 0)); }
                  if (e.key === "Enter") go(filtered[active]);
                }}
                className="w-full search-pill px-12 py-3 text-sm placeholder:text-gray-400 focus:outline-none"
                placeholder="Search (docs, tasks, meetings...)"
              />
            </div>

            <div className="max-h-80 overflow-auto divide-y divide-gray-800">
              {filtered.length === 0 && <div className="p-4 text-sm text-gray-400">No results</div>}
              {filtered.map((it, idx) => (
                <div
                  key={it.id}
                  className={`p-3 cursor-pointer hover:bg-[#151515] ${idx === active ? "bg-[#151515]" : ""}`}
                  onMouseEnter={() => setActive(idx)}
                  onClick={() => go(it)}
                >
                  <div className="font-medium">{it.title}</div>
                  {it.subtitle && <div className="text-xs text-gray-400">{it.subtitle}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
