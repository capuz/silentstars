---
repo: "praveenpuglia/indian-banks"
name: "indian-banks"
description: "Bank names, logos, short codes and other data. Sourced from official listings."
readmeQualityOk: true
url: "https://github.com/praveenpuglia/indian-banks"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [88]
stars: 39
forks: 11
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2022-11-24T06:55:44Z"
lastCommitAt: "2026-10-20T08:49:05Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 75
undervaluedScore: 38
maintainers: ["praveenpuglia"]
openGraphImageUrl: "https://opengraph.githubassets.com/5552ccbbee67e6184cf8c869018810fa2a9d70bfeb9045f9216bc74b408f9cd6/praveenpuglia/indian-banks"
fundingLinks: ["GITHUB:https://github.com/praveenpuglia", "CUSTOM:praveen.puglia@ybl"]
discussionCount: 1
---

# Indian Banks

Structured, centralized data, including logos for all the Indian Banks, collected from official sources.

## Using the logos

Every bank has a folder named after its **slug**, which is the lowercase IFSC prefix (`HDFC0000001` → `hdfc`). Find yours in the [table below](#bank-slugs), then point at the files directly over jsDelivr:

```
https://cdn.jsdelivr.net/gh/praveenpuglia/indian-banks/assets/logos/<slug>/logo.svg
https://cdn.jsdelivr.net/gh/praveenpuglia/indian-banks/assets/logos/<slug>/symbol.svg
```

Need a raster image (emails, native apps, places that don't take SVG)? Swap the extension. PNGs are rendered at the SVG's intrinsic size:

```
https://cdn.jsdelivr.net/gh/praveenpuglia/indian-banks/assets/logos/<slug>/logo.png
https://cdn.jsdelivr.net/gh/praveenpuglia/indian-banks/assets/logos/<slug>/symbol.png
```

```html
<img src="https://cdn.jsdelivr.net/gh/praveenpuglia/indian-banks/assets/logos/hdfc/logo.svg" alt="HDFC Bank" height="32" />
```

Each folder has a `logo` (full wordmark) and a `symbol` (square mark). A few banks have only one of the two, or a PNG with no SVG; the table below shows exactly what exists. The slug → bank name map is at…
