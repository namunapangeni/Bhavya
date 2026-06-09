import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { DIPLOMA_COURSES, INSTITUTE } from '@/data/content';
import Logo from './Logo';
import CourseCard from './CourseCard';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-bg">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06]"
        aria-hidden
      >
        <Logo className="h-[28rem] w-auto max-w-none" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mb-8 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
          <Link to="/" className="shrink-0">
            <Logo className="h-36 w-auto sm:h-44" />
          </Link>
          <div className="text-center sm:text-right">
            <p className="text-sm font-medium tracking-wide text-brand-accent">Mob.</p>
            <a
              href={`tel:${INSTITUTE.phone}`}
              className="text-xl font-bold text-brand-secondary transition hover:text-brand-accent sm:text-2xl"
            >
              {INSTITUTE.phone}
            </a>
          </div>
        </div>

        <p className="mb-2 text-center text-sm font-bold uppercase tracking-[0.2em] text-brand-accent sm:text-base">
          {INSTITUTE.fullName}
        </p>

        <div className="mb-10 flex items-center justify-center gap-2 text-center">
          <MapPin className="h-5 w-5 shrink-0 text-brand-accent" />
          <p className="text-base font-semibold text-brand-secondary sm:text-lg">
            {INSTITUTE.address}
          </p>
        </div>

        <h1 className="mb-8 text-center text-2xl font-black uppercase tracking-wide text-brand-secondary sm:text-3xl">
          FASHION DESIGN DIPLOMA COURSE
        </h1>

        <ul className="mx-auto max-w-2xl space-y-4">
          {DIPLOMA_COURSES.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </ul>

        <p className="mt-10 text-center text-lg font-black uppercase tracking-wide text-brand-secondary sm:text-xl">
          CTEVT NSTB LEVEL 1,2 TRAINING
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/courses"
            className="rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primary/90"
          >
            View Full Curriculum
          </Link>
          <Link
            to="/admission"
            className="rounded-md border-2 border-brand-accent px-6 py-3 text-sm font-semibold text-brand-accent transition hover:bg-brand-accent hover:text-white"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </section>
  );
}
