import Header from "@/components/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const circular = localFont({
  src: "../public/fonts/circular-std.ttf",
  variable: "--font-circular",
});

const markPro  =localFont({
  src: [
    {
      path: "../public/fonts/mark-pro.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/mark-pro-bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-mark-pro",
});
const condensed = localFont({
  src: [
    {
      path: "../public/fonts/condensed.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/condensed-bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-condensed",
})

export const metadata = {
  title: "Ricardo | Personal Portfolio",
  description: "Ricardo is a full-stack developer with 8 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={cn(
          ` bg-gray-50 text-gray-950 relative   dark:bg-gray-900 dark:text-white dark:text-opacity-90`,
          circular.className , 
          markPro.variable,
          condensed.variable
        )}
      >
        <div className="bg-orange absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-darkpurple absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
