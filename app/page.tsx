'use client';
import Dashboard from "@/components/Dashboard";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-between mb-6">
     <h1 className="text-3xl font-bold">Lightweight Task Manager</h1>
     <Button>
      <a href="">
        <GitHubLogoIcon />
      </a>
     </Button>
     </div>
     <Dashboard />
    </main>
  );
}
 