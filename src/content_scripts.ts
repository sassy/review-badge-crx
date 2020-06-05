import  Tribute  from 'tributejs';

const tribute = new Tribute({
    trigger: "!r",
    values: [
        { key: "must", value: "![badge](https://img.shields.io/badge/review-must-red.svg)" },
        { key: "imo", value: "![badge](https://img.shields.io/badge/review-imo-orange.svg)" },
        { key: "nits", value: "![badge](https://img.shields.io/badge/review-nits-green.svg)" },
        { key: "suggest", value: "![badge](https://img.shields.io/badge/review-suggestion-blue.svg)"}
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
            evt.preventDefault();
            tribute.attach(elem);
        }
    }
})