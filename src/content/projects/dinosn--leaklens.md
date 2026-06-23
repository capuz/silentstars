---
repo: "dinosn/leaklens"
name: "leaklens"
description: "Web-aware secrets scanner for code, Git history, URLs, and JavaScript-heavy applications, with crawling and JS intelligence built in."
url: "https://github.com/dinosn/leaklens"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 27
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-20T11:20:08Z"
lastCommitAt: "2026-06-23T06:42:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 18
maintainers: ["dinosn", "N7WEra"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f7e1867b0dd046aaccbc2b888b228c9c3f8ae0cc780182cdd877bac6afb004d/dinosn/leaklens"
---

# LeakLens

LeakLens is a web-aware secrets scanner for source code, Git history, local files, direct URLs, and modern JavaScript-heavy web applications.

It is our own tool and repository. It started from the original [Praetorian Titus](https://github.com/praetorian-inc/titus) codebase, keeps the high-performance secret scanning engine and rule lineage, and adds a web-app workflow around crawling, JavaScript discovery, source-map recovery, and JS intelligence artifacts.

LeakLens uses [ProjectDiscovery Katana](https://github.com/projectdiscovery/katana) for crawling. The JS intelligence layer is inspired by concepts from PortSwigger [js-miner](https://github.com/PortSwigger/js-miner), but it is implemented in LeakLens as a separate informational layer. LeakLens secret findings still come from the scanner rule engine.

Use LeakLens only on codebases, repositories, and websites you are authorized to test.

## Current Focus

- CLI scanning for files, directories, Git repositories, direct URLs, and crawled websites.
- Secret detection with optional live validation.
- Web crawling for JS/JSON discovery using Katana.
- URL repair for same-host JS paths that are resolved too deeply by…
