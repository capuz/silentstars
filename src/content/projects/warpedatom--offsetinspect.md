---
repo: "warpedatom/OffsetInspect"
name: "OffsetInspect"
description: "PowerShell module for mapping byte offsets to source context and locating AMSI or Microsoft Defender detection boundaries in text and binary files."
readmeQualityOk: true
url: "https://github.com/warpedatom/OffsetInspect"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [100]
topics: ["binary-analysis", "forensics", "forensics-tools", "incident-response", "malware-analysis", "powershell", "red-team", "reverse-engineering", "windows", "offset-analysis"]
stars: 35
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 7
createdAt: "2025-12-05T22:30:05Z"
lastCommitAt: "2026-07-21T06:11:21Z"
lastReleaseAt: "2026-07-21T03:26:54Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 40
maintainers: ["warpedatom", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/93321cc87d6aa8a677473000d3cf4c37e00a53d6129157a3e50db27a791b847a/warpedatom/OffsetInspect"
discussionCount: 0
---

</p>

</p>

# OffsetInspect

**A bounded-memory PowerShell toolkit for byte-offset inspection, source correlation, binary comparison, and defensive detection-boundary analysis.**

OffsetInspect answers a practical analyst question:

> What content is present at this byte offset, and what source or binary context surrounds it?

It also provides an OffsetInspect-native detection-boundary workflow inspired by the same analyst problem addressed by ThreatCheck, without bundling its source or binaries: it locates the earliest content prefix that AMSI or Microsoft Defender still detects, validates the boundary repeatedly, and feeds the resulting offset straight into the context inspector. On top of that core, it adds a red-team analysis and static-triage suite — multi-region discovery, corpus scanning, detection diffing, detection-trigger correlation, drift journaling, engagement reports, entropy analysis, string extraction, and PE/imphash parsing — all read-only, plus an authorized-use signature-robustness tester that perturbs samples only in memory, and without ever disabling or reconfiguring endpoint protection.

## Highlights

- Opens each unique inspection file through a stable read…
