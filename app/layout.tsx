import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My detailed and descriptive portfolio",
  icons: {
    icon: [
      { url: "/fav2.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/fav2.png",
    apple: "/fav2.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* 🔥 HubSpot Tracking Code */}
        <Script
          id="hubspot-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,u,b,s,p,o,t){
                h.hubspot=h.hubspot||{};
                h.hubspot.load=function(config){
                  h.hubspot.config=config;
                  var script=u.createElement('script');
                  script.src='https://js-eu1.hs-scripts.com/146013425.js';
                  script.async=true;
                  u.head.appendChild(script);
                };
                h.hubspot.load({
                  portalId: '146013425',
                  hublet: 'eu1',
                  environment: 'prod',
                  defaultChatFlow: 'Pino'
                });
              })(window,document);
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
