---
repo: "liyafly/epub-handbook"
name: "epub-handbook"
description: "A practical handbook for EPUB authoring, typography, compatibility, and reading-system behavior across Apple Books, Kindle, Readium, and Readest."
originalDescription: "A practical handbook for EPUB authoring, typography, compatibility, and reading-system behavior across Apple Books, Kindle, Readium, and Readest."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/liyafly/epub-handbook"
language: "Go"
languages: ["Go"]
languagePcts: [82]
stars: 29
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-05-18T15:27:46Z"
lastCommitAt: "2026-09-28T10:07:25Z"
lastReleaseAt: "2026-09-21T14:41:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 47
maintainers: ["liyafly"]
openGraphImageUrl: "https://opengraph.githubassets.com/314991e8d6c9a3116e788a7860a2c88af2b63e569736638c5a4c04497c3f1703/liyafly/epub-handbook"
---

# epub-handbook

Chinese EPUB 3 creation, cleaning, and compatibility toolkit.

If you just want to create a book, fix an existing EPUB, or troubleshoot a specific issue, choose one of the three paths below.

The unified CLI entry point is `epub` (run with `go run ./cmd/epub` in the repository, or use it directly after `go build -o epub ./cmd/epub`).
`epub capabilities --json` lists all capabilities; add `--id <capability-id>` to view only that capability's parameters, default values, and execution form.
`epub run ... --json` and `epub redline --json` return a unified JSON envelope; `epub capabilities --json` returns a capabilities array. Exit codes 0/1/2/3
(0 success; 1 failure or error-level findings; 2 requires human approval; 3 usage error).

In releases, `epub.style.demo.maintain catalog=true` can use embedded catalogs offline; `epub.style.demo.maintain --input <book.epub>` requires repository checkout or setting `EPUB_HANDBOOK_ROOT` to point to the repository root.

As of 2026-09-27, the current release version is [`v0.4.2`](https://github.com/liyafly/epub-handbook/releases/tag/v0.4.2); attachments contain Linux amd64, Windows amd64, macOS arm64, and macOS amd64 binaries,…
