// components/ui/Dropdown.tsx
"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface Props {
  trigger: ReactNode;
  children: ReactNode;
  align?: "left" | "right";
  width?: string;
}

export default function Dropdown({ trigger, children, align = "left", width = "w-56" }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <div ref={ref} className="relative">
      <div
        onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
        className="inline-flex items-center"
        role="button"
        aria-expanded={open}
      >
        {trigger}
      </div>

      {open && (
        <div
          role="menu"
          className={`absolute top-full mt-2 ${align === "right" ? "right-0" : "left-0"} ${width} z-50`}
        >
          <div className="panel p-2">{children}</div>
        </div>
      )}
    </div>
  );
}
