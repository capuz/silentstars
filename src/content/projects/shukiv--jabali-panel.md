---
repo: "shukiv/jabali-panel"
name: "jabali-panel"
description: "Modern web hosting control panel (Go + React) — WordPress + PHP isolation, Stalwart mail, PowerDNS, restic backups, CrowdSec WAF, per-user nspawn SSH. AGPL-3.0."
readmeQualityOk: true
url: "https://github.com/shukiv/jabali-panel"
homepage: "https://jabali-panel.com"
language: "Go"
languages: ["Go"]
languagePcts: [77]
topics: ["hosting", "antd", "bulwark", "control-panel", "crowdsec", "debian", "golang", "hosting-control-panel", "mariadb", "multi-tenant"]
stars: 125
forks: 32
openIssues: 11
closedIssues: 600
watchers: 4
contributors: 4
recentReleases: 10
createdAt: "2026-01-10T19:09:36Z"
lastCommitAt: "2026-10-21T23:36:40Z"
lastReleaseAt: "2026-09-07T14:13:20Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine", "community_hub"]
healthScore: 99
undervaluedScore: 46
maintainers: ["shukiv", "szepeviktor"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1131825433/5ca42577-0159-4811-83fc-cdab1d6d3891"
discussionCount: 40
---

# Jabali Panel

**A modern hosting control panel for WordPress and PHP hosting, built with Go and React.**

  &nbsp;|&nbsp;
  &nbsp;|&nbsp;
  &nbsp;|&nbsp;
  &nbsp;|&nbsp;

  Multi-tenant isolation. Root-safe automation. Database-driven reconciliation.
  A single panel binary serves the API and embedded SPA, while privileged host
  operations are delegated to a root-owned Unix-socket agent.

## Demo and Website

- Website: https://jabali-panel.com/
- Demo: https://demo.jabali-panel.com

### Demo mode (build-tag gated, on `main`)

The public demo at `https://demo.jabali-panel.com` runs **demo mode**. As of
JAB-159 it lives on `main`, gated **out of production artifacts at compile time**
(see [ADR-0160](https://github.com/shukiv/jabali-panel/blob/HEAD/docs/adr/0160-build-tag-demo-mode.md)). It is not a runtime toggle
and there is no `feat/demo-mode` branch to rebase.

What demo mode adds (present only in a demo build):

- write-blocking middleware — every non-idempotent `/api/v1/*` request
  (POST/PUT/PATCH/DELETE) returns `403 {"error":"demo_mode"}`, so visitors can
  browse every read endpoint without ever reaching the agent or a DB write;
- a `/info` endpoint that **exposes the…
