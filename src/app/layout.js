import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Theekshana Dilsara Portfolio",
  description: "My personal developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
