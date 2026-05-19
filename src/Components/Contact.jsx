import React from 'react';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="glass-card hover-glow rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 text-center">
          <h2 className="section-heading mx-auto">Contact</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Ready to build your next product? Reach out by email or open a conversation on LinkedIn.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:urooj.fatim2004@gmail.com"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/urooj-fatima-588ba2296"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-blue-500 px-6 py-3 font-semibold text-blue-100 transition hover:bg-blue-500/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Contact;
