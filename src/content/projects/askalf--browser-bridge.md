---
repo: "askalf/browser-bridge"
name: "browser-bridge"
description: "Stealth headless Chromium on your own CDP endpoint, with a prompt-injection firewall between the agent and the web."
readmeQualityOk: true
url: "https://github.com/askalf/browser-bridge"
homepage: "https://ownyourstack.sprayberrylabs.com/tools/browser-bridge"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
topics: ["cdp", "docker", "headless-chrome", "playwright", "puppeteer", "ai-agents", "browser-automation", "mcp", "own-your-stack", "prompt-injection"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-05-09T20:13:25Z"
lastCommitAt: "2026-11-03T12:47:45Z"
lastReleaseAt: "2026-08-09T20:53:28Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 64
maintainers: ["askalf", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/287f30d0e401c667c0258defe264895abef3a5ab9a23824dc77ebc02a8052bec/askalf/browser-bridge"
---

# browser-bridge

**Own your browser.**

One stealth headless Chromium in a container, exposing Chrome DevTools Protocol on port 9222 with the two things raw CDP never had: **authentication** and **a trust boundary you can read**. Connect from Playwright, Puppeteer, an MCP client, or any agent that wants a real browser without bundling one.

---

```bash
docker run --rm -p 127.0.0.1:9222:9222 --shm-size=512m ghcr.io/askalf/browser-bridge:latest
```

```ts
import { chromium } from 'playwright';
const browser = await chromium.connectOverCDP('http://localhost:9222');
```

That is the whole integration. Everything below is about what you are trusting when you do it.

## What sets it apart

Most "headless Chrome in Docker" images are a `Dockerfile` around a browser. browser-bridge is what you get when the CDP port is treated as production infrastructure:

- **The stealth score is measured, not asserted.** On every relevant push and PR, CI builds the image, drives it as an ordinary CDP client, and evaluates the bot-detection vectors that sannysoft and CreepJS probe, in-page, with no network ([`stealth-score.mjs`](https://github.com/askalf/browser-bridge/blob/HEAD/stealth-score.mjs)).…
