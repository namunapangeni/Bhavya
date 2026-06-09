type SectionBarProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionBar({ children, className = '' }: SectionBarProps) {
  return (
    <div
      className={`bg-brand-secondary px-4 py-2.5 text-center text-sm font-semibold text-white sm:text-base ${className}`}
    >
      {children}
    </div>
  );
}
