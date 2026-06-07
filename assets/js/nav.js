/* ============================================================
   BlueBil nav.js — sticky scroll behavior + mobile menu
   ============================================================ */

(function () {
  'use strict';

  const nav = document.querySelector('.site-nav');
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile');
  const mobileLinks = document.querySelectorAll('.nav-mobile .nav-link');

  if (!nav) return;

  // ── Active page link highlighting ──────────────────────────
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    if (link.dataset.page === currentPath) {
      link.classList.add('active');
    }
  });

  // ── Scroll-based nav state ─────────────────────────────────
  let lastScroll = 0;
  const SCROLL_THRESHOLD = 40;

  function updateNav() {
    const scrollY = window.scrollY;

    if (scrollY > SCROLL_THRESHOLD) {
      nav.classList.remove('nav-top');
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.add('nav-top');
      nav.classList.remove('nav-scrolled');
    }

    lastScroll = scrollY;
  }

  // Throttle scroll handler for performance
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateNav();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Initial state
  updateNav();

  // ── Mobile menu toggle ──────────────────────────────────────
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close on mobile link click
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Close dropdown on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-dropdown-menu').forEach(menu => {
        menu.closest('.nav-dropdown')?.blur();
      });
    }
  });
})();
