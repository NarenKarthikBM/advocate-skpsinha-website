import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";

import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import { Header } from "./components/Header";
import MantineLayout from "./components/MantineLayout";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Advocate Sachchida Nand Kishore Prasad Sinha | Lawyer in Jigani, Bangalore",
  description:
    "Advocate Sachchida Nand Kishore Prasad Sinha has been practicing and handling cases independently with a result oriented approach, both professionally and ethically and has now acquired many years of professional experience in providing legal consultancy and advisory services",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineLayout>
          <Header />
          {children}
          <Footer />
        </MantineLayout>
      </body>
    </html>
  );
}
