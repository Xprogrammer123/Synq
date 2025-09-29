import { FileText, Users, Upload, Zap, ExternalLink, Wrench, RefreshCw, AlertTriangle, Search as SearchIcon, FilterIcon, Monitor } from "lucide-react";
import Image from "next/image"
export default function Page() {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* LEFT SIDE */}
      <div className="col-span-8 space-y-6">
        {/* Buttons */}
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

        {/* Counters */}
        <div className="grid grid-cols-4 gap-4 bg-[#151515] py-9 px-5 border border-zinc-800 rounded-2xl">
          {[
            { label: "Active Projects", value: "7" },
            { label: "Running Automations", value: "3" },
            { label: "Total Docs", value: "124" },
            { label: "Storage", value: "72% used" },
          ].map((item, idx) => (
            <div key={item.label} className="relative flex flex-col items-start justify-center ml-14">
              <div className="text-sm text-gray-400">{item.label}</div>
              <div className="text-3xl font-bold">{item.value}</div>
              {idx !== 3 && <span className="absolute right-4 top-1.2 h-20 w-px bg-zinc-800"></span>}
            </div>
          ))}
        </div>

        {/* Tasks and automation */}
        <div className="rounded-lg bg-[#151515] border border-gray-800 p-5 flex flex-col">
          <div className="font-semibold text-base mb-4">Tasks and Automation</div>
          <div className="flex-1 bg-[#1E1E1E] shadow-md rounded-xl pb-14 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-gray-400 border-b border-gray-800">
                  <th className="py-3 px-4 font-medium text-left">Type</th>
                  <th className="py-3 px-4 font-medium text-center">Description</th>
                  <th className="py-3 px-4 font-medium text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-4 text-left">Automation</td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span>Slack</span>
                      <RefreshCw className="w-4 h-4 text-gray-400 animate-pulse" />
                      <span>Google Drive</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">Running</td>
                </tr>

                <tr className="border-b border-gray-800 last:border-0">
                  <td className="py-4 px-4 text-left">Automation</td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span>Backup</span>
                      <span className="text-gray-400">to</span>
                      <span>Dropbox</span>
                    </div>
                  </td>
                  <td className="py-4 pr-5 flex items-center justify-end gap-2 text-right">
                    Failed – <span className="underline">Check Logs</span>
                    <AlertTriangle className="w-5 h-5 text-yellow-300" />
                  </td>

                </tr>
              </tbody>

            </table>
          </div>
          <div className="flex justify-end mt-3">
            <button className="text-sm text-gray-400 hover:text-gray-200 transition">View all projects →</button>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="rounded-lg bg-[#151515] border border-gray-800 p-5 flex flex-col gap-4">

          <div className="flex items-center justify-between">
            <div className="font-semibold text-base text-white">Activity Feed</div>


            <div className="flex items-center gap-3">

              <div className="relative w-full">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  className="bg-[#1E1E1E] w-full rounded-lg pl-12 pr-16 py-4 text-sm placeholder:text-zinc-600 focus:outline-none text-white"
                  placeholder="Search (docs, tasks, meetings...)"
                />

              </div>

              <button className="flex items-center gap-2 px-6 py-4 text-sm bg-[#1E1E1E] rounded-lg text-gray-300 hover:text-white">
                <FilterIcon className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>

          <p className="text-xs text-gray-200 mb-4 flex item-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#6B48FF]" /> Highlight to view and interact with text notifications.
          </p>

          {/* Table */}
          <div className="flex-1  shadow-md overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-gray-700 ">
                  <th className="py-3 px-4 font-medium text-left">Activity Name</th>
                  <th className="py-3 px-4 font-medium text-left">Author</th>
                  <th className="py-3 px-4 font-medium text-right">Contextual Link(s)</th>
                </tr>
              </thead>

              <tbody className="bg-[#1E1E1E] border-b border-gray-800 rounded-xl">
                <tr className="border-b border-gray-800 ">
                  <td className="py-3 px-4 flex items-center gap-5 text-gray-200 max-w-2/3">
                    <Image src="/icons/github.png" width={30} height={30} />
                    Pull Request #204: "WIP: Add user email validation"
                  </td>
                  <td className="py-3 pr-40 text-gray-400 -ml-20">Judah1604</td>
                  <td className="py-3 px-4 text-gray-400 text-right">
                    [ONBOARD-12] – Build email validation step
                  </td>
                </tr>

                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4 flex items-center gap-5 text-gray-200 max-w-2/3">
                    <Image src="/icons/slack.png" width={30} height={30} />
                    New message in #design-ux
                  </td>
                  <td className="py-3 text-gray-400">Alex Chen</td>
                  <td className="py-3 px-4 text-gray-400 text-right">[User Onboarding Spec]</td>
                </tr>

                <tr className="border-b border-gray-800">
                  <span className="text-green-400 text-xs pl-18 -mb-10">In progress</span>
                  <td className="py-3 px-4 flex items-center gap-5 text-gray-200 max-w-2/3">
                    <Image src="/icons/jira.png" width={30} height={30} />
                    Ticket ONBOARD-15: "Create password strength indicator"
                  </td>
                  <td className="py-3 text-gray-400">Rick Sanchez</td>
                  <td className="py-3 px-4 text-gray-400 text-right">None</td>
                </tr>

                <tr className="border-b border-gray-800">
                  <span className="text-green-400 text-xs pl-18 -mb-10">In progress</span>
                  <td className="py-3 px-4 flex items-center gap-5 text-gray-200 max-w-2/3">
                    <Image src="/icons/jira.png" width={30} height={30} />
                    Ticket ONBOARD-15: "Create password strength indicator"
                  </td>
                  <td className="py-3 text-gray-400">Rick Sanchez</td>
                  <td className="py-3 px-4 text-gray-400 text-right">None</td>
                </tr>

                <tr>
                  <span className="text-green-400 text-xs pl-18 -mb-10">open</span>
                  <td className="py-3 px-4 flex items-center gap-5 text-gray-200 max-w-2/3">
                    <Image src="/icons/github.png" width={30} height={30} />
                    Pull Request #204: "Feat: Add user email validation" is ready for review
                  </td>
                  <td className="py-3 text-gray-400">Judah1604</td>
                  <td className="py-3 px-4 text-gray-400 text-right">
                    [ONBOARD-12] – Build email validation step <br />
                    [Link to Alex Chen's question about error messages]
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


      {/* RIGHT SIDE */}
      <div className="col-span-4 space-y-6">
        {/* Workspace Setup */}
        <div className="rounded-2xl p-[1px] bg-gradient-to-b from-black/90 to-[#6B48FF]/20">
          <div className="rounded-2xl bg-gradient-to-b from-black/95 to-[#6B48FF]/2 py-18 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">Let's set up your workspace!</h2>
            <p className="text-sm text-gray-400 mb-4">
              Name your workspace and invite your team to get started.
            </p>

            <button className="px-5 py-2 mx-auto bg-gradient-to-b from-[#8C6BFF] to-[#6B48FF] rounded-lg text-white font-medium hover:from-[#7a5cff] hover:to-[#5a3be6] transition flex items-center justify-center gap-2">
              <Monitor className="w-5 h-5" />
              Create Workspace
            </button>
          </div>
        </div>


        {/* Project Snapshot */}
        <div className="rounded-lg bg-[#151515] border border-gray-800 p-5 flex flex-col">
          <div className="font-semibold text-base mb-4">Project Snapshot</div>

          <table className="w-full text-sm text-gray-200 border-collapse">

            <div className="rounded-lg bg-[#1E1E1E] overflow-hidden">
              <table className="w-full text-sm text-gray-200 border-collapse">
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-5 px-4">Website Redesign</td>
                    <td className="py-5 px-4 text-gray-200 flex items-center gap-2 pl-28">
                      Deadline in 3 days
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-5 px-4">App Launch</td>
                    <td className="py-5 px-4 text-gray-200 flex items-center gap-2 pl-28">
                      2 tasks due tomorrow
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-5 px-4">Marketing Campaign</td>
                    <td className="py-5 px-4 text-gray-200 flex items-center gap-2 pl-28">
                      4 tasks due this week
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* View all projects button aligned right */}
              <div className="flex justify-end mt-3 pr-4 pb-2">
                <button className="text-sm text-gray-400 hover:text-gray-200 transition">
                  View all projects →
                </button>
              </div>
            </div>
          </table>
        </div>


        {/* Connected Apps */}
        <div className="rounded-lg bg-[#151515] border border-gray-800 p-5">
          <div className="font-semibold text-base mb-4">Connected Apps</div>

          <table className="w-full border-collapse">
            <tbody className="divide-y divide-gray-800">
              {/* Google Drive */}
              <tr className="bg-[#1E1E1E]">
                <td className="py-4 px-4 flex items-center gap-3">
                  <img src="/icons/drive.png" alt="Google Drive" className="w-8 h-8" />
                  <span className="text-gray-200 text-sm">Google Drive</span>
                </td>
                <td className="py-4 px-4 text-gray-400 text-sm">Last sync, 2hr ago</td>
                <td className="py-4 px-4 text-right">
                  <button className="px-3 py-3 flex items-center gap-2 bg-[#6B48FF] rounded-lg text-xs text-white">
                    <RefreshCw className="w-4 h-4" />
                    Resync
                  </button>
                </td>
              </tr>

              {/* Slack */}
              <tr className="bg-[#1E1E1E]">
                <td className="py-4 px-4 flex items-center gap-3">
                  <img src="/icons/slack.png" alt="Slack" className="w-8 h-8" />
                  <span className="text-gray-200 text-sm">Slack</span>
                </td>
                <td className="py-4 px-4 text-gray-400 text-sm">Error: Reconnect Needed</td>
                <td className="py-4 px-4 text-right">
                  <button className="px-3 py-3 flex items-center gap-2 bg-[#6B48FF] rounded-lg text-xs text-white">
                    <Wrench className="w-4 h-4" />
                    Fix
                  </button>
                </td>
              </tr>

              {/* Github */}
              <tr className="bg-[#1E1E1E]">
                <td className="py-4 px-4 flex items-center gap-3">
                  <img src="/icons/github.png" alt="Github" className="w-8 h-8" />
                  <span className="text-gray-200 text-sm">Github</span>
                </td>
                <td className="py-4 px-4 text-gray-400 text-sm">Last sync, Just Now</td>
                <td className="py-4 px-4 text-right">
                  <button className="px-3 py-3 flex items-center gap-2 bg-[#6B48FF] rounded-lg text-xs text-white">
                    <ExternalLink className="w-4 h-4" />
                    Open
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
