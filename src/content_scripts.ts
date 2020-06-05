import  Tribute  from 'tributejs';
import { TributeItem }  from 'tributejs';


const tribute = new Tribute({
    trigger: "!",
    values: [
        { key: "must", value: "![badge](https://img.shields.io/badge/review-must-red.svg)" },
        { key: "imo", value: "![badge](https://img.shields.io/badge/review-imo-orange.svg)" },
        { key: "nits", value: "![badge](https://img.shields.io/badge/review-nits-green.svg)" },
        { key: "suggest", value: "![badge](https://img.shields.io/badge/review-suggestion-blue.svg)"}
      ],
      selectTemplate: function(item) {
        return item.original.value;
      },
      menuItemTemplate: function(item) {
        return "<span style='border: 1px solid #eee;padding: 3px 5px;border-radius: 2px;font-size: 15px;min-height: 32px;'>" + item.original.key + "</span>"
      }
});
tribute.attach(document.querySelectorAll("textarea"));
