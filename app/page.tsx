"use client";
import Users from "../src/components/Users";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto p-4">
        <Users />
      </div>
    </main>
  );
}
