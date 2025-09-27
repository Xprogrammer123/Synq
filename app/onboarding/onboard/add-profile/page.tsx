"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, PencilLine} from "lucide-react";
import Image from "next/image";

export default function AddProfile() {
    const router = useRouter();
    const [profileImage, setProfileImage] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        router.push("/onboarding/onboard/select-role");
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-6">
            <div className="w-full max-w-lg rounded-3xl bg-[#151515] shadow-2xl p-10 relative">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <Image src="/Synqicon.png" alt="Synq Logo" width={50} height={50} />
                </div>

                {/* Heading */}
                <h1
                    className="text-3xl font-bold text-center text-white mb-8"
                    style={{ fontFamily: "SF Pro Display, sans-serif" }}
                >
                    Add a profile picture.
                </h1>


                <div className="flex justify-center mb-8" >
                    <div className="relative">
                        <div className="w-48 h-48 rounded-full bg-zinc-600/10 flex items-center justify-center overflow-hidden">
                            {profileImage ? (
                                <Image
                                    src={profileImage}
                                    alt="Profile"
                                    width={160}
                                    height={160}
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <div className="flex justify-center opacity-30">
                                    <Image src="/imageavatar.png" alt="Synq Logo" width={100} height={100} />
                                </div>
                            )}
                        </div>


                        <label
                            htmlFor="fileInput"
                            className="absolute bottom-2 right-2 bg-[#6B48FF] text-white p-3 rounded-full shadow-md hover:bg-gray-800 cursor-pointer"
                        >
                            <PencilLine className="w-5 h-5" />
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </div>
                </div>


                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#6B48FF] text-white text-lg font-medium hover:bg-gray-900 shadow-md mb-6"
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
