import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TabBar from "@/components/TabBar";
import Providers from "./providers";
import Toast from "@/components/Toast/Toast";
import GlobalModal from "@/components/Modal/GlobalModal";
const DEV = process.env.NODE_ENV === "development";

const inter = Inter({ subsets: ["latin"] });

const title = "100설기";
const description = "100일간 목표 달성을 위해 매일매일 기록하세요!";
const url = DEV ? "http://localhost:3000" : "https://100seolgi.click";

export const metadata: Metadata = {
  title: title,
  description: description,
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
  metadataBase: new URL(url),
  openGraph: {
    images: '/og-image.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + "w-full h-screen"}>
        {/* <Suspense fallback={<Loading />}> */}
        <Providers>
          <Header />
          <main className="mx-auto flex h-screen w-full flex-col items-center gap-[20px] md:gap-[40px]">
            {children}
            <GlobalModal />
          </main>
          <TabBar />
        </Providers>
        <Toast></Toast>
        {/* </Suspense> */}
      </body>
    </html>
  );
}
