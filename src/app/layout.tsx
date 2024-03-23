import "~/styles/globals.css";

import { Inter } from "next/font/google";

import NavBar from "~/components/NavBar";

import { TRPCReactProvider } from "~/trpc/react";
import ThemeProvider from "~/components/ThemeProvider";
import { ModeToggle } from "~/components/ModeToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "mxtchjohnston",
  description: "homoiconic software engineer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <TRPCReactProvider>
            <NavBar />
            {children}
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
