"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Loader2 } from "lucide-react";
import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

const integrationSentences: Record<string, string> = {
  github: "Syncing repos from GitHub",
  gitlab: "Syncing projects from GitLab",
  jira: "Fetching issues from Jira",
  slack: "Fetching messages from Slack",
  trello: "Loading boards from Trello",
  asana: "Importing tasks from Asana",
  figma: "Importing designs from Figma",
  notion: "Importing pages & content from Notion",
  clickup: "Syncing spaces from ClickUp",
  drive: "Connecting Google Drive files",
  dropbox: "Syncing Dropbox folders",
  teams: "Fetching conversations from Teams",
  airtable: "Importing bases from Airtable",
};

function BoundariesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentIntegration, setCurrentIntegration] = useState<string>("");

  useEffect(() => {
    const integrations = searchParams.get("integrations");
    if (integrations) {
      try {
        setSelected(JSON.parse(integrations));
      } catch {
        setSelected([]);
      }
    }
  }, [searchParams]);

  const boundaries = [
    { id: "read", label: "Read-only access" },
    { id: "post", label: "Post updates to channels" },
    { id: "sync", label: "Sync files & comments" },
    { id: "notify", label: "Manage notifications" },
  ];

  const [chosenBoundaries, setChosenBoundaries] = useState<string[]>([]);

  const toggleBoundary = (id: string) => {
    setChosenBoundaries((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (chosenBoundaries.length === 0) {
      alert("Please select at least one option.");
      return;
    }
    setLoading(true);
  };

  useEffect(() => {
    if (loading && selected.length > 0) {
      let index = 0;
      setCurrentIntegration(
        integrationSentences[selected[index]] || selected[index]
      );

      const interval = setInterval(() => {
        index++;
        if (index < selected.length) {
          setCurrentIntegration(
            integrationSentences[selected[index]] || selected[index]
          );
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            router.push("/onboarding/onboard/onboard-success");
          }, 800);
        }
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [loading, selected, router]);

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-black p-6 ${dmSans.className} relative`}
    >
      <div className="w-full max-w-xl rounded-3xl bg-[#151515] shadow-2xl p-10 relative z-10">
        <div className="flex justify-center mb-6">
          <Image src="/Synqicon.png" alt="Synq Logo" width={50} height={50} />
        </div>

        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Set your boundaries
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Choose what Synq can see and share. You&apos;re in full control.
        </p>

        <div className="space-y-4 mb-8">
          {boundaries.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3 cursor-pointer text-lg"
            >
              <input
                type="checkbox"
                checked={chosenBoundaries.includes(item.id)}
                onChange={() => toggleBoundary(item.id)}
                className="appearance-none w-5 h-5 border border-black rounded-full checked:bg-[#6B48FF] checked:border-gray-200 p-2"
              />
              <span className="text-white">{item.label}</span>
            </label>
          ))}
        </div>

        <button
          onClick={handleContinue}
          className="w-full py-3 rounded-xl bg-[#6B48FF] text-white text-lg font-medium hover:bg-violet-800 shadow-md mb-6"
        >
          Continue to Sync
        </button>

        <div className="flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1 text-white hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </div>

      {/* Loading Modal */}
      {loading && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#151515] rounded-2xl shadow-lg p-10 flex flex-col items-center gap-4 w-[90%] max-w-xl">
            <div className="flex flex-col items-center gap-4 mb-6">
              <Image src="/Synqicon.png" alt="Synq Logo" width={50} height={50} />
              <Loader2 className="w-10 h-10 animate-spin text-white" />
            </div>

            <h1 className="text-3xl font-bold text-center text-white mb-2">
              Getting everything in Synq
            </h1>
            <p className="text-gray-400 text-center mb-8">
              We&apos;re pulling your recent data so you can hit the ground
              running.
            </p>

            <p className="text-lg font-medium text-white">
              <span className="font-bold">{currentIntegration}</span>...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function BoundariesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BoundariesContent />
    </Suspense>
  );
}
