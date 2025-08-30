import { Car, ShieldCheck, Scale, Clock } from 'lucide-react';

function ServiceCard({ icon: Icon, title, desc, points }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.08]">
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-emerald-500/20 p-3 ring-1 ring-emerald-400/30">
          <Icon className="h-6 w-6 text-emerald-300" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{desc}</p>
        </div>
      </div>
      {points?.length ? (
        <ul className="mt-4 space-y-2 text-sm text-white/80">
          {points.map((p, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function Services() {
  return (
    <section id="servizi" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold sm:text-4xl">Assistenza completa per il tuo risarcimento</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Dalla ricostruzione del sinistro alla liquidazione del danno: lo studio segue ogni fase con trasparenza e tempestività.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ServiceCard
          icon={Car}
          title="Gestione sinistro dalla A alla Z"
          desc="Raccolta documentale, apertura del sinistro e contatto con periti e assicurazioni."
          points={[
            'Assistenza in caso di incidente con auto, moto, bici o pedoni',
            'Supporto per CID e verbali delle Forze dell’Ordine',
            'Auto sostitutiva quando prevista'
          ]}
        />
        <ServiceCard
          icon={ShieldCheck}
          title="Nessun anticipo, compenso a risultato"
          desc="I nostri onorari sono riconosciuti dall’assicurazione o trattenuti solo in caso di esito positivo."
          points={[
            'Trasparenza sui tempi e sulle fasi della pratica',
            'Zero spese vive iniziali per il cliente',
            'Strategia calibrata sul caso specifico'
          ]}
        />
        <ServiceCard
          icon={Scale}
          title="Tutela legale e medico-legale"
          desc="Collaboriamo con medici legali e tecnici ricostruttori per stimare correttamente il danno."
          points={[
            'Danni materiali e biologici (temporanei e permanenti)',
            'Perizie tecniche e ricostruzione della dinamica',
            'Trattativa e, se necessario, azione giudiziale'
          ]}
        />
        <ServiceCard
          icon={Clock}
          title="Tempistiche rapide e aggiornamenti costanti"
          desc="Canali diretti con il tuo referente e report sull’avanzamento della pratica."
          points={[
            'Canali WhatsApp, email e telefono',
            'Scadenziario e solleciti automatici alle controparti',
            'Obiettivo: massimizzare il risarcimento, ridurre i tempi'
          ]}
        />
      </div>
    </section>
  );
}

export default Services;
