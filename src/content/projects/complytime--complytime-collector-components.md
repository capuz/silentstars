---
repo: "complytime/complytime-collector-components"
name: "complytime-collector-components"
description: "A policy-driven observability toolkit for compliance monitoring"
readmeQualityOk: true
url: "https://github.com/complytime/complytime-collector-components"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [59, 24]
stars: 6
forks: 11
openIssues: 4
closedIssues: 55
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2025-07-31T15:02:26Z"
lastCommitAt: "2026-10-29T10:20:47Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 94
maintainers: ["dependabot[bot]", "marcusburghardt", "yvonnedevlinrh"]
openGraphImageUrl: "https://opengraph.githubassets.com/9dbdd48c2bf598824bd2139706fbec45cdcc9418ee02d1f531e02240d5601c38/complytime/complytime-collector-components"
---

# ComplyBeacon

----

> 🤖 LLM WARNING 🤖
>
> This project was written with LLM (AI) assistance.
>
> 🤖 LLM WARNING 🤖

----

**ComplyBeacon** is an open-source observability toolkit that collects, normalizes, and exports compliance evidence by extending the OpenTelemetry (OTel) standard.

It bridges the gap between raw policy scanner output and modern logging pipelines, providing a unified, normalized, and auditable data stream for security and compliance analysis.

---

> **WARNING:** All components are under initial development and are **not** ready for production use.

---

## Architecture

ComplyBeacon is composed of two components that form an evidence collection and normalization pipeline:

### 1. ProofWatch

An instrumentation library that accepts raw compliance evidence from policy scanners (OPA, Gatekeeper, Conforma, Sentinel), normalizes it into OCSF/Gemara format, and emits it as an OpenTelemetry log stream with accompanying metrics.

### 2. Beacon

A custom OpenTelemetry Collector distribution that hosts the pipeline. It receives log records via OTLP, webhook, or file input, batches and transforms them into standardized OCSF format, then exports to configured backends…
