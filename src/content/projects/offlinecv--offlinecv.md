---
repo: "offlinecv/OfflineCV"
name: "OfflineCV"
description: "A private, no-login job-search workbench for resume PDFs — drop one in and see what a plain-text extractor actually reads back, with an anonymous structure/specificity score. Runs entirely in your browser; no uploads. Stable at offlinecv.org; bleeding-edge dev build at dev.offlinecv.org."
readmeQualityOk: true
url: "https://github.com/offlinecv/OfflineCV"
homepage: "https://offlinecv.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["ats", "client-side", "job-search", "parser", "pdf", "resume", "webllm"]
stars: 11
forks: 4
openIssues: 95
closedIssues: 524
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2026-05-29T00:44:26Z"
lastCommitAt: "2026-09-19T02:40:02Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 96
undervaluedScore: 56
maintainers: ["s-annam", "Vaishnavi1709", "Samhit21"]
openGraphImageUrl: "https://opengraph.githubassets.com/f40cdb6168c66e11f0fa7797d2b0405673ef9c119972a930e697983cc4d635b3/offlinecv/OfflineCV"
---

# offlinecv

**Try it:** [offlinecv.org](https://offlinecv.org) — stable, promoted daily once
CI is green · [dev.offlinecv.org](https://dev.offlinecv.org) — bleeding edge,
updated on every push

A PDF parser stress test for resumes. Drop a PDF in; see what a generic
text extractor reads back. It is diagnostic, not prescriptive — the tool
reports what its own parser sees, so you can spot the failure modes that
quietly drop a candidate's text on the floor before any downstream system
ever looks at it.

The core failure modes offlinecv surfaces are common but rarely visible:
two-column layouts that text extractors read across, image-only PDFs that
return zero selectable text, and "fonts-unmappable" PDFs (Framer, Affinity,
and some InDesign exports) where the source carries real text but the font
encoding doesn't decode to characters. For that last case the parser falls
back to the PDF's embedded link annotations as recovered signal, so a
candidate can still see what survived.

New contributors: see [`docs/architecture.md`](https://github.com/offlinecv/OfflineCV/blob/HEAD/docs/architecture.md) for a
one-page map of the pipeline and which folder each piece lives in,…
