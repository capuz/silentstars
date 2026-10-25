---
repo: "sunghoojung/reverse-engineering-browser"
name: "reverse-engineering-browser"
description: "Brave-based browser harness for reverse engineering."
readmeQualityOk: true
url: "https://github.com/sunghoojung/reverse-engineering-browser"
language: "JavaScript"
languages: ["JavaScript", "Rust"]
languagePcts: [49, 25]
topics: ["browser", "reverse-engineering"]
stars: 6
forks: 1
openIssues: 5
closedIssues: 37
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-02T05:35:14Z"
lastCommitAt: "2026-10-25T02:47:35Z"
lastReleaseAt: "2026-09-22T02:14:39Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 97
undervaluedScore: 63
maintainers: ["sunghoojung", "cursoragent", "cursor[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc7498e4ee3bb3531bf3af752ff71f774d0f6855bd5dde9d156d233004843727/sunghoojung/reverse-engineering-browser"
---

A local-first research browser and macOS workspace for inspecting authorized
  web applications.

## Research workbench

Origin Trace connects captured requests, source bytes, runtime observations and
local research notes in one macOS workspace.

[Download v0.3.1: Origin Trace + Brave](https://github.com/sunghoojung/reverse-engineering-browser/releases/tag/v0.3.1)
· [Release validation](https://github.com/sunghoojung/reverse-engineering-browser/actions/runs/38192572669)
· [Changes since v0.3.0](https://github.com/sunghoojung/reverse-engineering-browser/compare/v0.3.0...v0.3.1)

### Preparing v0.3.2: Origin Trace companion only

The v0.3.2 candidate updates Origin Trace without building or distributing Brave.
The latest published paired release remains v0.3.1 until this candidate passes
acceptance and is explicitly published. The companion ZIP targets Apple silicon; macOS 15 acceptance is required before
publication. Earlier macOS versions are unverified; no Intel, Windows or Linux
app is supplied.

This candidate has **no validated native-browser pair**. Brave distributed with
v0.3.0/v0.3.1 lacks newer native runtime-buffer and VM capture features. A matching
bundle ID does not…
