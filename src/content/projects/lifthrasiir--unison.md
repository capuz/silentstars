---
repo: "lifthrasiir/unison"
name: "unison"
description: "Unison: Pan-Unicode Bitmap Font From Hell^WScratch"
readmeQualityOk: true
url: "https://github.com/lifthrasiir/unison"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["bitmap-font", "font", "font-generator"]
stars: 70
forks: 0
openIssues: 5
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2015-12-07T14:19:44Z"
lastCommitAt: "2026-07-25T06:00:44Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 70
undervaluedScore: 39
maintainers: ["lifthrasiir"]
openGraphImageUrl: "https://opengraph.githubassets.com/5caf67b041d1f9c386d38dbfa7c0694135097b0149ef34e36585ebc774458cc7/lifthrasiir/unison"
---

# Unison

**Unison** is a pan-Unicode hybrid bitmap monospace font in development.

* Download: [TTF](https://lifthrasiir.github.io/unison/unison.ttf), [WOFF2](https://lifthrasiir.github.io/unison/unison.woff2)
* [Glyph samples](https://lifthrasiir.github.io/unison/sample.html)
* [Live sample](https://lifthrasiir.github.io/unison/live.html)

## Pan-What?

A "pan-Unicode" font covers many, if not all, scripts in the Unicode.
Common pan-Unicode fonts include
[Arial Unicode MS](https://en.wikipedia.org/wiki/Arial_Unicode_MS),
[Code2000](https://en.wikipedia.org/wiki/Code2000),
[GNU Unifont](https://en.wikipedia.org/wiki/GNU_Unifont),
[GNU FreeFont](https://en.wikipedia.org/wiki/GNU_FreeFont),
and most recently, [Noto](https://www.google.com/get/noto/) font family.
Unison is designed to be pan-Unicode too.

Conceptually, Unison shares the same goal as GNU Unifont, a fixed-size bitmap font.
The major differences (and possible advantages) are as follows:

* Unison defines a subpixel shape (hence a "hybrid" bitmap font).

  Many other pan-Unicode fonts are either bitmap-only or outline-only,
  and look not that good when zoomed in (bitmap-only) or zoomed out (outline-only).
  While…
