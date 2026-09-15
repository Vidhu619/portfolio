import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Vidhu Krishnan JM — Software Engineer",
  description:
    "Vidhu Krishnan JM — Software Engineer. Backend engineering, APIs, and business applications across CRM, ERP, HRMS, banking, and invoicing systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var stored=localStorage.getItem('theme');var dark=stored?stored==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(dark){document.documentElement.classList.add('dark');}}catch(e){}})();",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
