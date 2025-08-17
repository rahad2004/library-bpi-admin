import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Loading from "@/components/Loading";
import Toast from "@/components/Toast";
import { StoreProvider } from "@/store/StoreProvider.jsx";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Libraty Management system",
  description:
    "This is a library management system that is used to manage the library.",
};

export default function RootLayout({ children }) {  
  return (
    <html lang="en" suppressHydrationWarning>
      <StoreProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider attribute="class" enableSystem defaultTheme="system">
            <Toast />
            <Loading />
            {children}
          </ThemeProvider>
        </body>
      </StoreProvider>
    </html>
  );
}
