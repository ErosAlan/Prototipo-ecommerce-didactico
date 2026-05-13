function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          eTechStore
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
          Your next technology upgrade starts here.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Discover laptops, accessories, components, and smart devices selected
          for creators, gamers, students, and professionals.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#products"
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Explore products
          </a>

          <a
            href="#about"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Learn more
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;