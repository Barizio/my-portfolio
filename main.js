// Shared behaviour for every page: theme toggle + scroll-reveal.
// Content is rendered by render.js BEFORE this runs (see the script order in
// each page), so reveal can safely query the populated DOM.

// --- Theme (dark is the default) ---
(function () {
    const root = document.documentElement;
    const stored = localStorage.getItem('theme');
    if (stored === 'light') root.setAttribute('data-theme', 'light');

    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const isLight = root.getAttribute('data-theme') === 'light';
            if (isLight) {
                root.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                root.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        });
    }
})();

// --- Reveal on scroll ---
// getBoundingClientRect (not IntersectionObserver) so it works everywhere, with
// a failsafe timeout so content is never left hidden.
(function () {
    const targets = document.querySelectorAll(
        '.hero, .section-title, .stat-grid, .skill-group, .card, .exp, .cert, .feature-list, .detail-block'
    );
    if (!targets.length) return;

    const revealAll = () => targets.forEach((el) => el.classList.add('visible'));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        revealAll();
        return;
    }

    targets.forEach((el, i) => {
        el.classList.add('reveal');
        el.style.transitionDelay = Math.min(i % 6, 5) * 60 + 'ms';
    });

    const revealInView = () => {
        const vh = window.innerHeight || document.documentElement.clientHeight;
        targets.forEach((el) => {
            if (el.classList.contains('visible')) return;
            if (el.getBoundingClientRect().top < vh - 40) el.classList.add('visible');
        });
    };

    let ticking = false;
    const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => { revealInView(); ticking = false; });
    };

    revealInView();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    window.addEventListener('load', revealInView);
    setTimeout(revealAll, 2500);
})();
