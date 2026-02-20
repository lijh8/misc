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
                --bg-color: #212529;
                --fg-color: #f8f9fa;
            }
            html {
                filter: invert(1) grayscale(1) !important;
                background: var(--bg-color) !important;
            }
            body {
                background: var(--fg-color) !important;
            }
            img, video, iframe, [style*="background-image"] {
                filter: invert(1) grayscale(1) !important;
            }
        `;
        document.head.appendChild(s);
    }
})();
