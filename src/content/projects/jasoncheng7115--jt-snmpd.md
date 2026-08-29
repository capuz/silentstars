---
repo: "jasoncheng7115/jt-snmpd"
name: "jt-snmpd"
description: "Read-only SNMP agent for Windows. Replaces the deprecated Microsoft SNMP Service and feeds LibreNMS over standard MIBs — disk SMART, sensors, inventory. No kernel driver, MSI/GPO ready."
readmeQualityOk: true
url: "https://github.com/jasoncheng7115/jt-snmpd"
homepage: "https://jasoncheng7115.github.io/jt-snmpd/"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["librenms", "nms", "snmp", "windows", "monitoring", "net-snmp"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-24T08:28:49Z"
lastCommitAt: "2026-08-29T10:20:34Z"
lastReleaseAt: "2026-08-27T10:32:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 66
maintainers: ["jasoncheng7115"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a393c2a4a0dd22f5a925058921a308388523b7b13f556dbcbb9ac9a18f1a63e/jasoncheng7115/jt-snmpd"
---

# jt-snmpd v1.1.3

> A read-only SNMP agent for Windows that serves host monitoring data over standard
> MIBs, built to replace the deprecated built-in Microsoft SNMP Service and to feed
> LibreNMS without patching LibreNMS.
>
> By Jason Cheng (Jason Tools) · License: GPL-3.0-or-later · 繁體中文: [README_zh-TW.md](https://github.com/jasoncheng7115/jt-snmpd/blob/HEAD/README_zh-TW.md)

> **Project page: [https://jasoncheng7115.github.io/jt-snmpd/](https://jasoncheng7115.github.io/jt-snmpd/)** — comparison screenshots, measured numbers and the design rationale, in English and Traditional Chinese.

**Security:** to report a vulnerability privately, see [SECURITY.md](https://github.com/jasoncheng7115/jt-snmpd/blob/HEAD/SECURITY.md).

---

## Why jt-snmpd?

Microsoft deprecated the built-in SNMP Service, and Net-SNMP has no current
official Windows build. That leaves Windows hosts either unmonitored or monitored
through an agent that pushes to a time-series database — which does not help when
the NMS speaks SNMP.

jt-snmpd fills that gap with a few deliberate constraints, all driven by the target
environment (government agencies and hospitals: no outbound internet, Defender /
HVCI / WDAC…
