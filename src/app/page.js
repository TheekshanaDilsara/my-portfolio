export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-black text-white flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold">Hi, I'm <span className="text-cyan-400">Theek Dil</span></h1>
      <p className="mt-4 text-lg text-gray-300 max-w-xl">
        IT Undergraduate | Software Developer | Data Enthusiast
      </p>

      <a
        href="/projects"
        className="mt-8 bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300"
      >
        View My Work
      </a>
    </main>
  );
}
