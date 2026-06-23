---
repo: "shukiv/jabali-panel"
name: "jabali-panel"
description: "Modern web hosting control panel (Go + React) — WordPress + PHP isolation, Stalwart mail, PowerDNS, restic backups, CrowdSec WAF, per-user nspawn SSH. AGPL-3.0."
url: "https://github.com/shukiv/jabali-panel"
homepage: "https://jabali-panel.com"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [71, 20]
topics: ["hosting", "antd", "bulwark", "control-panel", "crowdsec", "debian", "golang", "hosting-control-panel", "mariadb", "multi-tenant"]
stars: 52
forks: 17
openIssues: 14
closedIssues: 220
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-01-10T19:09:36Z"
lastCommitAt: "2026-06-23T23:29:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 42
maintainers: ["shukiv"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1131825433/5ca42577-0159-4811-83fc-cdab1d6d3891"
discussionCount: 5
---

# Jabali Panel

**A modern hosting control panel for WordPress and PHP hosting, built with Go and React.**

<p>
  &nbsp;|&nbsp;
  &nbsp;|&nbsp;
  &nbsp;|&nbsp;
  &nbsp;|&nbsp;
</p>

<p>
</p>

<p>
  Multi-tenant isolation. Root-safe automation. Database-driven reconciliation.
  A single panel binary serves the API and embedded SPA, while privileged host
  operations are delegated to a root-owned Unix-socket agent.
</p>

</div>

> [!NOTE]
> Jabali Panel is currently a release candidate. Expect rapid iteration and
> breaking changes until 1.0.

## Demo and Website

- Website: https://jabali-panel.com/
- Demo: https://jabali-panel.com/demo/

### Demo mode (the `feat/demo-mode` branch)

The public demo at `https://jabali-panel.com/demo/` runs **demo mode**, which
lives on the long-lived **`feat/demo-mode`** branch (open PR, e.g. #103) and is
**intentionally never merged to `main`**.

What demo mode adds:

- write-blocking middleware — every non-idempotent `/api/v1/*` request
  (POST/PUT/PATCH/DELETE) returns `403 {"error":"demo_mode"}`, so visitors can
  browse every read endpoint without ever reaching the agent or a DB write;
- a `/info` endpoint that **exposes the seeded demo…
