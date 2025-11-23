// Remove Poppins and Figtree imports if you are replacing them
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// 1. Configure the Plus Jakarta Sans font
const plusJakartaSans = Plus_Jakarta_Sans({
  // Specify a range of weights to load (e.g., Light, Regular, SemiBold, Bold)
  weight: ["300", "400", "600", "700"], 
  subsets: ["latin"],
  // Give it a custom CSS variable name
  variable: "--font-plus-jakarta-sans", 
  display: "swap", 
});

export const metadata = {
  title: "Vortexcubes",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // 2. Apply the Plus Jakarta Sans variable to the body
        className={`${plusJakartaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}