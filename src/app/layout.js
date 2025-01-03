import localFont from "next/font/local";
import "./globals.css";
import { StoreProvider } from "@/redux/StoreProvider";
import NextTopLoader from "nextjs-toploader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export const metadata = {
  title: "Rahat",
  description: "A multi version portfolio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextTopLoader color="#3B82F6" crawlSpeed={5} showSpinner={false} speed={5} />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
