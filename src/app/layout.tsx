import React from "react";
import type {Metadata} from "next";
import "./globals.css";
import {Providers} from "@/app/providers";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"



export const metadata: Metadata = {
    title: "BRIGHTSIDE BRANDING",
    description: "Мы дизайн делаем. И сайт можем к дизайну написать. В общем всё что угодно, но не конструировать самолёт",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
            <Providers>{children}</Providers>
            <SpeedInsights />
            <Analytics />
        </body>
        </html>
    );
}
