---
repo: "demigodmode/pi-web-agent"
name: "pi-web-agent"
description: "Reliable web tools for Pi: search for sources, fetch over HTTP, and use headless browsing only when explicitly requested."
readmeQualityOk: true
url: "https://github.com/demigodmode/pi-web-agent"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["coding-agent", "pi", "typescript", "web-fetch", "web-search"]
stars: 43
forks: 4
openIssues: 2
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-14T22:46:57Z"
lastCommitAt: "2026-07-05T20:16:33Z"
lastReleaseAt: "2026-05-25T22:24:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 43
maintainers: ["demigodmode", "ydc-oss-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/7ffcaf85a47a0f87656c939046d58c702a661a8013ae529ffa44a6b6136f817b/demigodmode/pi-web-agent"
---

# pi-web-agent

`@demigodmode/pi-web-agent` is a Pi package for web access.

Most agent web tools blur search, fetch, browser rendering, and research into one vague thing. `pi-web-agent` exposes one public research tool, `web_explore`, and keeps search/fetch/headless work inside that bounded workflow.

The point is keeping the model-facing boundary simple: ask `web_explore` to research a question, and it handles direct links, discovery, HTTP reads, targeted browser rendering, source ranking, source-quality checks, and caveats internally.

That sounds obvious, but a lot of agent tooling gets fuzzy right there. This package is meant to be stricter about what it actually did and more willing to say when a read was not good enough to trust. Bot-check pages, narrow source sets, unreadable threads, and cautionary/conflicting evidence should show up as caveats instead of fake confidence.

## Install

Compatibility notice: current `pi-web-agent` requires Pi 0.74+ because Pi packages moved to the `@earendil-works/*` scope. Update Pi before updating this package. If you are on an older Pi version, stay on `@demigodmode/pi-web-agent@0.6.x` until Pi is updated.

```bash
pi install…
