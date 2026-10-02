---
repo: "olegzhr/altprobe"
name: "altprobe"
description: "Collector/Correlator, Embedded log-based WAF, AI Patterns Classifier"
readmeQualityOk: true
url: "https://github.com/olegzhr/altprobe"
language: "Python"
languages: ["Python"]
languagePcts: [70]
topics: ["api", "collector", "falco", "mcp", "modsecurity-core-rule-set", "ocsf", "opensearch", "siem", "suricata", "waf"]
stars: 63
forks: 17
openIssues: 0
closedIssues: 3
watchers: 4
contributors: 1
recentReleases: 1
createdAt: "2017-02-01T08:36:30Z"
lastCommitAt: "2026-10-02T09:58:54Z"
lastReleaseAt: "2026-09-26T16:48:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 38
maintainers: ["olegzhr"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6e8f486b85c22fb9cd3ee92419828194d24e13418f1ba36f92b874b1397a335/olegzhr/altprobe"
---

# Altprobe

Altprobe gives security and platform teams visibility into AI agent, MCP, REST API, and gateway traffic. It collects events from gateways, proxy logs, runtime sensors, and network security tools, normalizes them into OCSF, and sends them to OpenSearch or compatible downstream systems.

If your SIEM or a similar system does not cover A2A, MCP, or AI-agent traffic, Altprobe can be used alongside it. It reads existing gateway and sensor logs, discovers AI agents, MCP servers, and APIs (including undocumented ones), identifies threats based on OWASP Top 10, and correlates them by MITRE ATT&CK / ATLAS — without deploying a full SIEM.

## Table of Contents

- [Architecture](#architecture)
- [Components](#components)
- [Example Screenshots](#example-screenshots)
  - [Solution Overview](#solution-overview)
  - [Agent Correlations](#agent-correlations)
  - [MITRE ATT&CK / ATLAS Timeline](#mitre-attck--atlas-timeline)
- [Why Use Altprobe](#why-use-altprobe)
- [Automated IP Blocking](#automated-ip-blocking)
- [Repository Contents](#repository-contents)
- [Requirements](#requirements)
- [Install From Package](#install-from-package)
- [Run Altprobe](#run-altprobe)
- [Quick-Start…
