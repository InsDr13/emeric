import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/noise-overlay";
import { CustomCursor } from "@/components/custom-cursor";
import { LenisProvider } from "@/components/lenis-provider";
import { Analytics } from '@vercel/analytics/next';

// Harmond - Display font (fallback: Playfair Display)
const harmond = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-harmond",
  display: "swap",
  preload: true,
});

// Nohemi - Body font (fallback: Inter)
const nohemi = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nohemi",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Emeric Agbo | Ingénieur Génie Civil & Dessinateur Projecteur 2D-3D",
  description:
    "Ingénieur spécialisé en études de structures, conception de plans 2D-3D et gestion de projets BTP. Expertise technique au service des infrastructures durables en Côte d'Ivoire.",
  keywords: [
    "Emeric Agbo",
    "Ingénieur Génie Civil Abidjan",
    "Dessinateur Projecteur 2D-3D",
    "Chef de Projet Étude de Structure",
    "Bureau d'études structure Côte d'Ivoire",
    "Calcul de béton armé",
    "Modélisation AutoCAD ArchiCAD",
    "Plans d'exécution BTP",
    "Suivi de chantier Abidjan",
    "Conception structurelle",
    "Expertise technique bâtiment",
    "Génie Civil Yopougon",
  ],
  authors: [{ name: "Emeric Agbo" }],
  openGraph: {
    title: "Emeric Agbo - Ingénierie, Structures & Modélisation",
    description:
      "De la conception technique à la réalisation, j'accompagne vos projets de construction avec rigueur et précision structurelle.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${harmond.variable} ${nohemi.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-black text-white font-nohemi antialiased overflow-x-hidden">
        <LenisProvider>
          {/* Noise overlay - Film grain effect */}
          <NoiseOverlay />
          
          {/* Custom cursor - Desktop only */}
          <CustomCursor />
          
          {/* Main content */}
	
          <main>{children}</main>
        </LenisProvider>
		 <Analytics />
      </body>
    </html>
  );
}
