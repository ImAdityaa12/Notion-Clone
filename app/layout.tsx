import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from "./logo.svg";
import logoDark from "./logo_dark.svg";
import Image from "next/image";
import { ThemeProvider } from "@/components/provider/theme-provider";
import ConvexClientProvider from "@/components/provider/ConvexClientProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion",
  description: "The Connected workspace where better, faster work happens",
  icons: {
    icon: "/logo.svg",
  },
  // icons: {
  //   icon: [
  //     {
  //       media: "(prefers-color-scheme: light)",
  //       url: "/logo.svg",
  //       href: "/logo.svg",
  //     },
  //     {
  //       media: "(prefers-color-scheme: dark)",
  //       url: "/logo_dark.svg",
  //       href: "/logo_dark.svg",
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-[#1f1f1f]`}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="Notion-Theme"
          >
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
