javascript: (function () {
    console.log('click bookmark twice, then append some spaces');
    const text = 'Answer directly, no flattery.';
    const textarea = document.querySelector('textarea');
    if (textarea) {
        textarea.value = text;
        textarea.focus();
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
    }
    navigator.clipboard.writeText(text);
})();
