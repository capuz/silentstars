---
repo: "Danube-Labs/javv"
name: "javv"
description: "Just Another Vulnerability Viewer - Kubernetes-runtime-native vulnerability triage, dashboards, and CSV reporting for Trivy and Grype scans, with an MCP endpoint for AI agents."
readmeQualityOk: true
url: "https://github.com/Danube-Labs/javv"
homepage: "https://danube-labs.github.io/javv/"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [34, 24]
topics: ["container-security", "cve", "devsecops", "fastapi", "grype", "kubernetes", "opensearch", "security", "trivy", "vue"]
stars: 10
forks: 0
openIssues: 14
closedIssues: 287
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-13T09:04:02Z"
lastCommitAt: "2026-11-07T16:12:27Z"
lastReleaseAt: "2026-07-04T19:33:23Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 99
undervaluedScore: 53
maintainers: ["danubeforge", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1268208561/9ab0ac96-08a1-4051-978e-c41d770c5dd6"
---

Discovers what's <i>actually running</i> in your clusters, scans it with <b>Trivy and Grype</b>
  side by side, and gives <b>every vulnerability its own fully-audited triage lifecycle</b>: an
  immutable record of who changed what, and when. Plus rich dashboards, whole-app time-travel, and
  one-click CSV. Without the weight of a full ASPM platform. An <b>AI agent</b> can also read and
  triage the findings through the MCP endpoint.

    The fleet · one cluster's findings · a single CVE, its per-scanner evidence and its own audit
    trail · the risk-accept queue · the journal. Real data from a two-cluster dev environment.

---

## Why

Vulnerability tooling splits into two worlds: **triage tools** (DefectDojo, Dependency-Track) with
rigid reporting, and **log-analytics dashboards** with no concept of auditing a finding. JAVV fills
the seam: a real triage lifecycle *and* exploratory dashboards, over what's live in your clusters.

Three things it does differently:

- **Scans what's running, not a registry.** JAVV discovers the images actually deployed in your
  clusters and scans those: the vulnerabilities you're exposed to right now, not a catalogue.
- **Two scanners, never…
