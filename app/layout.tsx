import { BoardProvider } from "@/context/BoardContext/BoardContext";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Montserrat} from "next/font/google";
import { Providers } from "./providers";


const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taskflow",
  description: "Lightweight task manager",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body className={`h-screen w-full p-6 lg:p-16 dark:bg-black`}>
        <Providers>
        <div className="md:max-w-screen-xl mx-auto">
          <div className={inter.className}>
          <BoardProvider>{children}</BoardProvider>
          </div>
        </div>
        <Analytics />
       </Providers>
      </body>
    </html>
  );
}