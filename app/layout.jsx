// // Remove Poppins and Figtree imports if you are replacing them
// import { Plus_Jakarta_Sans } from "next/font/google";
// import "./globals.css";

// // 1. Configure the Plus Jakarta Sans font
// const plusJakartaSans = Plus_Jakarta_Sans({
//   // Specify a range of weights to load (e.g., Light, Regular, SemiBold, Bold)
//   weight: ["300", "400", "600", "700"], 
//   subsets: ["latin"],
//   // Give it a custom CSS variable name
//   variable: "--font-plus-jakarta-sans", 
//   display: "swap", 
// });

// export const metadata = {
//   title: "Vortexcubes",
//   description: "",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         // 2. Apply the Plus Jakarta Sans variable to the body
//         className={`${plusJakartaSans.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import WhatsAppButton from "./components/WhatsAppButton";

// Google Font
const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata = {
  title: "VortexCubes | IT & Software Development Company",
  description: "VortexCubes is an IT & software development company offering cloud DevOps, UI/UX design, digital marketing, and AI integration services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ⭐ Google Tag Manager (HEAD) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P3HDGKDG');
          `}
        </Script>
      </head>

      <body className={`${plusJakartaSans.variable} antialiased`}>
        
        {/* ⭐ Google Tag Manager (BODY – noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P3HDGKDG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
