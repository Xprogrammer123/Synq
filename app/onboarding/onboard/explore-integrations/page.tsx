"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function PickChallenges() {
  const router = useRouter();
 
 
  const handleContinue = () => {
   
      router.push("/onboarding/onboard/synq-integrations");
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="w-full max-w-xl rounded-3xl bg-[#151515] shadow-2xl p-10 relative">
     
        <div className="flex justify-center mb-6">
          <Image src="/Synqicon.png" alt="Synq Logo" width={50} height={50} />
        </div>

        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Bring your tools into Synq
        </h1>
        <p className="text-gray-400 text-center mb-8">
         Connect Slack, Github, Jira and more.  <br /> so everything you need lives in one place
        </p>

     
        <button
          onClick={handleContinue}
          className="w-full py-4 rounded-xl bg-[#6B48FF] text-white text-lg font-medium hover:bg-violet-800 shadow-md mb-6"
        >
         Explore Integrations
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
        
        <div className="flex items-center justify-center">
         
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-600"></span>
            <span className="w-3 h-3 rounded-full bg-gray-600"></span>
            <span className="w-3 h-3 rounded-full bg-gray-600"></span>
            <span className="w-3 h-3 rounded-full bg-[#6B48FF]"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
