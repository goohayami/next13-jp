import Header from "./components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
