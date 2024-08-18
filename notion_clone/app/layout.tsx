import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '../public/logo.svg'
import { ThemeProvider } from "@/components/ui/provider/themes-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion_Clone",
  description: "The connected workspace where better, faster work happens.",
  icons: {
    icon: [
      {
        media: "(prefers-color-schema: light)",
        url: '../public/logo.svg',
        href: '../public/logo.svg'
      },
      {
        media: "(prefers-color-schema: dark)",
        url: '/logo-dark.svg',
        href: '/logo-dark.svg'
      }
    ]
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange storageKey="Notion-theme-2">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
