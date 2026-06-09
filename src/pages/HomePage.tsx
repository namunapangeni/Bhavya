import Hero from '@/components/Hero';
import CurriculumSection from '@/components/CurriculumSection';
import { Link } from 'react-router-dom';
import { GraduationCap, Scissors, Palette } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-t border-brand-accent/15 bg-brand-bg-alt py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-brand-secondary sm:text-3xl">
            Why Choose Bhavya Fashion?
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-brand-primary/15 bg-white p-6 text-center shadow-sm">
              <GraduationCap className="mx-auto mb-3 h-10 w-10 text-brand-primary" />
              <h3 className="font-bold text-brand-secondary">CTEVT NSTB Level 1,2 Training</h3>
              <p className="mt-2 text-sm text-brand-secondary/75">
                Recognized vocational training in fashion design and tailoring.
              </p>
            </div>
            <div className="rounded-lg border border-brand-accent/15 bg-white p-6 text-center shadow-sm">
              <Scissors className="mx-auto mb-3 h-10 w-10 text-brand-accent" />
              <h3 className="font-bold text-brand-secondary">Hands-On Tailoring</h3>
              <p className="mt-2 text-sm text-brand-secondary/75">
                From basic to advanced garment construction and boutique skills.
              </p>
            </div>
            <div className="rounded-lg border border-brand-gold/25 bg-white p-6 text-center shadow-sm">
              <Palette className="mx-auto mb-3 h-10 w-10 text-brand-gold" />
              <h3 className="font-bold text-brand-secondary">Fashion Design Programs</h3>
              <p className="mt-2 text-sm text-brand-secondary/75">
                3-month to 15-month courses in illustration, drafting, and design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CurriculumSection />

      <section className="bg-brand-primary py-10 text-center text-white sm:py-12">
        <div className="mx-auto max-w-2xl px-4">
          <p className="nepali text-lg font-semibold sm:text-xl">
            विवाह, पास्नी, पार्टी वेर र अर्डर अनुसार ड्रेस — हामी तयार गर्छौं।
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-md bg-brand-bg px-6 py-3 text-sm font-bold text-brand-primary transition hover:bg-brand-bg-alt"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
