"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function PickChallenges() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const challenges = [
    "Too many tools, too many tabs",
    "Hard to track updates across teams",
    "I miss important notifications",
    "I spend too long searching for files",
  ];

  const toggleChallenge = (challenge: string) => {
    if (selected.includes(challenge)) {
      setSelected(selected.filter((c) => c !== challenge));
    } else {
      setSelected([...selected, challenge]);
    }
  };

  const handleContinue = () => {
    if (selected.length > 0) if (selected) {
      router.push("/onboarding/onboard/explore-integrations");
    } else {
      alert("Please select at least one challenge.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="w-full max-w-xl rounded-3xl bg-[#151515] shadow-2xl p-10 relative">
     
        <div className="flex justify-center mb-6">
          <Image src="/Synqicon.png" alt="Synq Logo" width={50} height={50} />
        </div>

        <h1 className="text-3xl font-bold text-center text-white mb-2">
          What slows you down?
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Choose all the challenges you face. <br /> Synq will help fix them.
        </p>

     
        <div className="space-y-2 mb-8">
          {challenges.map((challenge) => (
            <label
              key={challenge}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl cursor-pointer transition ${
                selected.includes(challenge)
                  ? "bg-[#6B48FF] text-white border-violet-400"
                  : "bg-violet-900/10 text-white hover:border-violet-400"
              }`}
            >
            
              <input
                type="checkbox"
                checked={selected.includes(challenge)}
                onChange={() => toggleChallenge(challenge)}
                className="appearance-none w-5 h-5 rounded-full border-2 border-violet-700 
                           checked:bg-[#FFF] checked:border-white"
              />
              {challenge}
            </label>
          ))}
        </div>

     
        <button
          onClick={handleContinue}
          className="w-full py-4 rounded-xl bg-[#6B48FF] text-white text-lg font-medium hover:bg-violet-800 shadow-md mb-6"
        >
          Personalize my Synq
        </button>

      
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1 text-gray-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

        </div>
        
        <div className="flex items-center justify-center">
         
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-600"></span>
            <span className="w-3 h-3 rounded-full bg-gray-600"></span>
            <span className="w-3 h-3 rounded-full bg-[#6B48FF]"></span>
            <span className="w-3 h-3 rounded-full bg-gray-600"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
