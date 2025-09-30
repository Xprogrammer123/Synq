"use client";

import { useState } from "react";
import {
  X,
  UserLock,
  PenTool,
  ChevronsLeftRightEllipsis,
  UserPen,
  ArrowRight,
  Trash2,
  Plus,
  Copy,
  User
} from "lucide-react";

export default function WorkspaceModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState([]);
  const [inviteLink, setInviteLink] = useState("");

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      onClose();
      setStep(1);
    }
  };

  // validate email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleAddEmail = () => {
    if (validateEmail(email) && !emails.includes(email)) {
      setEmails([...emails, email]);
      setEmail("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddEmail();
    }
  };

  const handleDelete = (removeEmail) => {
    setEmails(emails.filter((e) => e !== removeEmail));
  };

  const generateLink = () => {
    const random = Math.random().toString(36).substring(2, 12);
    const link = `synq_${random}`;
    setInviteLink(link);
    navigator.clipboard.writeText(link);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="rounded-2xl p-[1px] bg-gradient-to-b from-black to-[#6B48FF]/10">
        <div className="rounded-2xl bg-gradient-to-b from-black to-[#6B48FF]/20 p-8 w-xl border border-gray-800 relative">

          <div className="text-center text-white">
            {/* Step 1 */}
            {step === 1 && (
              <div className="flex flex-col items-center w-full">
                {/* Step Dots */}
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#6B48FF]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#151515]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#151515]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#151515]"></div>
                </div>

                <h2 className="text-lg font-semibold mb-4 text-center">
                  Let’s set up your workspace
                </h2>
                <h3 className="text-3xl font-bold text-center mb-2">
                  What’s your role here?
                </h3>
                <p className="text-xs text-gray-500 text-center mb-6">
                  Choose the role that’ll best describe how you’ll use this
                  workspace
                </p>

                {/* Role Buttons */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <button className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-transparent border border-gray-600 text-white text-sm group hover:bg-[#6B48FF] hover:text-black">
                    <UserLock className="w-4 h-4 text-[#6B48FF] group-hover:text-black" />
                    <span>Admin</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-transparent border border-gray-600 text-white text-sm group hover:bg-[#6B48FF] hover:text-black">
                    <PenTool className="w-4 h-4 text-[#6B48FF] group-hover:text-black" />
                    <span>Designer</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-transparent border border-gray-600 text-white text-sm group hover:bg-[#6B48FF] hover:text-black">
                    <ChevronsLeftRightEllipsis className="w-4 h-4 text-[#6B48FF] group-hover:text-black" />
                    <span>Developer</span>
                  </button>
                </div>
                <div className="flex justify-center mb-6">
                  <button className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-transparent border border-gray-600 text-white text-sm group hover:bg-[#6B48FF] hover:text-black">
                    <UserPen className="w-4 h-4 text-[#6B48FF] group-hover:text-black" />
                    <span>Project Manager</span>
                  </button>
                </div>

                {/* Next */}
                <div className="flex justify-end w-full">
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-1 px-6 py-2 bg-gradient-to-b from-[#8C6BFF] to-[#6B48FF] rounded-lg text-white font-medium hover:from-[#7a5cff] hover:to-[#5a3be6] transition"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="flex flex-col items-center w-full">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#151515]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#6B48FF]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#151515]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#151515]"></div>
                </div>

                <h2 className="text-lg font-semibold mb-4 text-center">
                  Let’s set up your workspace
                </h2>
                <h3 className="text-3xl font-bold text-center mb-2">
                  Pick the tools you want to connect
                </h3>
                <p className="text-xs text-gray-500 text-center mb-6">
                  You can always change these later
                </p>

                <div className="grid grid-cols-3 gap-4 mb-5 w-full max-w-md">
                  {/* Example tool buttons */}
                  <button className="flex items-center justify-between px-5 py-3 rounded-xl bg-transparent border border-violet-600/50 text-white text-sm group hover:bg-[#6B48FF] hover:text-black">
                    <span className="flex items-center gap-2">
                      <img src="icons/github2.png" alt="GitHub" className="w-5 h-5" />
                      GitHub
                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#6B48FF]"></span>
                  </button>
                  <button className="flex items-center justify-between px-5 py-3 rounded-xl bg-transparent border border-violet-600/50 text-white text-sm group hover:bg-[#6B48FF] hover:text-black">
                    <span className="flex items-center gap-2">
                      <img src="icons/figma.png" alt="Figma" className="w-5 h-5" />
                      Figma
                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#6B48FF]"></span>
                  </button>
                  <button className="flex items-center justify-between px-5 py-3 rounded-xl bg-transparent border border-violet-600/50 text-white text-sm group hover:bg-[#6B48FF] hover:text-black">
                    <span className="flex items-center gap-2">
                      <img src="icons/slack.png" alt="Slack" className="w-5 h-5" />
                      Slack
                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#6B48FF]"></span>
                  </button>
                  <button className="flex items-center justify-between px-5 py-3 rounded-xl bg-transparent border border-violet-600/50 text-white text-sm group hover:bg-[#6B48FF] hover:text-black">
                    <span className="flex items-center gap-2">
                      <img src="icons/notion.png" alt="Notion" className="w-5 h-5" />
                      Notion
                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#6B48FF]"></span>
                  </button>
                  <button className="flex items-center justify-between px-5 py-3 rounded-xl bg-transparent border border-violet-600/50 text-white text-sm group hover:bg-[#6B48FF] hover:text-black">
                    <span className="flex items-center gap-2">
                      <img src="icons/drive.png" alt="Drive" className="w-5 h-5" />
                      Drive
                    </span>
                    <span className="w-3 h-3 rounded-full bg-[#6B48FF]"></span>
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center mb-4">
                  More tools coming soon.....
                </p>

                <div className="flex justify-end w-full">
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-1 px-6 py-2 bg-gradient-to-b from-[#8C6BFF] to-[#6B48FF] rounded-lg text-white font-medium hover:from-[#7a5cff] hover:to-[#5a3be6] transition"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 - Invite Team */}
            {step === 3 && (
              <div className="flex flex-col items-center w-full ">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#151515]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#151515]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#6B48FF]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#151515]"></div>
                </div>

                <h2 className="text-lg font-semibold mb-2 text-center">
                  Let’s set up your workspace.
                </h2>
                <h3 className="text-2xl font-bold mb-2 text-center">
                  Invite your team
                </h3>
                <p className="text-xs text-gray-500 text-center mb-6">
                  Add teammates now or skip and invite later.
                </p>

                {/* Email Input */}
                <div className="flex items-center bg-[#1a1a1a] rounded-lg px-3 py-2 mb-1 border border-[#2a2a2a] w-full max-w-lg gap-2">
                  <User size={18} className="text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter member email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-gray-200 text-sm"
                  />
                  <button
                    onClick={handleAddEmail}
                    className="p-1 text-gray-400 hover:text-white"
                  >
                    <Plus size={18} className="text-violet-600" />
                  </button>
                </div>

                {/* Added Emails */}
                <div className="space-y-2 mb-1 w-full max-w-lg">
                  {emails.map((e, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center bg-[#1a1a1a] px-3 py-2 rounded-lg border border-[#2a2a2a]"
                    >
                      <span className="text-gray-200 text-sm">{e}</span>
                      <button
                        onClick={() => handleDelete(e)}
                        className="text-gray-400 hover:text-red-400"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
                {/* Buttons */}
                <div className="flex justify-between items-center w-full max-w-lg mt-6">
                  <button
                    onClick={generateLink}
                    className="flex items-center justify-center gap-2 bg-violet-600/5 border border-violet-600/50 text-gray-200 text-sm px-5 py-2 rounded-lg hover:bg-[#222]"
                  >
                    <Copy size={16} className="text-violet-600" />
                    <span>Copy Invite Link</span>
                  </button>

                  <button
                    onClick={handleNext}
                    className="flex items-center justify-center gap-2 bg-[#6B48FF] hover:bg-[#5939d9] text-white text-sm font-medium px-4 py-2 rounded-lg"
                  >
                    <span>Create Workspace</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

                {inviteLink && (
                  <p className="text-xs text-gray-500 mt-3">
                    Link copied:{" "}
                    <span className="text-[#6B48FF]">{inviteLink}</span>
                  </p>
                )}

              </div>
            )}
            {/* Step 4 - Review & Confirm */}
            {step === 4 && (
              <div className="flex flex-col items-center w-full">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-[#151515]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#151515]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#151515]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#6B48FF]"></div>
                </div>
                <span className="flex items-center gap-2 mb-4">
                  <img src="/success.png" alt="Slack" className="w-20 h-20" />

                </span>
                <h2 className="text-3xl font-bold mb-2">Your workspace is Ready !</h2>
                <p className="text-xs text-gray-400 mb-6">
                  Jump in and start collaborating accross your favourite tools.
                </p>

                <div className="w-full max-w-2xl flex justify-center items-center">
                  <button
                    onClick={handleNext}
                    className="w-full px-6 py-3 bg-violet-600 rounded-lg text-white font-medium hover:from-[#7a5cff] hover:to-[#5a3be6] transition"
                  >
                    Go to Workspace
                  </button>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
