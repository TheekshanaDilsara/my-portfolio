"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const linkClass = (path) =>
        pathname === path
            ? "text-orange-500 font-semibold"
            : "text-white hover:text-orange-400";

    return (
        <nav className="w-full bg-gray-950 text-white py-4 px-10 flex gap-8 text-lg">
            <Link href="/" className={linkClass("/")}>
                Home
            </Link>
            <Link href="/about" className={linkClass("/about")}>
                About
            </Link>
            <Link href="/projects" className={linkClass("/projects")}>
                Projects
            </Link>
            <Link href="/contact" className={linkClass("/contact")}>
                Contact
            </Link>
        </nav>
    );
}
