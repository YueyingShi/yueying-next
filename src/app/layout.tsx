import "./globals.css";
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
