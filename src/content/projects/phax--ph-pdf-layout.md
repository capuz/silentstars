---
repo: "phax/ph-pdf-layout"
name: "ph-pdf-layout"
description: "Java library for creating fluid page layouts with Apache PDFBox. Supporting multi-page tables, different page layouts etc."
readmeQualityOk: true
url: "https://github.com/phax/ph-pdf-layout"
language: "Java"
languages: ["Java"]
languagePcts: [98]
topics: ["java", "pdf", "pdfbox", "layout-engine", "rendering", "pdf-generation"]
stars: 96
forks: 14
openIssues: 8
closedIssues: 49
watchers: 10
contributors: 3
recentReleases: 0
createdAt: "2014-08-26T11:29:35Z"
lastCommitAt: "2026-10-21T23:35:51Z"
lastReleaseAt: "2017-05-16T12:35:21Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 38
maintainers: ["phax", "andreasa-winenet"]
openGraphImageUrl: "https://opengraph.githubassets.com/3aa30af95540819fbb31c4cb2c015d499d1745ba81f04af19e0880f92a48ba1c/phax/ph-pdf-layout"
discussionCount: 1
---

# ph-pdf-layout

> If this project saved you some time or made your day a little easier, a star would mean a lot — it helps others find it too.

Java library for creating fluid page layouts with Apache PDFBox 3.x.

Please check the [examples files](https://github.com/phax/ph-pdf-layout/tree/master/example-files) to see what kind of PDFs may be created.
Please see the [unit tests](https://github.com/phax/ph-pdf-layout/tree/master/ph-pdf-layout/src/test/java/com/helger/pdflayout/element) on how to create and use the different elements.

System requirements:
* At least Java 17 - newer versions should work as well
* GitHub actions test with all LTS version (currently 17, 21 and 24)

The basic elements provided are:
* `PageLayoutPDF` - the entry class, having a list of page sets
* `PLPageSet` - a set of pages that share the same size and orientation and contain a set of elements. The assignments to pages happens dynamically.
* *PL elements* - basic or complex layout elements ("PL" is short for "PDF Layout")
  * Basic (inline) elements are
     * plain text in class `PLText` (Unicode of course)
       * For custom Open Source fonts to be used see the https://github.com/phax/ph-fonts…
