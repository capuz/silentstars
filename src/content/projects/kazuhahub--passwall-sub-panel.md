---
repo: "KazuhaHub/Passwall-Sub-Panel"
name: "Passwall-Sub-Panel"
description: "Multi-user proxy subscription panel for 3X-UI/S-UI with Clash/Mihomo, sing-box and V2rayN subscriptions, traffic management, SSO, and Passwall Node support."
originalDescription: "Multi-user proxy subscription panel for 3X-UI/S-UI with Clash/Mihomo, sing-box and V2rayN subscriptions, traffic management, SSO, and Passwall Node support."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/KazuhaHub/Passwall-Sub-Panel"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [71, 26]
topics: ["3x-ui", "clash", "golang", "mihomo", "oidc", "panel", "proxy", "react", "saml", "self-hosted"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-12T05:36:13Z"
lastCommitAt: "2026-09-26T08:47:51Z"
lastReleaseAt: "2026-05-13T20:41:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 57
maintainers: ["KKazuhaK", "dependabot[bot]", "MLChinoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/17de8d5f9bfb845c586e95cb01961e77a3092ac817db34a20c2279f9e7a8e166/KazuhaHub/Passwall-Sub-Panel"
---

# Passwall Sub Panel

A pluggable multi-user subscription management panel for 3X-UI/S-UI that dynamically renders Clash/Mihomo, sing-box, and V2rayN subscriptions

---

## Introduction

Passwall Sub Panel is a proxy subscription management system built with Go + React. Through pluggable adapters, it integrates with [3X-UI](https://github.com/MHSanaei/3x-ui) and [S-UI](https://github.com/alireza0/s-ui), providing complete user management, subscription generation, traffic monitoring, as well as SSO single sign-on (SAML / OIDC), local login with 2FA / Passkey, operation audit, multiple databases (SQLite / MySQL / PostgreSQL), and non-root operation capabilities.

**Applicable scenarios**: From personal/friend groups and small teams to large and medium-sized organizations requiring single sign-on, operation audit, compliance traceability, and non-root deployment — a single-file binary can cover all scenarios with features enabled as needed.

**Deployment form**: Single-file Go binary (frontend SPA embedded via `go:embed`), can be launched directly with `./psp`, and Docker images are also provided.

### Versions and Upgrade Paths

- **V3 Final Stable**:…
