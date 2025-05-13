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
  title: "C&S Builders",
  description: "Your Building Experts",
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
