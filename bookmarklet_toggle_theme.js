javascript: (function () {
    const id = 'bookmarklet-toggle-theme';
    let e = document.getElementById(id);
    if (e) {
        e.remove();
    } else {
        let s = document.createElement('style');
        s.id = id;
        s.textContent = 'html {'
            + '    background-color: white !important;'
            + '    filter: invert(1) grayscale(1) !important;'
            + '}';
        document.head.appendChild(s);
    }
})();
