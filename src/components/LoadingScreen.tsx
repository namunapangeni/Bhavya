import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-bg animate-fade-in"
      aria-hidden={!visible}
    >
      <Logo className="h-40 w-auto sm:h-52" />
    </div>
  );
}
