import logoSrc from '@/assets/logo/bhavya-logo-no-background.png';

type LogoProps = {
  className?: string;
};

export default function Logo({ className = 'h-16 w-auto' }: LogoProps) {
  return (
    <img
      src={logoSrc}
      alt="Bhavya Fashion Boutique and Training Center — PH: 9847026960"
      className={`object-contain ${className}`}
      width={320}
      height={320}
      decoding="async"
    />
  );
}
