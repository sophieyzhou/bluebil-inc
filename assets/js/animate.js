/* ============================================================
   BlueBil animate.js — scroll-triggered reveals + stat counters
   ============================================================ */

(function () {
  'use strict';

  // ── Reveal on scroll (fade-up) ─────────────────────────────

  const revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // only animate once
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealEls.forEach(el => observer.observe(el));
  }

  // ── Animated stat counters ─────────────────────────────────
  // Usage: <span class="stat-counter" data-target="60" data-suffix="%"></span>

  const counters = document.querySelectorAll('.stat-counter');

  if (counters.length) {
    const ease = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // ease-in-out

    function animateCounter(el) {
      const target = parseFloat(el.dataset.target) || 0;
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
      const duration = 1800;
      const start = performance.now();

      function step(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = ease(progress);
        const current = target * easedProgress;
        el.textContent = prefix + current.toFixed(decimals) + suffix;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = prefix + target.toFixed(decimals) + suffix;
        }
      }

      requestAnimationFrame(step);
    }

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(el => {
      el.textContent = (el.dataset.prefix || '') + '0' + (el.dataset.suffix || '');
      counterObserver.observe(el);
    });
  }

  // ── Staggered children reveal ──────────────────────────────
  // Adds reveal + delay classes to children of .stagger-children

  document.querySelectorAll('.stagger-children').forEach(parent => {
    const children = parent.children;
    Array.from(children).forEach((child, i) => {
      child.classList.add('reveal');
      const delayClass = ['reveal-delay-1','reveal-delay-2','reveal-delay-3','reveal-delay-4'];
      if (i > 0 && i <= 4) child.classList.add(delayClass[i - 1]);
    });
  });

  // Re-observe after stagger setup (in case already in viewport)
  document.querySelectorAll('.stagger-children .reveal').forEach(el => {
    if (revealEls.length) {
      const obs = new IntersectionObserver(
        entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('is-visible');
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
      );
      obs.observe(el);
    }
  });

})();
