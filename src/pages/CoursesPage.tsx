import CurriculumSection from '@/components/CurriculumSection';
import { DraftCurriculumList } from '@/components/DraftList';
import {
  DRAFT_AND_LAYOUT,
  GENERAL_TOPICS,
  SKETCHING,
  SKETCHING_BASIC_GROUPS,
  SKETCHING_OTHER,
} from '@/data/content';

function SketchingSection() {
  return (
    <section className="border-t border-brand-accent/15 bg-brand-bg py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="mb-2 text-center text-2xl font-black uppercase tracking-wide underline decoration-brand-secondary decoration-2 underline-offset-4 sm:text-3xl">
          {SKETCHING.title}
        </h2>
        <hr className="mx-auto mb-8 w-full border-gray-300" />

        <ol className="list-none space-y-4 text-sm sm:text-base">
          <li>
            <span className="font-medium">1) Basic File</span>
            <div className="ml-6 mt-2 space-y-3 sm:ml-10">
              <div>
                <p className="font-medium">I)</p>
                <ol className="ml-6 mt-1 list-[lower-alpha] space-y-0.5 sm:ml-8">
                  {SKETCHING_BASIC_GROUPS[0].items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
              <div>
                <p className="font-medium">II)</p>
                <ol className="ml-6 mt-1 list-[lower-alpha] space-y-0.5 sm:ml-8">
                  {SKETCHING_BASIC_GROUPS[1].items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          </li>
          {SKETCHING_OTHER.map((label, i) => (
            <li key={label}>
              <span className="font-medium">
                {i + 2}) {label}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function DraftSection() {
  return (
    <section className="border-t border-brand-accent/15 bg-brand-bg-alt py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="mb-2 text-center text-xl font-black uppercase tracking-wide sm:text-2xl">
          DRAFT AND LAYOUT + CUTTING AND STITCHING
        </h2>
        <p className="nepali mb-8 text-center text-base font-semibold text-gray-700 sm:text-lg">
          ड्राफ्ट र लेआउट + कटिङ्ग र स्टिचिङ्ग
        </p>

        <DraftCurriculumList items={DRAFT_AND_LAYOUT} />

        <div className="mt-10 border-t border-gray-300 pt-8">
          <ul className="grid gap-2 text-sm sm:grid-cols-2 sm:text-base">
            {GENERAL_TOPICS.map((topic) => (
              <li key={topic} className="font-medium text-gray-900">
                * {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function CoursesPage() {
  return (
    <>
      <div className="border-b border-brand-accent/15 bg-brand-bg py-10 text-center sm:py-12">
        <h1 className="text-3xl font-black uppercase text-black sm:text-4xl">
          Courses / Programs
        </h1>
        <p className="nepali mt-2 text-lg font-semibold text-brand-primary">
          पाठ्यक्रम (CURRICULUM)
        </p>
      </div>

      <CurriculumSection />
      <DraftSection />
      <SketchingSection />
    </>
  );
}
