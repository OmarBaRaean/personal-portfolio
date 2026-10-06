import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Omar Ba Raean | SOC Analyst & Security Engineer",
  description:
    "SOC Analyst and Security Engineer specializing in SIEM engineering with Splunk and Wazuh, network traffic analysis, and hands-on security labs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrains.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=bug_report,close,cloud,code,data_object,description,lan,play_circle,policy,radar,security,shield,translate&display=block"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
