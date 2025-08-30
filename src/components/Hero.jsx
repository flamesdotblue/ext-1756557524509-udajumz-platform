import Spline from '@splinetool/react-spline';

function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 py-24">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wider text-white/80 ring-1 ring-white/20 backdrop-blur">
            Studio Legale | Sinistri Stradali
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Risarcimenti per incidenti stradali, senza anticipi.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Tutela completa per conducenti, passeggeri, pedoni e ciclisti. Team dedicato, perizie tecniche e trattativa con le assicurazioni: ci occupiamo di tutto noi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => handleScrollTo('contatti')}
              className="rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              Consulenza gratuita
            </button>
            <button
              onClick={() => handleScrollTo('servizi')}
              className="rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Scopri i nostri servizi
            </button>
          </div>
          <p className="mt-4 text-xs text-white/60">Compenso a esito: lo studio trattiene gli onorari solo in caso di risultato positivo.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
