import localFont from "next/font/local";

export const localBebasNeue = localFont({
  src: [
    { path: "../public/assets/fonts/bebas-neue/BebasNeue Bold.otf", weight: "700" },
    { path: "../public/assets/fonts/bebas-neue/BebasNeue Light.otf", weight: "300" },
    { path: "../public/assets/fonts/bebas-neue/BebasNeue Regular.otf", weight: "400" },
    { path: "../public/assets/fonts/bebas-neue/BebasNeue Thin.otf", weight: "100" },
  ],
  variable: "--font-bebas-neue",
  display: "swap",
});

export const localManrope = localFont({
  src: [
    { path: "../public/assets/fonts/manrope/manrope-light.otf", weight: "300" },
    { path: "../public/assets/fonts/manrope/manrope-regular.otf", weight: "400" },
    { path: "../public/assets/fonts/manrope/manrope-medium.otf", weight: "500" },
    { path: "../public/assets/fonts/manrope/manrope-semibold.otf", weight: "600" },
    { path: "../public/assets/fonts/manrope/manrope-bold.otf", weight: "700" },
    { path: "../public/assets/fonts/manrope/manrope-thin.otf", weight: "100" },
  ],
  variable: "--font-manrope",
  display: "swap",
});