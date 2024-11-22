"use client";
import Sidebar from "@/components/Dashboard/Sidebar";

export default function Home({ children }) {
  console.log("🚀 ~ Home ~ children:", children);
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        {/* <h1 className="text-3xl font-semibold mb-6">Welcome to Your Dashboard</h1> */}
        {children}
      </main>
    </div>
  );
}
