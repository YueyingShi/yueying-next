import "./globals.css";
import { Roboto, EB_Garamond } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});

export const metadata = {
  title: "Yueying Shi",
  description:
    "Welcome to my portfolio website! Here you can find my projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${garamond.variable}`}>
      <body>{children}</body>
    </html>
  );
}
