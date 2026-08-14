---
repo: "trevorld/r-xmpdf"
name: "r-xmpdf"
description: "Edit XMP metadata and PDF bookmarks/documentation info"
readmeQualityOk: true
url: "https://github.com/trevorld/r-xmpdf"
homepage: "https://trevorldavis.com/R/xmpdf/dev/index.html"
language: "R"
languages: ["R"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 17
closedIssues: 41
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-09-26T18:12:09Z"
lastCommitAt: "2026-08-14T05:15:10Z"
lastReleaseAt: "2024-03-30T02:46:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 69
undervaluedScore: 54
maintainers: ["trevorld", "djvill"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf96923cccec57ccf529753c54c783f46f619df63115c3e6c9e4e45086bdfb63/trevorld/r-xmpdf"
fundingLinks: ["GITHUB:https://github.com/trevorld"]
---

# xmpdf <img src="man/figures/logo.png" align="right" width="200px" alt="xmpdf hex sticker">

### Table of Contents

* [Overview](#overview)
* [Installation](#installation)
* [Examples](#examples)

  + [Add XMP/docinfo metadata and bookmarks to a pdf](#pdfcreate)
  + [Add Google Images and Creative Commons license XMP metadata to a png image](#pnglicense)
  + [Concatenate pdf files and embed concatenated bookmarks](#pdfcat)

* [Limitations by backend](#comparison)
* [External links](#links)

  + [Metadata links](#standards)
  + [Related software](#similar)

## <a name="overview">Overview</a>

`{xmpdf}` provides functions for getting and setting [Extensibe Metadata Platform (XMP)](https://en.wikipedia.org/wiki/Extensible_Metadata_Platform) metadata in a variety of media file formats as well as getting and setting PDF [documentation info](https://opensource.adobe.com/dc-acrobat-sdk-docs/library/pdfmark/pdfmark_Basic.html#document-info-dictionary-docinfo) entries and [bookmarks](https://opensource.adobe.com/dc-acrobat-sdk-docs/library/pdfmark/pdfmark_Basic.html#bookmarks-out) (aka outline aka table of contents).

## <a name="installation">Installation</a>

```r…
