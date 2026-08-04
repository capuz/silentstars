---
repo: "browser-gateway/browser-gateway"
name: "browser-gateway"
description: "Control plane for browser fleets. One endpoint, any provider: failover, persistent profiles, session replay, REST API, MCP   server, dashboard. OpenRouter, for browsers."
readmeQualityOk: true
url: "https://github.com/browser-gateway/browser-gateway"
homepage: "https://browsergateway.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["agent", "browser", "cdp", "headless", "load-balancer", "browser-automation", "chrome-devtools-protocol", "mcp", "mcp-server", "playwright"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-03-25T15:04:43Z"
lastCommitAt: "2026-08-04T06:03:40Z"
lastReleaseAt: "2026-07-27T05:31:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 60
maintainers: ["iNerdStack"]
openGraphImageUrl: "https://opengraph.githubassets.com/bce62d520b8146cc7d464ff1f0567758ab56b966fd15a42bc6ea4446493f9c7b/browser-gateway/browser-gateway"
---

</p>

<h1 align="center">browser-gateway</h1>

  <strong>OpenRouter for browsers.</strong>
  <br />
  One endpoint that routes across every browser provider you use: automatic failover, persistent profiles, session replay, REST API, MCP server, dashboard.
  <br />
  Works unchanged with Puppeteer, Playwright, Stagehand, browser-use, and any MCP client.
</p>

</p>

  &nbsp;
  &nbsp;
  &nbsp;
</p>

  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;
</p>

</p>

---

## Overview

One endpoint. Multiple providers. Automatic failover when one is saturated or goes down.

Your app connects to `ws://gateway:9500/v1/connect`. The gateway picks the best available provider based on health, capacity, and your routing strategy. Providers can be cloud CDP services, Docker containers, or local Chrome instances.

---

## Dashboard

A web dashboard ships with every install. Open `http://localhost:9500/web` after starting the gateway.

**Overview.** Active sessions, queue depth, provider health, connection endpoint, and a copy-paste quickstart for Puppeteer, Playwright, Stagehand, browser-use, and raw CDP.

</p>

**REST API.** Run screenshot, content…
