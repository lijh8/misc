javascript: (function () {
    const id = 'bookmarklet-toggle-theme';
    let e = document.getElementById(id);
    if (e) {
        e.remove();
    } else {
        let s = document.createElement('style');
        s.id = id;
        s.textContent = `
            :root {
                --inverted-of: #ffffff;
            }
            html {
                filter: invert(1) grayscale(1) !important;
                background-color: var(--inverted-of) !important;
            }
            img, video, iframe, [style*="background-image"] {
                filter: invert(1) grayscale(1) !important;
            }
        `;
        document.head.appendChild(s);
    }
})();
