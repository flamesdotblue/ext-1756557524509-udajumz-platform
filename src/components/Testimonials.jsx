import { Star, User } from 'lucide-react';

const testimonials = [
  {
    name: 'Giulia R.',
    text:
      'Dopo un tamponamento con colpo di frusta non sapevo da dove iniziare. Hanno gestito tutto loro: visita medico-legale, pratica con assicurazione e risarcimento superiore alle aspettative.',
  },
  {
    name: 'Marco B.',
    text:
      'Professionali e veloci. Nessun anticipo richiesto e comunicazioni sempre chiare. Consigliatissimi per chi ha avuto un incidente in moto.',
  },
  {
    name: 'Elena P.',
    text:
      'Mi hanno seguito con grande attenzione dopo un investimento sulle strisce. Ho ottenuto un equo risarcimento in pochi mesi.',
  },
];

function Rating() {
  return (
    <div className="flex items-center gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function TestimonialCard({ name, text }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <Rating />
      <p className="mt-3 text-sm text-white/80">“{text}”</p>
      <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
          <User className="h-4 w-4" />
        </div>
        <span className="font-medium">{name}</span>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="relative border-y border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Dicono di noi</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Esperienza reale, risultati concreti: ecco alcune testimonianze di chi si è affidato al nostro studio.
            </p>
          </div>
          <div className="text-sm text-white/60">Valutazione media 5.0</div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} name={t.name} text={t.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
