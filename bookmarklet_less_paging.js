javascript: (function () {
    console.log('adjust offset for less paging');
    const OFFSET = 250;
    const MIN_SCROLL = 80;
    function h(e) {
        if (e.key === 'PageDown' || e.key === 'PageUp') {
            e.preventDefault();
            let a = window.innerHeight - OFFSET;
            a = a < MIN_SCROLL ? MIN_SCROLL : a;
            window.scrollBy({ top: e.key === 'PageDown' ? a : -a, behavior: 'smooth' });
        }
    }
    if (window.__pageScrollHandler) {
        document.removeEventListener('keydown', window.__pageScrollHandler);
    }
    window.__pageScrollHandler = h;
    document.addEventListener('keydown', h);
})();
