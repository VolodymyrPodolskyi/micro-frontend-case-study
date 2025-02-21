import { Toaster } from "@/components/ui/Toaster";
import { cn } from "@/lib/utils";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/provider";
import Navbar from "@/components/Navbar";
import { ApiProvider } from "@/services/api/apiProvider";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata = {
  title: "Frontend Developer Case Study",
  description:
    "Frontend Developer Case Study",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApiProvider>
          <Providers>
            <ThemeProvider>
              <Navbar />
              <div className="container max-w-7xl mx-auto h-full pt-12 px-0 md:px-8">
                {children}
              </div>
              <Toaster />
            </ThemeProvider>
          </Providers>
        </ApiProvider>
      </body>
    </html>
  );
}
