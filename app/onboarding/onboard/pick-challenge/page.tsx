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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-xl rounded-3xl bg-white shadow-2xl p-10 relative">
     
        <div className="flex justify-center mb-6">
          <Image src="/synqicon.png" alt="Synq Logo" width={50} height={50} />
        </div>

        <h1 className="text-3xl font-bold text-center text-black mb-2">
          What slows you down?
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Choose all the challenges you face. <br /> Synq will help fix them.
        </p>

     
        <div className="space-y-2 mb-8">
          {challenges.map((challenge) => (
            <label
              key={challenge}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl border cursor-pointer transition ${
                selected.includes(challenge)
                  ? "bg-black text-white border-black"
                  : "bg-gray-50 text-black border-gray-200 hover:border-black"
              }`}
            >
          
              <input
                type="checkbox"
                checked={selected.includes(challenge)}
                onChange={() => toggleChallenge(challenge)}
                className="appearance-none w-5 h-5 rounded-full border-2 border-gray-400 
                           checked:bg-black checked:border-white"
              />
              {challenge}
            </label>
          ))}
        </div>

     
        <button
          onClick={handleContinue}
          className="w-full py-4 rounded-xl bg-black text-white text-lg font-medium hover:bg-gray-900 shadow-md mb-6"
        >
          Personalize my Synq
        </button>

      
        <div className="flex items-center justify-between mb-5">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1 text-gray-600 hover:text-black"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

        </div>
        
        <div className="flex items-center justify-center">
         
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-200"></span>
            <span className="w-3 h-3 rounded-full bg-gray-200"></span>
            <span className="w-3 h-3 rounded-full bg-black"></span>
            <span className="w-3 h-3 rounded-full bg-gray-200"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
