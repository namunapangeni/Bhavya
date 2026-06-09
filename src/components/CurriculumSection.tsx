import { CURRICULUM } from '@/data/content';
import SectionBar from './SectionBar';
import Logo from './Logo';

export default function CurriculumSection() {
  return (
    <section className="bg-brand-bg py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:items-center">
          <Logo className="h-28 w-auto shrink-0 sm:h-32" />
          <div className="text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl">
              <span className="nepali font-bold text-brand-primary">भाव्या</span>{' '}
              <span className="font-fashion text-4xl text-brand-primary sm:text-5xl">
                Fashion
              </span>
            </h2>
            <p className="mt-1 text-sm font-bold uppercase tracking-[0.15em] text-brand-accent sm:text-base">
              BOUTIQUE & TRAINING CENTER
            </p>
            <p className="nepali mt-3 text-lg font-semibold text-brand-primary sm:text-xl">
              पाठ्यक्रम (CURRICULUM)
            </p>
          </div>
        </div>

        <SectionBar className="mb-6">{CURRICULUM.fashionDesign.title}</SectionBar>

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          {CURRICULUM.fashionDesign.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="nepali mb-4 text-base font-bold text-brand-secondary sm:text-lg">
                {col.heading}
              </h3>
              <ul className="space-y-1.5">
                {col.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-brand-secondary/90 sm:text-base">
                    <span className="text-brand-primary">*</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {CURRICULUM.tailoring.columns.map((col) => (
            <div key={col.heading}>
              <SectionBar className="nepali mb-4 text-left sm:text-center">
                {col.heading}
              </SectionBar>
              <ul className="space-y-1">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="nepali flex gap-2 text-sm text-brand-secondary/90 sm:text-base"
                  >
                    <span className="text-brand-accent">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {CURRICULUM.additional.map((item) => (
            <SectionBar key={item} className="nepali">
              {item}
            </SectionBar>
          ))}
        </div>
      </div>
    </section>
  );
}
