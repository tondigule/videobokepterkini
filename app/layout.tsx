import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SITENAME } from "@/lib/constants";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${SITENAME} - Video Bokep Indo Viral Terbaru`,
    description: `${SITENAME} Video Bokep Indo Bocil Jepang Ngentot Jav Jilbab Smp Barat Mama Viral Sma Korea Tante China Live Paksa Bokep Abg Terbaru`,
    metadataBase: new URL("https://videobokepterkini.pages.dev"),
    alternates: {
        canonical: `/`,
    },
    openGraph: {
        title: `${SITENAME} - Video Bokep Indo Jepang Barat Viral Terbaru`,
        description: `${SITENAME} Video Bokep Indo Bocil Jepang Ngentot Jav Jilbab Smp Barat Mama Viral Sma Korea Tante China Live Paksa Bokep Abg Terbaru`,
        url: `/`,
        type: `website`,
    },
    verification: {
        google: '0Si9H11-ghmvKZH7jNRM9i1S4qSahOCaNDGQGk7pwb4',
        yandex: '604739676ff17ae0',
    },
};

export const runtime = "edge";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": `${SITENAME}`,
        "description": `${SITENAME} Video Bokep Indo Bocil Jepang Ngentot Jav Jilbab Smp Barat Mama Viral Sma Korea Tante China Live Paksa Bokep Abg Terbaru`,
        "logo": "https://videobokepterkini.pages.dev/favicon.ico",
        "url": "https://videobokepterkini.pages.dev",
        "founder":{
            "@type":"Person",
            "name":"admin",
            "url":"https://videobokepterkini.pages.dev"
            },
            "foundingDate":"2025-05-16"
        }
        const jsonLd2 = {
            "@context": "https://schema.org",
        "@type": "WebSite",
        "name": `${SITENAME}`,
        "url": "https://videobokepterkini.pages.dev",
        "description": `${SITENAME} Video Bokep Indo Bocil Jepang Ngentot Jav Jilbab Smp Barat Mama Viral Sma Korea Tante China Live Paksa Bokep Abg Terbaru`,
        "potentialAction": { 
        "@type": "SearchAction", 
          "target": "https://videobokepterkini.pages.dev/?q={search_term}", 
            "query-input": "required name=search_term"}
        }
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd2) }}
        />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
