import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import './ContactSection.css';

const FORMSPREE_URL = 'https://formspree.io/f/xqeglpdn';

export default function ContactSection({ label, headline, subline }) {
  const [ref, isVisible] = useInView();
  const [status, setStatus] = useState('idle');
  const [fields, setFields] = useState({ name: '', email: '', message: '' });

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
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setFields({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="about-contact" ref={ref}>
      <div className={`about-contact__inner${isVisible ? ' visible' : ''}`}>
        <div className="about-contact__header">
          <span className="about-contact__label">{label}</span>
          <h2 className="about-contact__headline">{headline}</h2>
          <p className="about-contact__sub">{subline}</p>
        </div>

        <div className="about-contact__form-wrap">
          {status === 'success' ? (
            <div className="about-contact__success">
              <span className="about-contact__success-icon">✓</span>
              <p className="about-contact__success-text">
                Message sent. We'll get back to you soon.
              </p>
            </div>
          ) : (
            <form className="about-contact__form" onSubmit={handleSubmit}>
              <div className="about-contact__row">
                <div className="about-contact__field">
                  <label htmlFor="ac-name">Name</label>
                  <input
                    id="ac-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={fields.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="about-contact__field">
                  <label htmlFor="ac-email">Email</label>
                  <input
                    id="ac-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={fields.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="about-contact__field">
                <label htmlFor="ac-message">Message</label>
                <textarea
                  id="ac-message"
                  name="message"
                  placeholder="What's on your mind?"
                  rows={5}
                  value={fields.message}
                  onChange={handleChange}
                  required
                />
              </div>
              {status === 'error' && (
                <p className="about-contact__error">Something went wrong. Please try again.</p>
              )}
              <button
                type="submit"
                className="about-contact__submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
