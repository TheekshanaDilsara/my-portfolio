import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CinematicBackground from "../components/CinematicBackground";
import { ThemeProvider } from "../context/ThemeContext";

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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  var theme = saved || 'dark';
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                    document.documentElement.setAttribute('data-theme', 'light');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[#f8fafc] text-slate-900 dark:bg-[#07080a] dark:text-[#f3f4f6] min-h-screen flex flex-col selection:bg-orange-500/30 selection:text-white antialiased relative transition-colors duration-300">
        <ThemeProvider>
          <CinematicBackground />
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

