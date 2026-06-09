import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle } from 'lucide-react';
import CourseCard from '@/components/CourseCard';
import { CURRICULUM, DIPLOMA_COURSES, INSTITUTE } from '@/data/content';

const PROGRAMS = [
  'FASHION DESIGN DIPLOMA COURSE',
  'CTEVT NSTB LEVEL 1,2 TRAINING',
  ...CURRICULUM.fashionDesign.columns.map((c) => c.heading),
  ...CURRICULUM.tailoring.columns.map((c) => c.heading),
  ...CURRICULUM.additional,
  'DRAFT AND LAYOUT + CUTTING AND STITCHING',
  'SKETCHING',
];

export default function AdmissionPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="mb-2 text-center text-3xl font-black uppercase text-brand-secondary sm:text-4xl">
        Admission / Enrollment
      </h1>
      <p className="nepali mb-10 text-center text-lg font-semibold text-brand-primary">
        भर्ना / Enrollment
      </p>

      <div className="mb-10 rounded-lg border border-brand-accent/20 bg-white p-6 sm:p-8">
        <h2 className="mb-4 text-xl font-bold text-brand-secondary">Available Programs</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {PROGRAMS.map((program) => (
            <li key={program} className="flex items-start gap-2 text-sm sm:text-base">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-primary" />
              <span className="nepali">{program}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-brand-secondary">FASHION DESIGN DIPLOMA COURSE</h2>
        <ul className="space-y-3">
          {DIPLOMA_COURSES.map((course) => (
            <CourseCard key={course.title} {...course} variant="card" />
          ))}
        </ul>
      </div>

      <div className="rounded-lg bg-brand-secondary p-6 text-white sm:p-8">
        <h2 className="mb-4 text-xl font-bold">How to Enroll</h2>
        <ol className="list-inside list-decimal space-y-2 text-sm sm:text-base">
          <li>Visit us at {INSTITUTE.address}</li>
          <li>Call PH: {INSTITUTE.phone} for course details and batch timings</li>
          <li>Choose your program from the curriculum list</li>
          <li>Complete registration at the institute</li>
        </ol>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={`tel:${INSTITUTE.phone}`}
            className="inline-flex items-center gap-2 rounded-md bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-accent/90"
          >
            <Phone className="h-4 w-4" />
            Call {INSTITUTE.phone}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-2.5 text-sm font-semibold hover:bg-white/10"
          >
            <MapPin className="h-4 w-4" />
            Get Directions
          </Link>
        </div>
      </div>
    </div>
  );
}
