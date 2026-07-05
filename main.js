// Shared behaviour for every page: dark-mode toggle + scroll-reveal animations.

// --- Dark mode ---
(function () {
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }

    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
    }
})();

// --- Reveal on scroll ---
// Uses getBoundingClientRect rather than IntersectionObserver so it works in
// every renderer, plus a failsafe timeout so content is never left hidden.
(function () {
    const targets = document.querySelectorAll(
        '.intro, .project-item, .entry, .project-details-block, .skill-group, .metric'
    );
    if (!targets.length) return;

    const revealAll = () => targets.forEach((el) => el.classList.add('visible'));

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
        revealAll();
        return;
    }

    targets.forEach((el, i) => {
        el.classList.add('reveal');
        // Gentle stagger, capped so later items don't feel sluggish.
        el.style.transitionDelay = Math.min(i, 8) * 60 + 'ms';
    });

    const revealInView = () => {
        const viewportH = window.innerHeight || document.documentElement.clientHeight;
        targets.forEach((el) => {
            if (el.classList.contains('visible')) return;
            if (el.getBoundingClientRect().top < viewportH - 40) {
                el.classList.add('visible');
            }
        });
    };

    let ticking = false;
    const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            revealInView();
            ticking = false;
        });
    };

    revealInView(); // reveal whatever is already on screen
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    window.addEventListener('load', revealInView);

    // Failsafe: never leave content hidden if something goes wrong.
    setTimeout(revealAll, 2500);
})();
