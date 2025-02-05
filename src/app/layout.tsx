import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const sourceSans = Source_Sans_3({
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
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
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
