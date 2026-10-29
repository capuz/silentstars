---
repo: "THEKROLL-LTD/Fathometer"
name: "Fathometer"
description: "Self-hosted CVE triage for your root servers: Trivy scans, LLM-judged exploitability, only the findings that matter."
readmeQualityOk: true
url: "https://github.com/THEKROLL-LTD/Fathometer"
language: "Python"
languages: ["Python"]
languagePcts: [84]
topics: ["cve", "cve-scanning", "devsecops", "flask", "infosec", "python", "security", "self-hosted", "triage", "trivy"]
stars: 36
forks: 0
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 1
recentReleases: 1
createdAt: "2026-05-14T11:58:06Z"
lastCommitAt: "2026-10-29T10:20:43Z"
lastReleaseAt: "2026-08-10T09:56:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 17
maintainers: ["svenkroll", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9dbdd48c2bf598824bd2139706fbec45cdcc9418ee02d1f531e02240d5601c38/THEKROLL-LTD/Fathometer"
discussionCount: 0
---

Self-hosted CVE intelligence for the <strong>root servers you run yourself</strong>.<br>
  Agents run Trivy on each host, Fathometer judges every finding in context with an
  LLM, and surfaces only the ones that actually need you.<br>
  Think uptime-kuma, but for CVEs on running servers.

  workspace, and a cross-host findings explorer — no sprawling menus, no
  dashboards-of-dashboards.

  &nbsp;
  &nbsp;
  &nbsp;

## Is this for you?

**Built for you if you:**

- run a handful of **plain root servers / VPSes** you administer yourself;
- want to know which of the hundreds of CVEs a host reports *actually matter on
  that host*, not in the abstract;
- want a calm, **self-hosted, single-operator** tool — no SaaS, no account, no
  data leaving your infrastructure, air-gap-friendly.

**Look elsewhere if you:**

- scan **container images, Kubernetes clusters, or CI pipelines** — use Trivy /
  Grype directly or a platform built for that;
- need **multi-user RBAC, SSO, or notifications** (email / Slack / webhooks);
- want enterprise vulnerability management with SLAs, ticketing and mobile
  dashboards.

### At a glance

| | |
|---|---|
| **Stack** | Python 3.14 · Flask · PostgreSQL 17 ·…
