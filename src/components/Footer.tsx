import { Link } from 'react-router-dom';
import { INSTITUTE } from '@/data/content';
import Logo from './Logo';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="border-t border-brand-primary/20 bg-brand-secondary px-4 py-8 text-center sm:px-6">
        <Logo className="mx-auto mb-4 h-28 w-auto sm:h-32" />
        <SocialLinks
          className="mx-auto mb-4 text-white hover:text-brand-gold"
          iconClassName="h-7 w-7"
          showLabel
        />
        <p className="text-xs text-white/70 sm:text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-white">{INSTITUTE.boutiqueName}</span>
          {' · '}
          {INSTITUTE.addressShort}
          {' · '}
          <a href={`tel:${INSTITUTE.phone}`} className="text-brand-gold hover:underline">
            PH: {INSTITUTE.phone}
          </a>
        </p>
        <p className="mt-2 text-xs text-white/60 sm:text-sm">
          <Link to="/courses" className="hover:text-brand-gold">
            Courses
          </Link>
          {' · '}
          <Link to="/contact" className="hover:text-brand-gold">
            Contact
          </Link>
          {' · '}
          <Link to="/admission" className="hover:text-brand-gold">
            Admission
          </Link>
        </p>
        <p className="mt-4 text-xs text-white/40">
          Developed by{' '}
          <a
            href="https://www.namunapangeni.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 transition hover:text-brand-gold hover:underline"
          >
            Namuna Pangeni
          </a>
        </p>
      </div>
    </footer>
  );
}
