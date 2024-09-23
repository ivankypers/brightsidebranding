import React from "react";
import type {Metadata, Viewport} from "next";
import "./globals.css";
import {Providers} from "@/app/providers";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"



export const metadata: Metadata = {
    title: "BRIGHTSIDE BRANDING",
    description: "Мы дизайн делаем. И сайт можем к дизайну написать. В общем всё что угодно, но не конструировать самолёт",
    icons: {
        icon: '/favicon.png',
    },
};

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width'
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Providers>{children}</Providers>
        <Analytics/>
        <SpeedInsights/>
        </body>
        </html>
    );
}
