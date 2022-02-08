# review-badge-crx

![パッケージ画像](./rbicon.png)

https://chrome.google.com/webstore/detail/review-badge/kiepclhakcefkflamflnjbfogmfamoal

insert review badge for textarea
Add a badge to your review comments.

Please input "!r" in textarea for github site.


## usage

type `!r` in textarea and select popup list.


![screenshot1](https://github.com/sassy/review-badge-crx/blob/master/screenshot/screenshot1.png)


![screenshot2](https://github.com/sassy/review-badge-crx/blob/master/screenshot/screenshot2.png)



## badge
|label |badge |
|-------|-------|
|must |![badge](https://img.shields.io/badge/review-must-red.svg) |
|should |![badge](https://img.shields.io/badge/review-should-blue.svg)|
|imo |![badge](https://img.shields.io/badge/review-imo-orange.svg) |
|nits |![badge](https://img.shields.io/badge/review-nits-green.svg) |
|suggest |![badge](https://img.shields.io/badge/review-suggestion-blue.svg) |
|ask |![badge](https://img.shields.io/badge/review-ask-blue.svg) |

# Build and archive

```
$ yarn install
$ yarn webpack
$ yarn run archive
```



