/* ============================================================
   BlueBil device-hero.js
   Simplified: float + sparkle handled in CSS.
   Only the tilt parallax remains here.
   ============================================================ */

(function () {
  'use strict';

  const wrapper = document.getElementById('device-hero-wrapper');
  if (!wrapper) return;

  const MAX_TILT = 5;

  function handleMouseMove(e) {
    const rect = wrapper.getBoundingClientRect();
    const cx   = rect.left + rect.width  / 2;
    const cy   = rect.top  + rect.height / 2;
    const dx   = (e.clientX - cx) / (rect.width  / 2);
    const dy   = (e.clientY - cy) / (rect.height / 2);
    const rotX = (-dy * MAX_TILT).toFixed(2);
    const rotY = ( dx * MAX_TILT).toFixed(2);
    wrapper.style.transform =
      `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(var(--float-offset, 0px))`;
  }

  function handleMouseLeave() {
    wrapper.style.transform = '';
  }

  wrapper.addEventListener('mousemove', handleMouseMove);
  wrapper.addEventListener('mouseleave', handleMouseLeave);

})();
