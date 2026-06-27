---
repo: "grisuno/FreeDom"
name: "FreeDom"
description: "A free and open-source minimal web browser written in C, focused on Zero Trust and Zero Knowledge principles."
url: "https://github.com/grisuno/FreeDom"
language: "C"
languages: ["C"]
languagePcts: [97]
topics: ["browser", "modern-c", "privacy-first", "untraceable", "zero-knowledge", "zero-trust"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2026-06-16T05:13:55Z"
lastCommitAt: "2026-06-27T00:34:32Z"
lastReleaseAt: "2026-06-19T19:11:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 52
maintainers: ["grisuno"]
openGraphImageUrl: "https://opengraph.githubassets.com/1eb9778a6ae5653d32f6489e86b6e3adca700ec8a9883ab0606595dc11065500/grisuno/FreeDom"
---

# FreeDom

From the creators of LazyOwn Redteam Framework comes a free and open-source minimal web browser written in C, focused on Zero Trust and Zero Knowledge principles.

## Quick Start (Recommended)

**Easiest way to try FreeDom right now:**

```bash
git clone https://github.com/grisuno/FreeDom.git
cd FreeDom

# Docker (strongly recommended for testing)
sudo docker build -t freedom-browser . 

sudo docker run -it \
  --name freedom-test \
  -p 8080:8080 \
  --cap-drop=ALL \
  --security-opt no-new-privileges:true \
  --memory="2g" \
  freedom-browser
```

Then open your browser and go to: http://localhost:8080/vnc.html

## Philosophy

FreeDom (Free + DOM) is a lightweight, security-first web browser built from the ground up in modern C. It prioritizes user privacy, strong isolation, and minimal attack surface over feature bloat.

The name reflects its core goals:
- **Free**: Libre (freedom) and open source
- **Dom**: Reference to the DOM (Document Object Model) and domain-level control

## Features
- Written in portable C11
- Strong process-based sandboxing for each tab (seccomp-bpf with **W^X** — no executable
  memory, `PROT_EXEC` `mmap`/`mprotect` are killed — plus…
