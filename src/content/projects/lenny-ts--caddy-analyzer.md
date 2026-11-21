---
repo: "lenny-ts/caddy-analyzer"
name: "caddy-analyzer"
description: "Fast, zero-dependency access log analyzer, security threat inspector, and TUI dashboard for Caddy v2"
readmeQualityOk: true
url: "https://github.com/lenny-ts/caddy-analyzer"
homepage: "https://lenny-ts.github.io/caddy-analyzer/"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["access-logs", "bubbletea", "caddy", "caddy-server", "cli", "dashboard", "devops", "firewall", "go", "golang"]
stars: 45
forks: 14
openIssues: 13
closedIssues: 56
watchers: 1
contributors: 7
recentReleases: 1
createdAt: "2026-07-27T08:44:15Z"
lastCommitAt: "2026-11-17T21:19:40Z"
lastReleaseAt: "2026-08-29T12:08:48Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded"]
healthScore: 92
undervaluedScore: 43
maintainers: ["lenny-ts", "noahkhomer18", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e762513d15a52fe3e2d155d800fb206632cf9970bf128903aca140f3efde0858/lenny-ts/caddy-analyzer"
fundingLinks: ["KO_FI:https://ko-fi.com/profumato"]
discussionCount: 0
---

---

## Demo

---

## Security Detection Engine

Scans every Caddy v2 request against **26 attack categories** using a dual-pass pattern engine — first on the URL-unescaped URI, second on the raw URI to catch multibyte and double-encoded bypass attempts. Every detection is tagged with MITRE ATT&CK technique IDs. Suspicious requests are grouped by offending IP and surfaced in all output formats. Detections can be exported as Sigma rules for SIEM import.

| Category | Covers | Example Patterns |
|---|---|---|
| **SQL Injection** | SQLi probes, blind injection, DB fingerprinting | `UNION SELECT`, `OR 1=1`, `pg_sleep`, `INTO OUTFILE`, `@@version`, etc. |
| **NoSQL Injection** | MongoDB operators, JS eval injection | `$ne`, `$gt`, `$regex`, `$where`, `$nin`, `%24ne`, etc. |
| **XSS** | Reflected/stored/DOM XSS, event handlers, protocol JS | `<script`, `onerror=`, `onfocus=`, `alert(`, `document.cookie`, `data:text/html`, etc. |
