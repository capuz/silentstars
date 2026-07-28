---
repo: "okieselbach/AutopilotMonitor"
name: "AutopilotMonitor"
description: "Advanced monitoring and troubleshooting solution for Windows Enrollments."
readmeQualityOk: true
url: "https://github.com/okieselbach/AutopilotMonitor"
homepage: "https://www.autopilotmonitor.com"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [76, 23]
topics: ["autopilot", "enrollment", "monitoring", "windows", "device-management", "device-provisioning", "msintune"]
stars: 33
forks: 3
openIssues: 2
closedIssues: 46
watchers: 3
contributors: 2
recentReleases: 10
createdAt: "2026-02-05T05:01:38Z"
lastCommitAt: "2026-07-28T14:52:19Z"
lastReleaseAt: "2026-07-22T08:36:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 49
maintainers: ["okieselbach", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/489d4f835688ae3897410548b69fcd0779c73f79580c398fa0e45d3d6d98f98f/okieselbach/AutopilotMonitor"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/okieselb"]
discussionCount: 1
---

# <img src="docs/images/logo.svg" height="28" alt="" /> AutopilotMonitor

Advanced monitoring and troubleshooting solution for Windows Autopilot deployments. Gain full visibility into every enrollment session with a detailed event timeline, fleet health dashboards, and session reporting. Define custom analysis rules to automatically detect issues and gather rules to collect targeted evidence. Retrieve diagnostics packages on demand, configure agent settings like auto-reboot behavior and automatic timezone adjustment — all managed centrally from the web dashboard.

## Private Preview

Autopilot Monitor is currently running as a **Private Preview**. Visit **[autopilotmonitor.com](https://www.autopilotmonitor.com)** to request access and learn more.

</p>
</p>

## Overview

Autopilot Monitor provides real-time tracking, intelligent diagnostics, and automated troubleshooting for Windows Autopilot enrollment processes. It consists of:

- **Bootstrap Script** — PowerShell script deployed via Intune that starts monitoring early in the enrollment process
- **Monitoring Agent** — Lightweight .NET application that collects telemetry and evidence during enrollment
- **Backend API** — Azure…
