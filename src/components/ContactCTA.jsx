import { Mail, Phone, Clock } from 'lucide-react';
import { useState } from 'react';

function ContactCTA() {
  const [formData, setFormData] = useState({ nome: '', telefono: '', email: '', messaggio: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contatti" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold sm:text-4xl">Parla con un avvocato oggi stesso</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Valutazione gratuita del caso e prime indicazioni operative entro 24 ore lavorative.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          {sent ? (
            <div className="py-8 text-center">
              <p className="text-lg font-semibold">Grazie! La tua richiesta è stata inviata.</p>
              <p className="mt-2 text-white/70">Ti contatteremo al più presto per una prima valutazione gratuita.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nome" className="mb-1 block text-sm">Nome e cognome</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none ring-0 transition focus:border-emerald-400/60"
                  placeholder="Mario Rossi"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="telefono" className="mb-1 block text-sm">Telefono</label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none transition focus:border-emerald-400/60"
                    placeholder="333 1234567"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none transition focus:border-emerald-400/60"
                    placeholder="mario.rossi@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="messaggio" className="mb-1 block text-sm">Raccontaci brevemente l’accaduto</label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  rows={4}
                  value={formData.messaggio}
                  onChange={handleChange}
                  className="w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none transition focus:border-emerald-400/60"
                  placeholder="Data, dinamica, eventuali testimoni o verbali"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                Invia richiesta gratuita
              </button>
              <p className="text-xs text-white/60">Compilando il form acconsenti al trattamento dei dati ai sensi del Reg. UE 679/2016.</p>
            </form>
          )}
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold">Contatti diretti</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="rounded-md bg-white/10 p-2"><Phone className="h-4 w-4" /></div>
                <a href="tel:+390000000000" className="text-white/80 hover:text-white">+39 000 000 0000</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="rounded-md bg-white/10 p-2"><Mail className="h-4 w-4" /></div>
                <a href="mailto:info@studiolegale.it" className="text-white/80 hover:text-white">info@studiolegale.it</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="rounded-md bg-white/10 p-2"><Clock className="h-4 w-4" /></div>
                <span className="text-white/80">Lun–Ven 9:00–19:00</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-6 ring-1 ring-emerald-400/30">
            <h4 className="text-lg font-semibold text-emerald-200">Perché scegliere noi</h4>
            <ul className="mt-3 space-y-2 text-sm text-emerald-100">
              <li>• Approccio specializzato sui sinistri stradali</li>
              <li>• Rete di periti e medici legali qualificati</li>
              <li>• Anticipiamo noi i costi della pratica</li>
              <li>• Focus su massimizzazione del risarcimento</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
