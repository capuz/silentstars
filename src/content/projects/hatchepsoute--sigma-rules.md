---
repo: "Hatchepsoute/sigma-rules"
name: "sigma-rules"
description: "Open-source Sigma detection rules for SOC teams, covering active CVEs, real-world attacks, Fortinet, Windows, cloud threats, incident response and detection engineering."
url: "https://github.com/Hatchepsoute/sigma-rules"
homepage: "https://github.com/Hatchepsoute/sigma-rules"
language: "Mermaid"
languages: ["Mermaid", "Shell"]
languagePcts: [60, 36]
topics: ["blueteam", "cti", "cve", "detection-engineering", "fortinet", "incident-response", "siem", "sigma", "sigma-rules", "soc"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-12-16T08:01:06Z"
lastCommitAt: "2026-06-30T06:48:20Z"
lastReleaseAt: "2026-01-31T14:19:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 56
maintainers: ["Hatchepsoute"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a8475ed3ba7677ebade8d3e8d3b897c29126b6636db0d93008da2d734ce46f9/Hatchepsoute/sigma-rules"
discussionCount: 1
---

# 🛡️ Sigma detection framework for SOC operations
👉🏾 [French version available here](README_FR.md)

## Sigma rules -SOC detection engineering framework

This repository provides a **production-oriented SOC detection engineering framework** based on **Sigma rules**, **CTI-driven analysis**, and **real-world attack campaigns**.

This framework is designed to help SOC teams:
- Detect exploitation attempts **early**
- Reduce false positives
- Maintain detection coverage even as attacker tooling evolves

---

## Detection philosophy

This project avoids static IoCs (hashes, filenames, IPs) and instead relies on behavior-based detection using attack patterns and invariants, validated in real SOC environments.
Detection logic follows a **layered, SOC-tested, and resilient approach**:

- **BROAD rules** for visibility and threat hunting
- **STRICT rules** for confirmation and high-confidence alerting
- **Behavioral detections** resilient to payload renaming
- **Network invariants** for edge devices and appliances without EDR
- **Correlation logic** to confirm and contextualize incidents

Each CVE detection pack is documented in its own directory and includes Sigma rules, decision…
