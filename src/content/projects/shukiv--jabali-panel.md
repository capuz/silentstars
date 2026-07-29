---
repo: "shukiv/jabali-panel"
name: "jabali-panel"
description: "Modern web hosting control panel (Go + React) — WordPress + PHP isolation, Stalwart mail, PowerDNS, restic backups, CrowdSec WAF, per-user nspawn SSH. AGPL-3.0."
readmeQualityOk: true
url: "https://github.com/shukiv/jabali-panel"
homepage: "https://jabali-panel.com"
language: "Go"
languages: ["Go"]
languagePcts: [72]
topics: ["hosting", "antd", "bulwark", "control-panel", "crowdsec", "debian", "golang", "hosting-control-panel", "mariadb", "multi-tenant"]
stars: 92
forks: 23
openIssues: 22
closedIssues: 347
watchers: 3
contributors: 3
recentReleases: 10
createdAt: "2026-01-10T19:09:36Z"
lastCommitAt: "2026-07-29T06:13:33Z"
lastReleaseAt: "2026-07-11T23:19:26Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 43
maintainers: ["shukiv"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1131825433/5ca42577-0159-4811-83fc-cdab1d6d3891?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260729%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260729T061706Z&X-Amz-Expires=300&X-Amz-Signature=4f594b231c4ce708ef9ee2f6cc119e9a3ba5489d239fdf5299e94c9b2eb94de3&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTMwNjEyNiwibmJmIjoxNzg1MzA1ODI2LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.EjHaSQlEKunXme9CdAQU3L--IfjLBFydvjpfPDuduiM"
discussionCount: 20
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="panel-ui/public/images/jabali_logo_dark.png">
  </picture>

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
- Demo: https://demo.jabali-panel.com

### Demo mode (build-tag gated, on `main`)

The public demo at `https://demo.jabali-panel.com` runs **demo mode**. As of
JAB-159 it lives on `main`, gated **out of production artifacts at compile time**
(see [ADR-0160](https://github.com/shukiv/jabali-panel/blob/HEAD/docs/adr/0160-build-tag-demo-mode.md)). It is not a runtime toggle
and there is no `feat/demo-mode` branch to rebase.

What demo mode adds (present only in a…
