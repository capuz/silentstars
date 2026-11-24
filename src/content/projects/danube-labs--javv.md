---
repo: "Danube-Labs/javv"
name: "javv"
description: "Just Another Vulnerability Viewer - Kubernetes-runtime-native vulnerability triage, dashboards, and CSV reporting for Trivy and Grype scans, with an MCP endpoint for AI agents."
readmeQualityOk: true
url: "https://github.com/Danube-Labs/javv"
homepage: "https://danube-labs.github.io/javv/"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [32, 25]
topics: ["container-security", "cve", "devsecops", "fastapi", "grype", "kubernetes", "opensearch", "security", "trivy", "vue"]
stars: 10
forks: 0
openIssues: 15
closedIssues: 325
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-13T09:04:02Z"
lastCommitAt: "2026-11-24T14:08:41Z"
lastReleaseAt: "2026-07-04T19:33:23Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 99
undervaluedScore: 53
maintainers: ["danubeforge", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1268208561/9ab0ac96-08a1-4051-978e-c41d770c5dd6"
---

JAVV also scans Nomad clusters and Docker Compose hosts. It finds the images that
  vulnerability gets <b>its own triage lifecycle with an audit trail</b>: who changed what, and
  when. JAVV also gives you dashboards, time travel over the whole app and CSV export, without the
  weight of a full ASPM platform. An <b>AI agent</b> can read and triage the findings through the
  MCP endpoint.

    The fleet · the findings of one cluster · one vulnerability, with the evidence of each scanner
    and its own audit trail · the approval list · the audit log. Made-up data from two clusters.

---

## Why

Vulnerability tools are in two groups. **Triage tools** (DefectDojo, Dependency-Track) have a
triage lifecycle, but their reports are rigid. **Log dashboards** have flexible reports, but no
audit of a finding. JAVV gives you both: a real triage lifecycle *and* dashboards that you build,
over what runs in your clusters now.

What JAVV gives you:
