/* ============================================================
   BlueBil components.js — injects shared nav + footer HTML
   Import this BEFORE nav.js and animate.js
   ============================================================ */

(function () {
  'use strict';

  // ── Nav HTML ───────────────────────────────────────────────

  const navHTML = `
    <nav class="site-nav nav-top" id="site-nav" aria-label="Main navigation">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo" aria-label="BlueBil home">
          <img src="assets/images/branding/logo.png" alt="BlueBil logo" style="height:32px">
        </a>

        <div class="nav-links" role="list">
          <a href="index.html"    class="nav-link" data-page="index.html"    role="listitem">Home</a>
          <div class="nav-dropdown" role="listitem">
            <a href="science.html" class="nav-link nav-link--parent" data-page="science.html">
                The Science
                <svg class="nav-dropdown-chevron" viewBox="0 0 12 8" fill="none"
                    width="10" height="10" aria-hidden="true">
                <path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
            <div class="nav-dropdown-menu" role="menu" aria-label="The Science sections">
                <a href="science.html#device-architecture" class="nav-dropdown-item" role="menuitem">
                <span class="nav-dropdown-item__icon">⬡</span>
                <span>
                    <strong>Device Design</strong>
                    <em>Components &amp; architecture</em>
                </span>
                </a>
                <a href="science.html#sensing" class="nav-dropdown-item" role="menuitem">
                <span class="nav-dropdown-item__icon">◎</span>
                <span>
                    <strong>Optical System</strong>
                    <em>Wavelengths &amp; Beer-Lambert</em>
                </span>
                </a>
                <a href="science.html#firmware" class="nav-dropdown-item" role="menuitem">
                <span class="nav-dropdown-item__icon">▷</span>
                <span>
                    <strong>Firmware</strong>
                    <em>State machine &amp; measurement</em>
                </span>
                </a>
                <a href="science.html#validation" class="nav-dropdown-item" role="menuitem">
                <span class="nav-dropdown-item__icon">◈</span>
                <span>
                    <strong>Validation</strong>
                    <em>Results &amp; limitations</em>
                </span>
                </a>
            </div>
            </div>
          <a href="about.html"    class="nav-link" data-page="about.html"    role="listitem">About</a>
          <a href="contact.html"  class="nav-link" data-page="contact.html"  role="listitem">Contact</a>
        </div>

        <a href="contact.html" class="btn btn--accent btn--sm nav-cta">Partner With Us</a>

        <button class="nav-hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <div class="nav-mobile" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <a href="index.html"   class="nav-link" data-page="index.html">Home</a>
      <a href="science.html" class="nav-link" data-page="science.html">The Science</a>
      <a href="science.html#device-architecture"
         style="font-size:var(--text-lg);padding-left:var(--space-10);opacity:0.65"
         class="nav-link">Device Design</a>
      <a href="science.html#sensing"
         style="font-size:var(--text-lg);padding-left:var(--space-10);opacity:0.65"
         class="nav-link">Optical System</a>
      <a href="science.html#firmware"
         style="font-size:var(--text-lg);padding-left:var(--space-10);opacity:0.65"
         class="nav-link">Firmware</a>
      <a href="science.html#validation"
         style="font-size:var(--text-lg);padding-left:var(--space-10);opacity:0.65"
         class="nav-link">Validation</a>
      <a href="about.html"   class="nav-link" data-page="about.html">About</a>
      <a href="contact.html" class="nav-link" data-page="contact.html">Contact</a>
      <a href="contact.html" class="btn btn--accent mt-8">Partner With Us</a>
    </div>
  `;

  // ── Footer HTML ────────────────────────────────────────────

  const footerHTML = `
    <footer class="site-footer" aria-label="Site footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo-text">Blue<span>Bil</span></div>
            <p>A non-invasive ophthalmic device for accurate, equitable neonatal jaundice detection — built for every baby, everywhere.</p>
          </div>

          <div class="footer-col">
            <h4>Product</h4>
            <ul>
              <li><a href="science.html">How It Works</a></li>
              <li><a href="science.html#validation">Validation Data</a></li>
              <li><a href="science.html#regulatory">Regulatory Path</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="about.html">Our Mission</a></li>
              <li><a href="about.html#team">The Team</a></li>
              <li><a href="about.html#impact">Global Impact</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="contact.html">Partner With Us</a></li>
              <li><a href="contact.html#invest">Investors</a></li>
              <li><a href="contact.html#press">Press Inquiries</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 BlueBil, Inc. All rights reserved. University of Michigan.</p>
          <div class="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  // ── Inject into page ───────────────────────────────────────

  const navTarget = document.getElementById('nav-mount');
  const footerTarget = document.getElementById('footer-mount');

  if (navTarget) navTarget.innerHTML = navHTML;
  if (footerTarget) footerTarget.innerHTML = footerHTML;

})();
