---
repo: "stufently/google-webtools-mcp"
name: "google-webtools-mcp"
description: "Unified MCP server for Google Analytics 4 + Google Search Console"
readmeQualityOk: true
url: "https://github.com/stufently/google-webtools-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-22T07:13:39Z"
lastCommitAt: "2026-10-10T10:03:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 29
maintainers: ["stufently"]
openGraphImageUrl: "https://opengraph.githubassets.com/25cd6bbd9dbba57e10381b51a56e218d9eb1b9b5dcbad9327e3f9d274db2d0ed/stufently/google-webtools-mcp"
---

# google-webtools-mcp

An MCP server that gives an AI agent direct access to **Google Search Console** and **Google Analytics 4** — property management, search performance analysis, indexing checks, GA4 reporting, and site verification.

---

## For AI agents

If an agent is driving this server, point it at **[SKILL.md](https://github.com/stufently/google-webtools-mcp/blob/HEAD/SKILL.md)** first
(Russian). It covers the working order — property discovery, verification,
sitemaps, indexing checks, the regular audit path — how to read a URL Inspection
result, what Search Console does *not* expose, which calls burn quota, and which
tools write to live configuration.

---

## What it does

The server exposes **39 tools** built on five Google APIs:

| API | Used for |
| --- | --- |
| Search Console API (`webmasters` v3) | Properties, sitemaps, search analytics |
| Search Console API (`searchconsole` v1) | URL Inspection |
| Google Analytics Admin API (v1beta) | GA4 accounts, properties, data streams |
| Google Analytics Data API (v1beta) | GA4 reports, realtime, metadata |
| Site Verification API (v1) | Verification tokens, ownership verification |

Beyond raw API access, tool responses…
