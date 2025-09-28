"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function SelectRole() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  const roles = [
    { id: "designer", label: "Designer", img: "/roles/designer.png" },
    { id: "manager", label: "Manager", img: "/roles/manager.png" },
    { id: "developer", label: "Developer", img: "/roles/developer.png" },
    { id: "marketer", label: "Marketer", img: "/roles/developer.png" },
    { id: "analyst", label: "Analyst", img: "/roles/developer.png" },
    { id: "founder", label: "Founder", img: "/roles/developer.png" },
  ];

  const handleContinue = () => {
    if (selected) {
      router.push("/onboarding/onboard/pick-challenge");
    } else {
      alert("Please select a role to continue.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="w-full max-w-lg rounded-3xl bg-[#151515] shadow-2xl p-10 relative">
     
        <div className="flex justify-center mb-6">
          <Image src="/Synqicon.png" alt="Synq Logo" width={50} height={50} />
        </div>

      
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Tell us what you do best
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Pick the role that matches you. <br /> We&apos;ll personalize Synq to fit.
        </p>


        <div className="grid grid-cols-3 gap-4 mb-8">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelected(role.id)}
              className={`flex flex-col items-center justify-center rounded-2xl p-6 transition ${
                selected === role.id
                  ? "bg-[#6B48FF] text-white border-black"
                  : "bg-violet-900/10 text-white hover:border-violet-400"
              }`}
            >
              <Image
                src={role.img}
                alt={role.label}
                width={60}
                height={60}
                className="rounded-md object-contain"
              />
              <span className="mt-2 font-medium">{role.label}</span>
            </button>
          ))}
        </div>

        {/* Continue button */}
        <button
          onClick={handleContinue}
          className="w-full py-3 rounded-xl bg-[#6B48FF] text-white text-lg font-medium hover:bg-violet-800 shadow-md mb-6"
        >
          Continue
        </button>

        {/* Back button + progress dots */}
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
            <span className="w-3 h-3 rounded-full bg-[#6B48FF]"></span>
            <span className="w-3 h-3 rounded-full bg-gray-600"></span>
            <span className="w-3 h-3 rounded-full bg-gray-600"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
