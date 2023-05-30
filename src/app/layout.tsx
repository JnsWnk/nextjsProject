import Providers from "../components/Providers";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "NextJs Project",
  description: "Welcome to my projectp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${roboto.variable}`} lang="en">
      <body className={`bg-slate-50 dark:bg-slate-950`}>
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
