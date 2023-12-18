import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
    // ... your existing metadata configuration
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
			<GoogleAnalytics GA_MEASUREMENT_ID="G-792B4TR99P"/>
            <body
                className={clsx(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
                    <div className="relative flex flex-col h-screen">
                        
                        <main className="container mx-auto  pt-[0rem] px-6 flex-grow">
                            {children}
							<CookieBanner/>
                        </main>
                        <br />
                        <br /><br /><br />
                        <Footer/>
                    </div>
                </Providers>
            </body>
        </html>
    );
}

