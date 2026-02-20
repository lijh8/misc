javascript: (function () {
    const id = 'bookmarklet-toggle-theme';
    let e = document.getElementById(id);
    if (e && e.tagName === 'STYLE') {
        e.remove();
    } else {
        let s = document.createElement('style');
        s.id = id;
        s.textContent = 'html{filter:invert(1) hue-rotate(180deg) saturate(0.5) brightness(0.9)!important;}img,video,canvas,iframe{filter:invert(1) hue-rotate(180deg) saturate(0.5) brightness(0.9)!important;}';
        document.head.appendChild(s);
    }
})();
