import { useState } from 'react';
import './PartnerContactSection.css';

const FORMSPREE_URL = 'https://formspree.io/f/xpqolpzp';

export default function PartnerContactSection() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [fields, setFields] = useState({ name: '', organisation: '', email: '' });

  function handleChange(e) {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus('success');
        setFields({ name: '', organisation: '', email: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className={`partner-contact${open ? ' partner-contact--open' : ''}`}>
      {/* Collapsed bar */}
      <button
        className="partner-contact__bar"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="partner-contact__bar-text">
          {open ? 'Close' : 'Interested in partnering? Get in touch →'}
        </span>
        {open && <span className="partner-contact__bar-icon">✕</span>}
      </button>

      {/* Expanded form */}
      <div className="partner-contact__form-wrap">
        <div className="partner-contact__form-inner">

          {status === 'success' ? (
            <div className="partner-contact__success">
              <span className="partner-contact__success-icon">✓</span>
              <h3 className="partner-contact__title">Message sent.</h3>
              <p className="partner-contact__sub">
                We'll get back to you within a few days.
              </p>
            </div>
          ) : (
            <>
              <h3 className="partner-contact__title">Let's build something together.</h3>
              <p className="partner-contact__sub">
                Tell us who you are. We'll get back to you within a few days.
              </p>
              <form className="partner-contact__form" onSubmit={handleSubmit}>
                <div className="partner-contact__fields">
                  <div className="partner-contact__field">
                    <label htmlFor="pc-name">Name</label>
                    <input
                      id="pc-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={fields.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="partner-contact__field">
                    <label htmlFor="pc-org">Organisation</label>
                    <input
                      id="pc-org"
                      name="organisation"
                      type="text"
                      placeholder="Company / institution"
                      value={fields.organisation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="partner-contact__field">
                    <label htmlFor="pc-email">Email</label>
                    <input
                      id="pc-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={fields.value}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <p className="partner-contact__error">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  className="partner-contact__submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
