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
    { id: "marketer", label: "Marketer", img: "/roles/marketer.png" },
    { id: "analyst", label: "Analyst", img: "/roles/analyst.png" },
    { id: "founder", label: "Founder", img: "/roles/founder.png" },
  ];

  const handleContinue = () => {
    if (selected) {
      router.push("/onboarding/onboard/pick-challenge");
    } else {
      alert("Please select a role to continue.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl p-10 relative">
     
        <div className="flex justify-center mb-6">
          <Image src="/synqicon.png" alt="Synq Logo" width={50} height={50} />
        </div>

      
        <h1 className="text-3xl font-bold text-center text-black mb-2">
          Tell us what you do best
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Pick the role that matches you. <br /> We’ll personalize Synq to fit.
        </p>


        <div className="grid grid-cols-3 gap-4 mb-8">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelected(role.id)}
              className={`flex flex-col items-center justify-center rounded-2xl p-6 border transition ${
                selected === role.id
                  ? "bg-black text-white border-black"
                  : "bg-gray-50 border-gray-200 text-black hover:border-black"
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
          className="w-full py-3 rounded-xl bg-black text-white text-lg font-medium hover:bg-gray-900 shadow-md mb-6"
        >
          Continue
        </button>

        {/* Back button + progress dots */}
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
            <span className="w-3 h-3 rounded-full bg-black"></span>
            <span className="w-3 h-3 rounded-full bg-gray-200"></span>
            <span className="w-3 h-3 rounded-full bg-gray-200"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
