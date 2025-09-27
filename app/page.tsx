"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen w-full bg-black">
      <Image
        src="/synq.png"
        alt="Synq Hero"
        width={600}
        height={600}
        className="object-contain mb-8"
      />

      <Link
        href="/onboarding/auth/welcome"
        className="flex items-center justify-center gap-2 bg-[#6B48FF] text-white rounded-xl py-4 px-8 text-center w-56 hover:bg-gray-800 transition"
      >
        <span>Get Started</span>
        <ArrowRight size={18} />
      </Link>
    </section>
  );
}
