import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CinematicBackground from "../components/CinematicBackground";

export const metadata = {
  title: "Theekshana Dilsara Sugathnath | Data Science & Software Engineering",
  description:
    "Official developer portfolio of Theekshana Dilsara Sugathnath — IT undergraduate at SLIIT specializing in Data Science, Machine Learning, Power BI, and Full-Stack Software Engineering.",
  keywords: [
    "Theekshana Dilsara",
    "Theekshana Dilsara Sugathnath",
    "Data Science",
    "SLIIT",
    "Machine Learning",
    "Power BI",
    "Python",
    "Software Engineer",
    "Sri Lanka",
    "Developer Portfolio",
  ],
  authors: [{ name: "Theekshana Dilsara Sugathnath" }],
  creator: "Theekshana Dilsara Sugathnath",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Theekshana Dilsara Sugathnath | Portfolio",
    description: "Data Science, Machine Learning & Software Engineering Portfolio",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#07080a] text-[#f3f4f6] min-h-screen flex flex-col selection:bg-orange-500/30 selection:text-white antialiased relative">
        <CinematicBackground />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
