import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";

const sourceSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: "Cavalla - Autonomy With ROI From Day One",
  description: "Efficient and reliable autonomous forklift operations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable}`}>
     <head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="antialiased" style={{ backgroundColor: "#D8C3A5" }}>
        {children}
      </body>
    </html>
  );
}
