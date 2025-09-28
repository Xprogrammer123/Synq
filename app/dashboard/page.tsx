import { FileText, Users, Upload, Zap } from "lucide-react";

export default function Page() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* left main column */}
      <div className="col-span-8 space-y-6">
        {/* action buttons */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg bg-[#151515] relative px-4 py-4 text-sm w-full font-medium text-gray-200 hover:bg-[#1c1c1c] transition justify-center">
            <FileText className="w-5 h-5 text-[#6B48FF]" />
            New Doc
            <span className="absolute inset-x-0 bottom-0 h-[90%] bg-[radial-gradient(ellipse_at_bottom,rgba(107,72,255,0.35),transparent_70%)] pointer-events-none"></span>
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-[#151515] relative px-4 py-4 text-sm w-full font-medium text-gray-200 hover:bg-[#1c1c1c] transition justify-center">
            <Users className="w-5 h-5 text-[#6B48FF]" />
            New Meeting
            <span className="absolute inset-x-0 bottom-0 h-[90%] bg-[radial-gradient(ellipse_at_bottom,rgba(107,72,255,0.35),transparent_70%)] pointer-events-none"></span>
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-[#151515] relative px-4 py-4 text-sm w-full font-medium text-gray-200 hover:bg-[#1c1c1c] transition justify-center">
            <Zap className="w-5 h-5 text-[#6B48FF]" />
            Trigger Workflow
            <span className="absolute inset-x-0 bottom-0 h-[90%] bg-[radial-gradient(ellipse_at_bottom,rgba(107,72,255,0.35),transparent_70%)] pointer-events-none"></span>
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-[#151515] relative px-4 py-4 text-sm w-full font-medium text-gray-200 hover:bg-[#1c1c1c] transition justify-center">
            <Upload className="w-5 h-5 text-[#6B48FF]" />
            Upload File
            <span className="absolute inset-x-0 bottom-0 h-[90%] bg-[radial-gradient(ellipse_at_bottom,rgba(107,72,255,0.35),transparent_70%)] pointer-events-none"></span>
          </button>
        </div>



        <div className="grid grid-cols-4 gap-4 bg-[#151515] py-9 px-5 border border-zinc-800 rounded-2xl">
          {[
            { label: "Active Projects", value: "7" },
            { label: "Running Automations", value: "3" },
            { label: "Total Docs", value: "124" },
            { label: "Storage", value: "72% used" },
          ].map((item, idx) => (
            <div
              key={item.label}
              className="relative flex flex-col items-start justify-center ml-14"
            >
              <div className="text-sm text-gray-400">{item.label}</div>
              <div className="text-3xl font-bold">{item.value}</div>

              {/* vertical divider */}
              {idx !== 3 && (
                <span className="absolute right-4 top-1.2 h-20 w-px bg-zinc-800"></span>
              )}
            </div>
          ))}
        </div>

{/* ✅ Tasks and Automation */}
<div className="rounded-lg bg-[#151515] border border-gray-800 p-5 flex flex-col">
  {/* header */}
  <div className="font-semibold text-base mb-4">Tasks and Automation</div>

  {/* list */}
  <div className="divide-y divide-gray-800 flex-1 bg-[#1E1E1E] shadow-md px-4 rounded-xl pb-14">
    {[
      {
        title: "Automation",
        from: "Slack",
        to: "Google Drive",
        status: "Running",
        color: "green",
        useIcon: true,
      },
      {
        title: "Automation",
        from: "Backup",
        to: "Dropbox",
        status: "Failed – Check Logs",
        color: "yellow",
        useIcon: false,
      },
    ].map((task, idx) => (
      <div
        key={idx}
        className="py-4 flex items-center justify-between"
      >
        {/* left side */}
        <div>
          <div className="text-sm font-medium">{task.title}</div>
          <div className="text-xs text-gray-400 flex items-center gap-1">
            <span>{task.from}</span>
            {task.useIcon ? (
              <svg
                className="w-3.5 h-3.5 text-gray-400 animate-spin-slow"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            ) : (
              <span>to</span>
            )}
            <span>{task.to}</span>
          </div>
        </div>

        {/* right side → status badge */}
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            task.color === "green"
              ? "bg-green-500/20 text-green-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {task.status}
        </span>
      </div>
    ))}
  </div>

  {/* footer */}
  <div className="flex justify-end mt-3">
    <button className="text-sm text-gray-400 hover:text-gray-200 transition">
      View all projects →
    </button>
  </div>
</div>



        {/* activity feed */}
        <div className="rounded-lg bg-gray-900 border border-gray-800 p-4">
          <div className="font-semibold mb-3">Activity Feed</div>
          <div className="space-y-3">
            <div className="p-3 bg-[#0b0b0c] rounded">Pull Request #204: "WIP: Add user email validation" — Judah#804</div>
            <div className="p-3 bg-[#0b0b0c] rounded">New message in #design-ux — Alex Chen</div>
            <div className="p-3 bg-[#0b0b0c] rounded">Ticket ONBOARD-15: "Create password strength indicator" — Rick Sanchez</div>
          </div>
        </div>
      </div>

      {/* right column */}
      <div className="col-span-4 space-y-6">
        <div className="rounded-lg bg-gray-900 border border-gray-800 p-4">
          <div className="font-semibold">Let's set up your workspace!</div>
          <div className="text-sm text-gray-400 mb-3">Name your workspace and invite your team to get started.</div>
          <button className="rounded-full bg-indigo-600 px-4 py-2">Create Workspace</button>
        </div>

        <div className="rounded-lg bg-gray-900 border border-gray-800 p-4">
          <div className="font-semibold mb-2">Project Snapshot</div>
          <div className="divide-y divide-gray-800">
            <div className="py-2 flex items-center justify-between">
              <div className="text-sm">Website Redesign</div>
              <div className="text-xs text-yellow-400">Deadline in 3 days</div>
            </div>
            <div className="py-2 flex items-center justify-between">
              <div className="text-sm">App Launch</div>
              <div className="text-xs text-gray-400">2 tasks due tomorrow</div>
            </div>
            <div className="py-2 flex items-center justify-between">
              <div className="text-sm">Marketing Campaign</div>
              <div className="text-xs text-gray-400">4 tasks due this week</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-gray-900 border border-gray-800 p-4">
          <div className="font-semibold mb-3">Connected Apps</div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm">Google Drive</div>
                <div className="text-xs text-gray-400">Last sync, 2hr ago</div>
              </div>
              <button className="rounded-full bg-indigo-600 px-3 py-1 text-sm">Resync</button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm">Slack</div>
                <div className="text-xs text-gray-400">Error: Reconnect Needed</div>
              </div>
              <button className="rounded-full bg-purple-600 px-3 py-1 text-sm">Fix</button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm">Github</div>
                <div className="text-xs text-gray-400">Last sync, Just Now</div>
              </div>
              <button className="rounded-full bg-[#151515] px-3 py-1 text-sm">Open</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
