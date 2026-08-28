---
repo: "A-Box-of-Tools/website"
name: "website"
description: "Source for https://abox.tools/ — a box of small web tools for images, video, audio, PDFs and text. Your files never leave your machine, because there is no code path that could send them anywhere."
readmeQualityOk: true
url: "https://github.com/A-Box-of-Tools/website"
homepage: "http://abox.tools/"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [71, 24]
topics: ["client-side", "image-tools", "no-upload", "private", "webassembly"]
stars: 74
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-08-19T04:32:35Z"
lastCommitAt: "2026-08-28T12:25:15Z"
lastReleaseAt: "2026-08-26T16:09:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 33
maintainers: ["Josanshuo"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9535ae824ed9118cbbc751ae4bfa187be06a660d08f116dd8510cacc39625ad/A-Box-of-Tools/website"
---

# A Box of Tools

The source for **[abox.tools](https://abox.tools/)** — a small collection of
single-purpose web tools that do all of their work **in the browser**. No server,
no upload, no account.

The selling proposition is not "we promise not to look at your files", it is
"there is no code path that could send them anywhere". Everything below is
written to keep that true.

Most of these tools are also small enough to read in one sitting, and that is
worth keeping wherever it is free. It is not the promise, though. Where the
browser cannot do a job on its own, a vendored engine that runs on the
visitor's own machine beats not shipping the tool at all — see
[What can be built here](https://github.com/A-Box-of-Tools/website/blob/HEAD/docs/what-can-be-built-here.md).

---

## The tools

Each lives in its own folder under [`tools/`](https://github.com/A-Box-of-Tools/website/blob/HEAD/tools/), with its own README
explaining what it does and why it does it that way. The index there is
generated from the tool configs, so neither the list nor its count can fall
behind what actually exists.

The hub page lists them by category. It, and every tool page, is generated —
see…
