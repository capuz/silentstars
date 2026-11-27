---
repo: "rootsiemen/loophole"
name: "loophole"
description: "Loophole — a lightweight static security scanner that catches hardcoded secrets, SQLi, XSS, command injection, path traversal, weak crypto and more across JS/TS, Python, Go and PHP."
readmeQualityOk: true
url: "https://github.com/rootsiemen/loophole"
homepage: "https://rootsiemen-portfolio-sf-c596.vercel.app"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [58, 42]
topics: ["appsec", "code-quality", "code-scanning", "cybersecurity", "devsecops", "python", "sast", "security", "static-analysis", "vulnerability-scanner"]
stars: 11
forks: 13
openIssues: 26
closedIssues: 14
watchers: 0
contributors: 12
recentReleases: 3
createdAt: "2026-10-16T09:35:19Z"
lastCommitAt: "2026-11-27T16:25:24Z"
lastReleaseAt: "2026-11-27T16:25:46Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 84
undervaluedScore: 66
maintainers: ["rootsiemen", "neila31", "yoursraza"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0d8ffa15f924e1830ed06b169f03736592472298b84e9031718a581bda4e2e9/rootsiemen/loophole"
discussionCount: 0
---

# 🕳️ Loophole

🌐 **Website:** https://rootsiemen-portfolio-sf-c596.vercel.app · 📦 **Latest release:** [v1.2.0](https://github.com/rootsiemen/loophole/releases/tag/v1.2.0)

This project is tested with BrowserStack.

**Loophole** is a zero-dependency static security scanner that finds the holes
in your code — hardcoded secrets, SQL injection, XSS, command injection, weak
crypto and more — across **JavaScript/TypeScript, Python, Go and PHP**.
It also explains *why* each finding matters, suggests a fix, and can print
mechanical fix suggestions as diffs without ever touching your files.

```bash
python3 loophole.py scan ./src
# or, with the wrapper on your PATH:
loophole scan ./src
```

## Why another scanner?

Most scanners are either heavyweight SaaS products or regex grep-scripts with
noisy output. Loophole sits in the middle:
