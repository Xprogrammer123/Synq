"use client";

import { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Lock, Check } from "lucide-react";
import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

type Tool = {
  id: string;
  label: string;
  img: string;
};

type Category = {
  title: string;
  items: Tool[];
};

function IntegrationsContent() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const categories: Category[] = [
    {
      title: "Dev Focused",
      items: [
        { id: "github", label: "GitHub", img: "/icons/github.png" },
        { id: "gitlab", label: "GitLab", img: "/icons/gitlab.png" },
        { id: "slack", label: "Slack", img: "/icons/slack.png" },
        { id: "jira", label: "Jira", img: "/icons/jira.png" },
      ],
    },
    {
      title: "Task & Project Management",
      items: [
        { id: "trello", label: "Trello", img: "/icons/trello.png" },
        { id: "asana", label: "Asana", img: "/icons/asana.png" },
        { id: "clickup", label: "ClickUp", img: "/icons/clickup.png" },
      ],
    },
    {
      title: "Design Focused",
      items: [
        { id: "figma", label: "Figma", img: "/icons/figma.png" },
        { id: "notion", label: "Notion", img: "/icons/notion.png" },
      ],
    },
    {
      title: "Storage & Docs",
      items: [
        { id: "drive", label: "Drive", img: "/icons/drive.png" },
        { id: "dropbox", label: "Dropbox", img: "/icons/dropbox.png" },
      ],
    },
    {
      title: "Optional Extras (Pro UX)",
      items: [
        { id: "teams", label: "Teams", img: "/icons/teams.png" },
        { id: "airtable", label: "Airtable", img: "/icons/airtable.png" },
      ],
    },
  ];

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (selected.length > 0) {
      router.push(
        `/onboarding/onboard/set-boundaries?integrations=${encodeURIComponent(
          JSON.stringify(selected)
        )}`
      );
    } else {
      alert("Please select at least one integration to continue.");
    }
  };

  // 🔹 Properly typed IntegrationCard
  const IntegrationCard = ({ tool }: { tool: Tool }) => {
    const isActive = selected.includes(tool.id);
    return (
      <button
        onClick={() => toggleSelect(tool.id)}
        className={`flex items-center justify-between rounded-xl border px-4 py-4 transition w-full ${
          isActive
            ? "bg-[#6B48FF] text-white border-violet-400"
            : "bg-violet-900/10 border-violet-900 text-gray-200 hover:border-violet-400"
        }`}
      >
        <div className="flex items-center gap-2">
          <Image src={tool.img} alt={tool.label} width={20} height={20} />
          <span className="text-md font-medium">{tool.label}</span>
        </div>
        {isActive ? (
          <Check className="w-5 h-5 text-white" />
        ) : (
          <Lock className="w-4 h-4 text-violet-800" />
        )}
      </button>
    );
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-black p-6 ${dmSans.className}`}
    >
      <div className="w-full max-w-4xl rounded-3xl bg-[#151515] shadow-2xl p-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src="/Synqicon.png" alt="Synq Logo" width={50} height={50} />
        </div>

        <h1 className="text-3xl font-bold text-center text-white mb-10">
          Plug Synq into the tools you already use
        </h1>

        <div className="space-y-10 mb-10">
          {/* Dev Focused */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-2xl text-white font-semibold">Dev Focused</h2>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {categories[0].items.map((tool) => (
                <IntegrationCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>

          {/* Task & Design */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl text-white font-semibold">
                  Task & Project Management
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <IntegrationCard tool={categories[1].items[0]} />
                <IntegrationCard tool={categories[1].items[1]} />
                <div className="col-span-2 w-1/2">
                  <IntegrationCard tool={categories[1].items[2]} />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl text-white font-semibold">
                  Design Focused
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {categories[2].items.map((tool) => (
                  <IntegrationCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>
          </div>

          {/* Storage & Extras */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl text-white font-semibold">
                  Storage & Docs
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {categories[3].items.map((tool) => (
                  <IntegrationCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl text-white font-semibold">
                  Optional Extras (Pro UX)
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {categories[4].items.map((tool) => (
                  <IntegrationCard key={tool.id} tool={tool} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Continue button */}
        <button
          onClick={handleContinue}
          className="w-full py-3 rounded-xl bg-[#6B48FF] text-white text-lg font-medium hover:bg-[#6B48FF] shadow-md mb-6"
        >
          Continue
        </button>

        {/* Back */}
        <div className="flex items-center">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1 text-white hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Integrations() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <IntegrationsContent />
    </Suspense>
  );
}
