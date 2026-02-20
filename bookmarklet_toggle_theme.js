javascript: (function () {
    const id = 'bookmarklet-toggle-theme';
    let e = document.getElementById(id);
    if (e) {
        e.remove();
    } else {
        let s = document.createElement('style');
        s.id = id;
        s.textContent = 'html, iframe {'
            + '    filter: invert(1) grayscale(1) !important;'
            + '    background-color: white !important;'
            + '}'
            + '[style*="background-image"], img, svg, video {'
            + '    filter: invert(1) grayscale(1) !important;'
            + '}';
        document.head.appendChild(s);
    }
})();
