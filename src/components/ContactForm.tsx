import { useState } from 'react';
import type { FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { INSTITUTE } from '@/data/content';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot — bots fill this; humans leave it empty
    if (formData.get('_honey')) {
      setStatus('success');
      form.reset();
      return;
    }

    const visitorEmail = String(formData.get('email') ?? '');

    const payload = {
      name: formData.get('name'),
      email: visitorEmail,
      phone: formData.get('phone') || 'Not provided',
      message: formData.get('message'),
      _subject: 'New query — Bhavya Fashion website',
      _replyto: visitorEmail,
      _template: 'table',
      _captcha: 'false',
    };

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${INSTITUTE.email}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        },
      );

      const result = (await response.json()) as {
        success?: string | boolean;
        message?: string;
      };

      const ok =
        response.ok &&
        (result.success === true || result.success === 'true');

      if (!ok) {
        throw new Error(result.message ?? 'Failed to send message');
      }

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      const detail =
        err instanceof Error ? err.message : 'Failed to send message';
      setErrorMessage(
        `${detail} Please try again or email us at ${INSTITUTE.email}.`,
      );
    }
  }

  return (
    <div className="rounded-lg border border-brand-primary/20 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-bold text-brand-secondary">Send a Query</h2>
      <p className="mt-1 text-sm text-brand-secondary/70">
        Fill in the form below and we&apos;ll get back to you at{' '}
        <a
          href={`mailto:${INSTITUTE.email}`}
          className="font-medium text-brand-primary hover:underline"
        >
          {INSTITUTE.email}
        </a>
      </p>

      {status === 'success' ? (
        <div className="mt-6 flex items-start gap-3 rounded-md bg-brand-primary/10 p-4 text-brand-secondary">
          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
          <div>
            <p className="font-semibold">Message sent successfully!</p>
            <p className="mt-1 text-sm text-brand-secondary/80">
              Thank you for reaching out. We will reply to your email soon.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-3 text-sm font-medium text-brand-primary hover:underline"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative mt-6 space-y-4">
          {/* Honeypot — hidden from users, catches bots */}
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
            aria-hidden
          />

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-secondary">
              Name <span className="text-brand-accent">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="mt-1 w-full rounded-md border border-brand-accent/25 bg-brand-bg px-3 py-2.5 text-sm text-brand-secondary outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-secondary">
              Email <span className="text-brand-accent">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1 w-full rounded-md border border-brand-accent/25 bg-brand-bg px-3 py-2.5 text-sm text-brand-secondary outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-brand-secondary">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className="mt-1 w-full rounded-md border border-brand-accent/25 bg-brand-bg px-3 py-2.5 text-sm text-brand-secondary outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-brand-secondary">
              Message <span className="text-brand-accent">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-1 w-full resize-y rounded-md border border-brand-accent/25 bg-brand-bg px-3 py-2.5 text-sm text-brand-secondary outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
              placeholder="Your question or enquiry..."
            />
          </div>

          {status === 'error' && (
            <div className="flex items-start gap-2 rounded-md bg-red-50 p-3 text-sm text-red-700">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primary/90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            <Send className="h-4 w-4" />
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}
