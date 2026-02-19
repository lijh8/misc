javascript: (function () {
    const id = 'bookmarklet-toggle-theme-unique-id-123456';
    let e = document.getElementById(id);
    if (e && e.tagName === 'STYLE') {
        e.remove();
    } else {
        let s = document.createElement('style');
        s.id = id;
        s.textContent = '*{background:#212529!important;color:#f8f9fa!important;}a{color:#64b5f6!important;}';
        document.head.appendChild(s);
    }
})();
