import { MapPin, Phone, Clock } from 'lucide-react';
import Logo from '@/components/Logo';
import { INSTITUTE } from '@/data/content';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-10 flex flex-col items-center">
        <Logo className="mb-6 h-32 w-auto sm:h-36" />
        <h1 className="text-3xl font-black uppercase text-brand-secondary sm:text-4xl">Contact</h1>
        <p className="nepali mt-2 text-lg font-semibold text-brand-primary">सम्पर्क</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-brand-accent/20 bg-white p-6 shadow-sm">
          <MapPin className="mb-3 h-8 w-8 text-brand-accent" />
          <h2 className="font-bold text-brand-secondary">Address</h2>
          <p className="mt-2 text-brand-secondary/90">{INSTITUTE.address}</p>
          <p className="text-sm text-brand-secondary/60">Nepal</p>
        </div>

        <div className="rounded-lg border border-brand-primary/20 bg-white p-6 shadow-sm">
          <Phone className="mb-3 h-8 w-8 text-brand-primary" />
          <h2 className="font-bold text-brand-secondary">Phone</h2>
          <p className="mt-2">
            PH:{' '}
            <a
              href={`tel:${INSTITUTE.phone}`}
              className="text-lg font-bold text-brand-secondary hover:text-brand-accent"
            >
              {INSTITUTE.phone}
            </a>
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-lg border border-brand-accent/15 bg-brand-bg-alt p-6">
        <Clock className="mb-3 h-8 w-8 text-brand-gold" />
        <h2 className="font-bold text-brand-secondary">Visit Us</h2>
        <p className="mt-2 text-brand-secondary/90">{INSTITUTE.boutiqueName}</p>
        <p className="nepali mt-4 text-sm leading-relaxed text-brand-secondary/80">
          {INSTITUTE.footerNepali}
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-lg border border-brand-accent/20">
        <iframe
          title="Bhavya Fashion location map"
          src="https://maps.google.com/maps?q=Butwal-9,+Ittabhatti,+Rupandehi,+Nepal&output=embed"
          className="h-64 w-full border-0 sm:h-80"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="mt-8 text-center">
        <a
          href={`tel:${INSTITUTE.phone}`}
          className="inline-flex items-center gap-2 rounded-md bg-brand-accent px-8 py-3 text-base font-bold text-white transition hover:bg-brand-accent/90"
        >
          <Phone className="h-5 w-5" />
          Call Now — {INSTITUTE.phone}
        </a>
      </div>
    </div>
  );
}
