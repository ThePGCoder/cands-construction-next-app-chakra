import type { Metadata } from "next";
import {
  Cinzel_Decorative,
  Corinthia,
  Inter,
  Krona_One,
  Montserrat_Subrayada,
  Poppins,
} from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import "@fontsource/corinthia";
import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const corinthia = Corinthia({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const kronaOne = Krona_One({
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat_Subrayada({
  subsets: ["latin"],
  weight: ["400"],
});

const signatureFont = localFont({
  src: "../../public/fonts/signature_font.ttf",
});

const copperplate = localFont({
  src: "../../public/fonts/OPTICopperplate-Light.otf",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "C&S Construction – Your Trusted Building Experts",
  description:
    "C&S Construction offers expert building services across New Zealand. From residential renovations to new builds, we're your trusted construction partner.",
  keywords: [
    "C&S Construction",
    "New Zealand builders",
    "home renovations",
    "new builds",
    "licensed building practitioners",
    "construction services",
    "Wellington construction",
  ],
  authors: [
    { name: "C&S Construction" },
    { name: "Phil Collings", url: "https://cands.co.nz/about" },
  ],
  creator: "C&S Construction",
  publisher: "C&S Construction Ltd",
  openGraph: {
    title: "C&S Construction – Your Trusted Building Experts",
    description:
      "Leading construction company in New Zealand, specializing in new builds, home extensions, and renovations.",
    url: "https://cands.co.nz",
    siteName: "C&S Construction",
    images: [
      {
        url: "https://cands.co.nz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "C&S Construction - Wellington Builders",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "C&S Construction – Your Trusted Building Experts",
    description:
      "Top-tier building and renovation services across New Zealand.",
    images: ["https://cands.co.nz/og-image.jpg"],
    creator: "@csconstruction",
  },
  metadataBase: new URL("https://cands.co.nz"),
  alternates: {
    canonical: "https://cands.co.nz",
    languages: {
      "en-NZ": "https://cands.co.nz",
    },
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
      className={`${inter.className} ${kronaOne.className} ${corinthia.className} ${cinzelDecorative.className} ${signatureFont.className} ${copperplate.className} ${montserrat.className}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
