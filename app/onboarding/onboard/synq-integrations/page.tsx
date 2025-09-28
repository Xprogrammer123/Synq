"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Lock, Unlock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

type GithubMessage = "github_connected";

export default function SyncIntegrations() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);
  const [authStatus, setAuthStatus] = useState<Record<string, boolean>>({});


  useEffect(() => {
    const saved = localStorage.getItem("integrations");
    if (saved) {
      const parsed = JSON.parse(saved);
      setAuthStatus(parsed.authStatus || {});
      if (parsed.selected?.length > 0) setSelected(parsed.selected[0]); // single select page
    }
  }, []);


  useEffect(() => {
    localStorage.setItem(
      "integrations",
      JSON.stringify({ selected: selected ? [selected] : [], authStatus })
    );
  }, [selected, authStatus]);

  const integrations = [
    { id: "slack", label: "Slack", desc: "Unify team convos.", img: "/icons/slack.png" },
    { id: "figma", label: "Figma", desc: "Designs and feedback in one view.", img: "/icons/figma.png" },
    { id: "notion", label: "Notion", desc: "Docs and notes at a glance.", img: "/icons/notion.png" },
    { id: "github", label: "Github", desc: "Stay on top of code updates.", img: "/icons/github.png" },
    { id: "jira", label: "Jira", desc: "Track issues without tab-hopping.", img: "/icons/jira.png" },
  ];

  const handleConnect = (id: string) => {
    setSelected(id);

    if (id === "github") {
      const popup = window.open(
        `${process.env.NEXT_PUBLIC_API_URL}/api/github/connect`,
        "githubAuth",
        "width=600,height=700"
      );

      const receiveMessage = (event: MessageEvent<GithubMessage>) => {
        if (event.data === "github_connected") {
          setAuthStatus((prev) => ({ ...prev, github: true }));
          popup?.close();
          window.removeEventListener("message", receiveMessage);
        }
      };

      window.addEventListener("message", receiveMessage);
    }
  };

  const handleContinue = () => {
    if (selected) {
      router.push(
        `/onboarding/onboard/set-boundaries?integrations=${encodeURIComponent(
          JSON.stringify([selected])
        )}`
      );
    } else {
      alert("Please select an integration to continue.");
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-black p-6 ${dmSans.className}`}>
      <div className="w-full max-w-3xl rounded-3xl bg-[#151515] shadow-2xl p-10 relative">
        <div className="flex justify-center mb-6">
          <Image src="/Synqicon.png" alt="Synq Logo" width={50} height={50} />
        </div>

        <h1 className="text-2xl font-bold text-center text-white mb-2">
          Choose what to sync first
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Pick from our growing list of integrations. Start with the tools you use every day.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {integrations.map((item) => (
            <button
              key={item.id}
              onClick={() => handleConnect(item.id)}
              className={`relative flex flex-col items-start rounded-2xl px-6 py-3 border transition text-left ${
                selected === item.id
                  ? "bg-[#6B48FF] text-gray-200 border-black"
                  : "bg-violet-800/10 border-violet-900 text-white hover:border-violet-400"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Image src={item.img} alt={item.label} width={30} height={30} />
                <span className="font-medium text-lg">{item.label}</span>
              </div>

              <p className="text-md mb-10">{item.desc}</p>

              <div className="absolute bottom-3 right-3 flex items-center gap-1 text-sm font-medium">
                {authStatus[item.id] ? (
                  <>
                    <Unlock className="w-4 h-4 text-green-600" /> Authorized
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-gray-500" /> Unauthorized
                  </>
                )}
              </div>
            </button>
          ))}

          <Link
            href="/onboarding/onboard/synq-integrations/integrations"
            className="flex flex-col justify-between bg-[#6B48FF] text-white rounded-2xl p-6 cursor-pointer"
          >
            <p className="flex items-center gap-2 font-medium text-lg">
              More <ArrowRight className="w-6 h-6" />
            </p>
            <span className="text-md">View all integrations</span>
          </Link>
        </div>

        <button
          onClick={handleContinue}
          className="w-full py-3 rounded-xl bg-[#6B48FF] text-white text-lg font-medium hover:bg-violet-800 shadow-md mb-6"
        >
          Continue
        </button>

        <div className="flex items-center justify-between mb-5">
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
