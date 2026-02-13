javascript: (function () {
    console.log('Bookmarklet: insert text');
    const text = `Answer directly, no flattery.`;
    const textarea = document.querySelector('textarea');
    if (textarea) {
        textarea.value = text;
        textarea.focus();
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
    } navigator.clipboard.writeText(text);
})()
