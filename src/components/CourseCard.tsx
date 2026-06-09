import { CheckSquare } from 'lucide-react';

type CourseCardProps = {
  title: string;
  description: string;
  variant?: 'list' | 'card';
};

export default function CourseCard({ title, description, variant = 'list' }: CourseCardProps) {
  if (variant === 'card') {
    return (
      <article className="rounded-lg border border-brand-accent/20 bg-white p-4 shadow-sm transition hover:border-brand-primary/30 hover:shadow-md">
        <h3 className="font-bold text-brand-secondary">{title}</h3>
        <p className="mt-1 text-sm text-brand-secondary/80">{description}</p>
      </article>
    );
  }

  return (
    <li className="flex gap-3">
      <CheckSquare
        className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary"
        strokeWidth={2}
      />
      <p className="text-sm leading-relaxed text-brand-secondary sm:text-base">
        <span className="font-bold">{title}</span>
        {' – '}
        {description}
      </p>
    </li>
  );
}
