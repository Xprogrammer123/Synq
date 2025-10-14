import type { Metadata } from "next";
import Sidebar from "../dashboard/components/sidebar";
import Header from "../dashboard/components/header";
import CommandDialog from "./components/ui/commandDialog";

export const metadata: Metadata = {
  title: "Synq Dashboard",
  description: "Synq - Your Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen overflow-hidden scroll text-white">
        <CommandDialog />
        <Header />
        <div className="flex h-full">
          <Sidebar />
          {/* Main dashboard content */}
          <main className="flex-1 h-full p-6 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
