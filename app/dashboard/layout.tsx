import type { Metadata } from "next";
import Sidebar from "../dashboard/components/sidebar";
import Header from "../dashboard/components/header";

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
      <body className="h-screen bg-gray-950 text-white p-5">
      
        <Header />

        
        <div className="flex">
          <Sidebar />

          {/* Main dashboard content */}
          <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
