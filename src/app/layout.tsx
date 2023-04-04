import Providers from "../components/Providers";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Toaster from "../components/Toaster";

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
    <html lang="en">
      <body>
        <Providers>
          <Toaster />
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
