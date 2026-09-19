import { Arimo, Nunito, Poppins } from "next/font/google";
import "./globals.css";

const outfit = Nunito({
  subsets: ["sans"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Arimo({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-ovo",
});

const pop = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-pop",
});

export const metadata = {
  title: "Reuni Akbar",
  description: "UNBAR-ATP-UICM",
  icons: {
    icon: "/icon.jpeg", // Mengarah ke public/icon.jpg
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" className="scroll-smooth"

    >
      <body className={`${outfit.variable} ${ovo.variable} ${pop.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
