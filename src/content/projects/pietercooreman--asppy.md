---
repo: "PieterCooreman/ASPPY"
name: "ASPPY"
description: "ASPPY is a Python-based runtime that executes Classic ASP/VBScript pages on Windows, Linux, and macOS."
readmeQualityOk: true
url: "https://github.com/PieterCooreman/ASPPY"
homepage: "https://pietercooreman.github.io/ASPPY/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [51, 29]
stars: 13
forks: 2
openIssues: 2
closedIssues: 16
watchers: 5
contributors: 2
recentReleases: 2
createdAt: "2026-02-24T20:53:49Z"
lastCommitAt: "2026-09-28T10:05:43Z"
lastReleaseAt: "2026-09-07T12:53:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 57
maintainers: ["PieterCooreman", "jeffreyheping"]
openGraphImageUrl: "https://opengraph.githubassets.com/283343b2d89f4db40630a5f8464435a24f32d85c0846547ef899fb5d931d9cec/PieterCooreman/ASPPY"
discussionCount: 4
---

# ASPPY - Classic ASP/VBScript Runtime for Python

**Run your legacy Classic ASP pages on modern Python infrastructure - no IIS required.**

ASPPY is a Python-based runtime that executes Classic ASP (VBScript) pages on Windows, Linux, and macOS. It implements the full Classic ASP object model (`Request`, `Response`, `Session`, `Application`, `Server`) alongside broad VBScript built-in coverage, so most legacy ASP applications just work.

And ASPPY is not just a framework on paper - it powers **real, live websites in production today**, serving real users every day. [See them below.](#built-with-asppy--real-websites-real-users)

---

## Quick Start

Install a recent version of Python (>=3.9) via https://www.python.org/downloads/

Open a CMD window or use Powershell:

```bash
pip install asppy[all] --upgrade
```

Put your `.asp` files in a folder - say `www` - and serve it:

```bash
asppy localhost 8080 www
```

Point your browser at `http://localhost:8080` and your `.asp` pages are live.

Tip: In case you you want to fire up ASPPY from the same folder:

```bash
asppy localhost 8080 .
```

Easiest solution: create a `start.bat` file with that exact command and double-click it to…
