---
repo: "mrcyberharsh/iot-hunter"
name: "iot-hunter"
description: "IoT Hunter by MR Cyber Pulse Defensive IoT Security Toolkit for Authorized IoT Security Assessment"
readmeQualityOk: true
url: "https://github.com/mrcyberharsh/iot-hunter"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["iot-application", "iot-device", "iot-security"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-27T06:09:53Z"
lastCommitAt: "2026-11-07T16:13:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 50
maintainers: ["mrcyberharsh"]
openGraphImageUrl: "https://opengraph.githubassets.com/a46d7651510a3ad00fabbbfc32bd76067727e04e4fc15d1f8dae5b6af70d5aad/mrcyberharsh/iot-hunter"
---

# IoT Hunter

  Device discovery · Service fingerprinting · Protocol review · Anomaly monitoring · Remediation guidance · Reporting

**IoT Hunter** is a defensive toolkit for inventorying and reviewing IoT devices on networks you own or are authorized to assess. The current development branch identifies itself as **v3.1**.

## Capabilities

- Local-network device discovery
- Service and banner fingerprinting
- Vendor identification using available OUI data
- CVE information lookup based on detected service details
- Protocol configuration review
- Network-traffic anomaly monitoring
- Remediation guidance
- PDF and JSON report generation with inventory change summaries
- Local device inventory snapshots with new, missing, and changed-device tracking
- Private IPv4 range limits for the desktop scanner
- Explicit authorization confirmation in the desktop scanner
- Tkinter graphical interface

Some checks depend on operating-system permissions, network visibility, optional system packages, and external vulnerability-data services. Findings are leads for review, not proof of exploitability.

## Requirements

- Python 3.10+
- Dependencies in…
