import { Link, NavLink } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { INSTITUTE, NAV_LINKS } from '@/data/content';
import Logo from './Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-accent/20 bg-brand-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <Link to="/" className="shrink-0 py-1" onClick={() => setOpen(false)}>
          <Logo className="h-14 w-auto sm:h-16" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-primary/10 text-brand-primary'
                    : 'text-brand-secondary/80 hover:bg-brand-bg-alt hover:text-brand-primary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <a
          href={`tel:${INSTITUTE.phone}`}
          className="hidden items-center gap-2 rounded-full bg-brand-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-accent/90 lg:flex"
        >
          <Phone className="h-4 w-4" />
          {INSTITUTE.phone}
        </a>

        <button
          type="button"
          className="rounded-md p-2 text-brand-secondary hover:bg-brand-bg-alt lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-brand-accent/20 bg-brand-bg px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2.5 text-sm font-medium ${
                    isActive
                      ? 'bg-brand-primary/10 text-brand-primary'
                      : 'text-brand-secondary/80'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href={`tel:${INSTITUTE.phone}`}
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-brand-accent px-3 py-2.5 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              Mob. {INSTITUTE.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
