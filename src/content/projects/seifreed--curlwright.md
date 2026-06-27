---
repo: "seifreed/Curlwright"
name: "Curlwright"
description: "CurlWright is a Cloudflare bypass tool that leverages Playwright to execute curl commands with full browser capabilities, allowing you to access protected websites seamlessly."
url: "https://github.com/seifreed/Curlwright"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 34
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-09-05T14:03:23Z"
lastCommitAt: "2026-06-27T06:23:14Z"
lastReleaseAt: "2026-03-09T14:04:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 38
maintainers: ["seifreed"]
openGraphImageUrl: "https://opengraph.githubassets.com/d02a7825f96cd08ef862447f8abe594f6d40ce75deb9ebed8f820eff2b9c9bd8/seifreed/Curlwright"
---

</p>

<h1 align="center">CurlWright</h1>

  <strong>Execute curl requests through a real Playwright browser when anti-bot protection gets in the way</strong>
</p>

</p>

</p>

---

## Overview

**CurlWright** is a Python tool that takes a curl command, opens a **real Google Chrome** browser through [Patchright](https://github.com/Kaliiiiiiiiii-Vinyzu/patchright) (a stealth-patched Playwright), works through Cloudflare and similar browser-side friction, and returns the final HTTP response in a form that still feels close to curl-driven workflows.

It is useful when a plain HTTP client is not enough because the target requires browser execution, JavaScript, cookies, challenge handling, or a persisted trusted session.

> **On the Cloudflare bypass:** CurlWright drives **real Google Chrome** (`channel="chrome"`) with [Patchright](https://github.com/Kaliiiiiiiiii-Vinyzu/patchright)'s protocol-level stealth (`navigator.webdriver` hidden, no CDP `Runtime.enable` leak), so it transparently handles passive Cloudflare (CDN) and has a real shot at managed / "I'm Under Attack" / non-interactive challenges.
>
> **Run headed for the best results.** The default (no `--headless`/`--no-gui`)…
