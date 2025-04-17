import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Kantumruy_Pro,
  Noto_Sans_Khmer,
  Roboto,
} from "next/font/google"; // Import Roboto font
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoKhmer = Kantumruy_Pro({
  variable: "--font-noto-khmer",
  subsets: ["khmer"], // Specify Khmer subset
  weight: ["400", "700"], // Optional: Specify font weights
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"], // Specify font weights
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: { default: "Vert San", template: "%s | My Site" },
  description: "Welcome to My Site",
  alternates: {
    canonical: "https://example.com",
    languages: {
      "en-US": "https://example.com/en-US",
      "de-DE": "https://example.com/de-DE",
    },
  },
  openGraph: {
    title: "My Site",
    description: "Welcome to My Site",
    url: "https://example.com",
    siteName: "My Site",
    images: [{ url: "https://example.com/og.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${notoKhmer.variable} ${roboto.variable}`}
    >
      <head>
        <link
          rel="shortcut icon"
          href="https://scontent.fpnh2-1.fna.fbcdn.net/v/t39.30808-6/488705577_122101331852828102_2981929377363940132_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF9LJXsuNGXw9UY3PNQQ_FBQhSJK36Hp31CFIkrfoenfah3GIon1-UgNFnC_N3Q4Cv8PmSX5xY9vIdMZi37NPZM&_nc_ohc=E5feI7WLDeYQ7kNvwE6JwDa&_nc_oc=AdnY1-eyNs2rXundT3FB7_55UXjhIXKJQDfto_xzPzY6Zfr-K1_-QIYKzAcdL1SBdU0&_nc_zt=23&_nc_ht=scontent.fpnh2-1.fna&_nc_gid=uDlSs_4kn4Db7zwkaJCtkQ&oh=00_AfE_u_kDHfPT9zdKxZn54aaTvVZHhDe6Btlm_nJ4-L9wsw&oe=6804860D"
          type="image/png"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
