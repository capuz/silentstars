---
repo: "KenM76/pdfcer-gui"
name: "pdfcer-gui"
description: "A PDF viewer and editor for Windows that shows what is really in the file: print colour kept as ink, transparency and blend modes honoured, damaged files still opened — and CAD sheets that make other viewers stutter. Measure, mark up, redact, fill forms, and edit what is on the page. One exe, nothing installed."
readmeQualityOk: true
url: "https://github.com/KenM76/pdfcer-gui"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["annotations", "cad", "desktop-application", "digital-signatures", "egui", "pdf", "pdf-editor", "redaction", "rust", "windows"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-03T16:24:11Z"
lastCommitAt: "2026-10-01T10:23:35Z"
lastReleaseAt: "2026-09-07T02:35:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 59
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/4bcd03f60ba95171d21da8df1281aedea7de2234941fb20315e92245f659cd88/KenM76/pdfcer-gui"
---

# pdfcer

**A PDF viewer and editor that shows you what is really in the file.**

pdfcer is a single Windows executable. Unzip the build folder, run it —
nothing is installed.

It opens the ordinary things: reports, scans, forms, print-shop artwork. It
also opens the awkward ones — the A1 site plan, the CAD export with a hundred
and fifty thousand drawing operators on one sheet, the file another viewer
calls damaged. Most of the work in pdfcer has gone into reading PDFs
faithfully, and that shows up as files simply looking right.

### [⬇ Download the latest build](https://github.com/KenM76/pdfcer-gui/releases/latest)

---

## Why files look right in it

The compatibility work is done against corpora of thousands of real-world PDFs
from every kind of producer — not against a handful of samples.

**CMYK is converted with measured data, not a formula.**
The PDF standard deliberately says nothing about how CMYK should look on a
screen, so every program has to choose. pdfcer's choice is a 1,296-point table
fitted to measured render output: solid cyan, solid black ink and every
overprint of them are values somebody actually measured, not what arithmetic
predicts. Arithmetic without data…
