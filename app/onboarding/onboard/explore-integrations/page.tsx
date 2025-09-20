"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function PickChallenges() {
  const router = useRouter();
 
 
  const handleContinue = () => {
   
      router.push("/onboarding/onboard/synq-integrations");
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-xl rounded-3xl bg-white shadow-2xl p-10 relative">
     
        <div className="flex justify-center mb-6">
          <Image src="/synqicon.png" alt="Synq Logo" width={50} height={50} />
        </div>

        <h1 className="text-3xl font-bold text-center text-black mb-2">
          Bring your tools into Synq
        </h1>
        <p className="text-gray-600 text-center mb-8">
         Connect Slack, Github, Jira and more.  <br /> so everything you need lives in one place
        </p>

     
        <button
          onClick={handleContinue}
          className="w-full py-4 rounded-xl bg-black text-white text-lg font-medium hover:bg-gray-900 shadow-md mb-6"
        >
         Explore Integrations
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
            <span className="w-3 h-3 rounded-full bg-gray-200"></span>
            <span className="w-3 h-3 rounded-full bg-black"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
