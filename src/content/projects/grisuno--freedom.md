---
repo: "grisuno/FreeDom"
name: "FreeDom"
description: "A free and open-source minimal web browser written in C, focused on Zero Trust and Zero Knowledge principles."
readmeQualityOk: true
url: "https://github.com/grisuno/FreeDom"
homepage: "https://grisuno.github.io/FreeDom/"
language: "C"
languages: ["C"]
languagePcts: [98]
topics: ["browser", "modern-c", "privacy-first", "untraceable", "zero-knowledge", "zero-trust"]
stars: 17
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2026-06-16T05:13:55Z"
lastCommitAt: "2026-07-11T05:57:19Z"
lastReleaseAt: "2026-06-19T19:11:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 46
maintainers: ["grisuno"]
openGraphImageUrl: "https://opengraph.githubassets.com/320d9150c70dbadc656d4cc3cbb1a52ee770aa2bbb7f226821fd8a96620a9da6/grisuno/FreeDom"
---

# FreeDom

From the creators of LazyOwn Redteam Framework comes a free and open-source minimal web browser written in C, focused on Zero Trust and Zero Knowledge principles.

## Quick Start

### Join the rebellion

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
- Strong process-based sandboxing for each tab: the worker is **forked _and re-exec'd_** so it
  inherits none of the browser's memory (a…
