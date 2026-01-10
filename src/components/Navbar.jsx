import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full bg-gray-950 text-white py-4 px-10 flex gap-8 text-lg">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    );
}
