import  Tribute  from 'tributejs';

const tribute = new Tribute({
    trigger: "!r",
    values: [
        { key: "must", value: "![badge](https://img.shields.io/badge/review-must-red.svg)" },
        { key: "should", value: "![badge](https://img.shields.io/badge/review-should-yellow.svg)" },
        { key: "imo :In my opinion", value: "![badge](https://img.shields.io/badge/review-imo-orange.svg)" },
        { key: "nits : nitpick", value: "![badge](https://img.shields.io/badge/review-nits-green.svg)" },
        { key: "suggest", value: "![badge](https://img.shields.io/badge/review-suggest-brightgreen.svg)"},
        { key: "ask", value: "![badge](https://img.shields.io/badge/review-ask-blue.svg)"},
        { key: "good", value: "![badge](https://img.shields.io/badge/review-good-pink.svg)"}
      ],
      selectTemplate: function(item) {
        return item.original.value;
      },
      replaceTextSuffix: '\n',
      requireLeadingSpace: true,
});


document.addEventListener('focusin', (evt) => {
    if (evt.target instanceof HTMLElement) {
        const elem :HTMLElement = <HTMLElement>evt.target;
        if (elem.tagName === 'TEXTAREA') {
            if (elem.getAttribute('data-tribute')) {
                return;
            }
            evt.preventDefault();
            tribute.attach(elem);
        }
    }
});