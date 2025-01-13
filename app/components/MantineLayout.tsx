"use client";

import { generateColors } from "@mantine/colors-generator";
import { MantineProvider } from "@mantine/core";
// import { Nunito_Sans } from "next/font/google";

// const nunitoSans = Nunito_Sans({
//   weight: ["400", "700", "800"],
//   variable: "--font-nunito-sans",
//   subsets: ["latin"],
// });

export default function MantineLayout({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={{
        // fontFamily: nunitoSans.style.fontFamily,
        // fontFamilyMonospace: "Monaco, Courier, monospace",
        // headings: {
        //   fontFamily: `${nunitoSans.style.fontFamily}`,
        // },
        // components: {
        //   Text: {
        //     styles: () => ({
        //       root: {
        //         fontFamily: nunitoSans.style.fontFamily,
        //       },
        //     }),
        //   },
        //   Button: {
        //     styles: () => ({
        //       root: {
        //         fontFamily: nunitoSans.style.fontFamily,
        //       },
        //     }),
        //   },
        // },

        colors: {
          primary: generateColors("#3A11D5"),
          secondary: generateColors("#398fb8"),
        },
      }}
    >
      {children}
    </MantineProvider>
  );
}
