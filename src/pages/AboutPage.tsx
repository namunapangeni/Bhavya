import Logo from '@/components/Logo';
import { INSTITUTE } from '@/data/content';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-10 flex flex-col items-center text-center">
        <Logo className="mb-6 h-40 w-auto sm:h-48" />
        <h1 className="text-3xl font-black uppercase text-brand-secondary sm:text-4xl">
          About the Institute
        </h1>
        <p className="mt-2 text-lg font-bold text-brand-accent">{INSTITUTE.name}</p>
      </div>

      <div className="space-y-8 text-brand-secondary/90">
        <section>
          <h2 className="mb-3 text-xl font-bold text-brand-secondary">
            {INSTITUTE.boutiqueName}
          </h2>
          <p className="leading-relaxed">
            {INSTITUTE.boutiqueName} is a premier fashion design training centre and boutique
            located at {INSTITUTE.address}, Nepal. We offer comprehensive programs in fashion
            design, tailoring, sketching, embroidery, and boutique management.
          </p>
        </section>

        <section className="rounded-lg border border-brand-accent/20 bg-white p-6">
          <h2 className="mb-4 text-lg font-bold text-brand-secondary">Our Mission</h2>
          <p className="nepali leading-relaxed">{INSTITUTE.footerNepali}</p>
        </section>

        <section>
          <h2 className="mb-4 text-lg font-bold text-brand-secondary">What We Offer</h2>
          <ul className="list-inside list-disc space-y-2 text-sm sm:text-base">
            <li>FASHION DESIGN DIPLOMA COURSE</li>
            <li>CTEVT NSTB LEVEL 1,2 TRAINING</li>
            <li>३ महिने फेसन डिजाईंन / १५ महिने एडभान्स फेसन डिजाईंन</li>
            <li>३ महिने बेसिक टेलरिङ्ग / ६ महिने बेसिक टेलरिङ्ग</li>
            <li>हाते कढाई ३ महिने</li>
            <li>बेसिक ब्युटी पार्लर (छोटो अवधी)</li>
            <li>DRAFT AND LAYOUT + CUTTING AND STITCHING</li>
            <li>SKETCHING</li>
          </ul>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-brand-primary/25 bg-brand-primary/5 p-5">
            <h3 className="font-bold text-brand-primary">Location</h3>
            <p className="mt-2">{INSTITUTE.address}</p>
            <p className="text-sm text-brand-secondary/70">{INSTITUTE.addressShort}, Nepal</p>
          </div>
          <div className="rounded-lg border border-brand-accent/25 bg-brand-accent/5 p-5">
            <h3 className="font-bold text-brand-accent">Contact</h3>
            <p className="mt-2">
              PH:{' '}
              <a href={`tel:${INSTITUTE.phone}`} className="font-semibold hover:underline">
                {INSTITUTE.phone}
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
