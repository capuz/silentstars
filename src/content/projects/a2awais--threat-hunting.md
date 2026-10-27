---
repo: "a2awais/Threat-Hunting"
name: "Threat-Hunting"
description: "Threat Hunting queries of multiple platforms "
readmeQualityOk: true
url: "https://github.com/a2awais/Threat-Hunting"
homepage: "https://threatnexus.online"
language: "CQL"
languages: ["CQL"]
languagePcts: [100]
topics: ["detection-engineering", "threat-detection", "threat-hunting", "threat-intelligence", "cql", "crowdstrike", "hunting", "kql", "kql-queries", "kql-threathunting"]
stars: 86
forks: 10
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-08-21T09:44:24Z"
lastCommitAt: "2026-10-27T09:16:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 46
maintainers: ["a2awais", "detections-ai[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f813eaeb1d3c888cc54c10070e4d8b8e297a785afdb46198ea7574b26cc5c47/a2awais/Threat-Hunting"
---

# Threat-Hunting | Detection Engineering  

Collection of **threat hunting** and **detection queries** for:
- **CrowdStrike Falcon** (using CQL – CrowdStrike Query Language)
- **Microsoft Defender XDR** (using KQL – Kusto Query Language)

Aimed at surfacing suspicious processes, anomalous network behaviors, living-off-the-land binaries (LOLBins), persistence mechanisms, credential access, lateral movement, C2 activity, and potential **APT** behaviors. All mapped to **MITRE ATT&CK** techniques where applicable.

Queries are updated based on recent threat intelligence reports, emerging campaigns, and real-world observations.

## What's Inside

- `/CrowdStrike/` → CQL queries for Falcon Insight / LogScale / Next-Gen SIEM hunting
- `/KQL/` → KQL queries for Microsoft Defender for Endpoint, Defender XDR, and Sentinel

Most queries include:
- MITRE ATT&CK mapping
- Brief comments for use-case
- Tunable parameters (time windows, thresholds, exclusions)

## License
Free to use/modify/share (attribution appreciated).

Made with ❤️ by [Awais Munir](https://www.linkedin.com/in/iawais/)  

Questions? Open an issue or reach out on LinkedIn.
